# Kapitel 4: Die Seite im Container ausliefern

**Ziel:** Du schreibst ein Dockerfile, baust daraus ein Image mit deiner fertigen Seite und öffnest sie im Browser.

Du legst drei Dateien im **Hauptordner** des Projekts an, neben `package.json`. Sie sind nur zum Lernen, dein Deployment nutzt sie nicht. Arbeite dafür auf dem Branch `docker-learning` (siehe [README](../README.md)).

## Schritt 1: `.dockerignore`

Diese Datei sagt Docker, welche Dateien es beim Bauen ignorieren soll. Lege sie mit genau diesem Namen an:

```
node_modules
dist
.angular
.git
.github
.claude
.vscode
documentation
*.pdf
.DS_Store
.env*
```

| Eintrag | Warum |
| --- | --- |
| `node_modules`, `dist`, `.angular` | werden im Container neu erzeugt, die Mac-Version würde nur stören |
| `.git`, `.github`, `.claude`, `.vscode` | gehören nicht ins Image, `.git` enthält die gesamte Historie |
| `documentation`, `*.pdf` | für den Build unnötig und machen ihn nur langsamer |
| `.DS_Store` | macOS-Müll |
| `.env*` | Sicherheitsnetz: Falls du irgendwann Dateien mit Passwörtern anlegst, landen sie nie im Image |

## Schritt 2: `nginx-site.conf`

nginx ist der Webserver, der die Dateien ausliefert. Diese Konfiguration sagt ihm, wie:

```nginx
server {
  listen 80;
  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

| Zeile | Bedeutung |
| --- | --- |
| `listen 80;` | höre auf Port 80 (im Container) |
| `root ...;` | hier liegen die Dateien der Seite |
| `try_files $uri $uri/ /index.html;` | Gibt es die angefragte Datei oder den Ordner, liefere sie aus. Sonst liefere `index.html`. Nur so kann der Angular-Router Adressen wie `/legal-notice` beim Neuladen selbst übernehmen. |

## Schritt 3: `Dockerfile`

Der Dateiname ist genau `Dockerfile`, ohne Endung.

```dockerfile
# Stage 1: build the Angular app
FROM node:24 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY . .
RUN npm run build

# Stage 2: serve the result with nginx
FROM nginx:alpine
COPY nginx-site.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html
```

| Zeile | Bedeutung |
| --- | --- |
| `FROM node:24 AS build` | beginne mit Linux und Node 24 und nenne diese Stufe `build` |
| `WORKDIR /app` | arbeite ab jetzt im Ordner `/app` im Image |
| `COPY package.json package-lock.json ./` | kopiere nur die Paketlisten |
| `RUN npm ci --ignore-scripts` | installiere die Pakete |
| `COPY . .` | kopiere jetzt den Rest des Projekts (ohne das, was in `.dockerignore` steht) |
| `RUN npm run build` | baue die Seite |
| `FROM nginx:alpine` | beginne ein **neues, kleines** Image mit nginx |
| `COPY nginx-site.conf ...` | ersetze die Standard-Konfiguration durch deine |
| `COPY --from=build ...` | hole nur das fertige Ergebnis aus der ersten Stufe |

Zwei Dinge sind hier wichtig:

- **Zwei Stufen:** Das fertige Image enthält nur nginx und die gebaute Seite, weder Node noch `node_modules` noch deinen Quellcode. Es ist klein und bietet weniger Angriffsfläche.
- **Erst Paketlisten, dann der Rest:** Docker speichert jeden Schritt zwischen. Ändert sich nur dein Code, aber nicht `package-lock.json`, wird `npm ci` nicht wiederholt. Das spart bei jedem weiteren Bauen viel Zeit.

## Schritt 4: Image bauen

```bash
docker build --tag portfolio-image .
```

`--tag portfolio-image` gibt dem Image einen Namen. Der Punkt am Ende ist der **Build-Kontext**: der aktuelle Ordner.

**Das solltest du sehen:** Docker arbeitet die Stufen der Reihe nach ab. Beim ersten Mal dauert es ein bis zwei Minuten, und am Ende steht keine Fehlermeldung. Prüfe:

```bash
docker images
```

In der Liste steht jetzt `portfolio-image`.

## Schritt 5: Container starten

```bash
docker run --detach --name portfolio-container --publish 127.0.0.1:8080:80 portfolio-image
```

| Teil | Bedeutung |
| --- | --- |
| `--detach` | starte im Hintergrund und gib das Terminal sofort zurück |
| `--name portfolio-container` | gib dem Container einen Namen, damit du ihn leicht ansprechen kannst |
| `--publish 127.0.0.1:8080:80` | Port 8080 **deines Macs** führt zu Port 80 im Container. Mit `127.0.0.1` ist er nur von deinem Mac aus erreichbar. |
| `portfolio-image` | das Image, aus dem der Container entsteht |

Öffne im Browser <http://localhost:8080>.

**Das solltest du sehen:** dein Portfolio, ausgeliefert von nginx in einem Container.

Schau dir außerdem an:

```bash
docker ps
docker logs portfolio-container
```

`docker logs` zeigt, welche Dateien der Browser angefragt hat.

## Schritt 6: Neuladen auf einer Unterseite

Öffne <http://localhost:8080/legal-notice> und lade die Seite mit `Cmd+R` neu.

**Das solltest du sehen:** Die Seite lädt weiter. Das ist die Wirkung von `try_files` aus Schritt 2.

## Schritt 7: In den laufenden Container schauen

```bash
docker exec --interactive --tty portfolio-container sh
ls /usr/share/nginx/html
exit
```

Das Image `nginx:alpine` hat keine `bash`, nur die einfachere `sh`. Du siehst dieselben Dateien, die auch im Webroot deines Servers liegen: `index.html`, die `main-…js` und so weiter.

## Schritt 8: Stoppen und entfernen

```bash
docker stop portfolio-container
docker rm portfolio-container
```

## Wenn etwas nicht klappt

| Meldung | Ursache und Lösung |
| --- | --- |
| `port is already allocated` | Port 8080 ist belegt. Nimm einen anderen, zum Beispiel `127.0.0.1:8081:80`. |
| `Conflict. The container name "/portfolio-container" is already in use` | Es gibt schon einen Container mit dem Namen. Entferne ihn mit `docker rm --force portfolio-container`. |
| `failed to read dockerfile` | Die Datei heißt anders (zum Beispiel `Dockerfile.txt`) oder liegt im falschen Ordner. Prüfe mit `ls Dockerfile`. |
| `COPY nginx-site.conf ... not found` | Die Datei fehlt oder heißt anders. Prüfe mit `ls nginx-site.conf`. |
| Die Seite bleibt leer | Schau mit `docker logs portfolio-container` und lies auch die Fehlermeldungen im Browser (Rechtsklick, **Untersuchen**, Konsole). |

## Experimente

1. **Eine Änderung sichtbar machen:** Ändere einen Text in deiner App, baue das Image neu (`docker build --tag portfolio-image .`) und ersetze den Container:

   ```bash
   docker rm --force portfolio-container
   docker run --detach --name portfolio-container --publish 127.0.0.1:8080:80 portfolio-image
   ```

   Achte beim Bauen auf das Wort `CACHED` bei den Schritten `COPY package.json` und `npm ci`. Warum werden sie diesmal übersprungen?
2. **Den Fallback entfernen:** Lösche in `nginx-site.conf` die Zeile mit `try_files` und ersetze sie durch `try_files $uri $uri/ =404;`. Baue neu, starte neu und lade <http://localhost:8080/legal-notice> neu. Du siehst einen 404-Fehler. Das ist genau der Fehler, der auf einem Server ohne diesen Fallback auftritt. Stelle danach die Zeile wieder her.
3. **Port ändern:** Starte den Container mit `127.0.0.1:8081:80` statt `8080` und öffne die Seite unter dem neuen Port.
4. **Den Unterschied bei der Port-Freigabe sehen:** Starte einen zweiten Container mit `--publish 8082:80` (ohne `127.0.0.1`) und schaue dir die Spalte `PORTS` bei `docker ps` an. Vergleiche `127.0.0.1:8080->80/tcp` mit `0.0.0.0:8082->80/tcp`. `0.0.0.0` bedeutet: von überall erreichbar. Entferne diesen Container danach wieder mit `docker rm --force`.

## Geschafft, wenn

- [ ] Dein Portfolio öffnet sich unter <http://localhost:8080>.
- [ ] Das Neuladen von `/legal-notice` funktioniert, und du kannst erklären, warum.
- [ ] Du kannst erklären, warum das Dockerfile zwei Stufen hat.
- [ ] Du weißt, was der Unterschied zwischen `127.0.0.1:8080:80` und `8080:80` ist.

[Zurück zu Kapitel 3](03-build-in-linux.md) · [Weiter zu Kapitel 5](05-clean-up.md)
