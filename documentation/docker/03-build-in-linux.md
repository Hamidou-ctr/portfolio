# Kapitel 3: Dein Portfolio in Linux bauen

**Ziel:** Du lässt den Build deines Portfolios in einem Linux-Container laufen, genauso wie beim Deploy auf GitHub. So findest du Probleme, bevor du pushst.

**Warum?** Dein Mac läuft mit macOS, der GitHub-Runner mit Linux. Manche Programme verhalten sich auf beiden Systemen unterschiedlich. Mit Docker testest du die Linux-Variante lokal.

## Schritt 1: Ins Projekt wechseln

```bash
cd ~/Documents/portfolio
ls package.json
```

**Das solltest du sehen:** `package.json`. In VS Code ist das Terminal meist schon im richtigen Ordner. Prüfe das mit `pwd`.

## Schritt 2: Den Befehl verstehen

Lies den Befehl und die Tabelle darunter, bevor du ihn ausführst:

```bash
docker run --rm \
  --volume "$PWD":/source:ro \
  node:24 \
  bash -c "cp -r /source /app && cd /app && rm -rf node_modules dist .angular && npm ci --ignore-scripts && npm run build"
```

| Teil | Bedeutung |
| --- | --- |
| `\` am Zeilenende | der Befehl geht in der nächsten Zeile weiter |
| `--volume "$PWD":/source:ro` | Dein aktueller Projektordner (`$PWD`) erscheint im Container unter `/source`. `ro` heißt read-only: Der Container kann nichts in deinem Projekt verändern. |
| `node:24` | Linux mit Node 24 |
| `bash -c "..."` | führe die Befehle in den Anführungszeichen nacheinander aus |
| `cp -r /source /app` | kopiere das Projekt an einen Arbeitsplatz im Container |
| `rm -rf node_modules dist .angular` | lösche in der **Kopie** die Mac-Version von `node_modules`, denn sie enthält Programme, die nur unter macOS laufen |
| `npm ci --ignore-scripts` | installiere die Pakete frisch aus dem Lockfile, ohne Install-Skripte auszuführen (wie im GitHub-Workflow) |
| `npm run build` | baue die Seite |

**Warum kopieren?** Würdest du `npm ci` direkt im eingebundenen Ordner ausführen, würde es Linux-Dateien in dein echtes `node_modules` schreiben, und `ng serve` liefe danach auf deinem Mac nicht mehr.

## Schritt 3: Ausführen

Tippe den Befehl selbst ab und drücke Enter. Es dauert ein bis zwei Minuten.

**Das solltest du sehen:** Am Ende Zeilen wie `Application bundle generation complete.` und `Output location: /app/dist/portfolio`. Danach ist der Container wieder weg (`--rm`).

**Prüfe, dass dein Projekt unverändert ist:**

```bash
git status
ls node_modules | head -3
```

`git status` zeigt nur das, was schon vorher geändert war, zum Beispiel den neuen Ordner `documentation`. Dein `node_modules` ist unberührt.

## Hinweis: Apple Silicon und Intel

Auf einem Mac mit Apple-Chip startet Docker standardmäßig Linux für ARM-Prozessoren, GitHub verwendet Linux für x64. Für diesen Test spielt das keine Rolle. Wer es genau nachstellen will, fügt `--platform linux/amd64` direkt nach `docker run` hinzu. Das läuft über Emulation und ist langsamer.

## Wenn etwas nicht klappt

| Meldung | Ursache und Lösung |
| --- | --- |
| `Cannot connect to the Docker daemon` | Docker Desktop starten |
| `no space left on device` | Der Docker-Speicher ist voll. Siehe Kapitel 5 (Aufräumen). |
| `npm error ...` | Lies die Meldung von oben. Es ist dieselbe, die du bei GitHub sehen würdest. |
| `docker: invalid reference format` | Meist ein Tippfehler in den Anführungszeichen oder ein `\` mit Leerzeichen dahinter |

## Zusatzaufgabe: Das Ergebnis auf den Mac holen

Bisher verschwindet das Ergebnis mit dem Container. Mit einem **beschreibbaren** Volume holst du es heraus:

```bash
mkdir -p "$HOME/docker-output"
docker run --rm \
  --volume "$PWD":/source:ro \
  --volume "$HOME/docker-output":/output \
  node:24 \
  bash -c "cp -r /source /app && cd /app && rm -rf node_modules dist .angular && npm ci --ignore-scripts && npm run build && cp -r dist/portfolio/browser /output/"
open "$HOME/docker-output"
```

Der zweite `--volume` hat kein `:ro`, deshalb kann der Container dort hinein schreiben. Im Finder siehst du den Ordner `browser` mit `index.html` und den JavaScript-Dateien. Genau diesen Inhalt lädt dein Workflow auf den Server.

Das Ziel liegt bewusst außerhalb des Projekts, damit dein Projektordner sauber bleibt. Wirf `docker-output` danach in den Papierkorb.

## Experiment: Ein Fehler, den GitHub auch finden würde

1. Füge in einer `.ts`-Datei unter `src/app/` absichtlich einen Tippfehler ein, zum Beispiel ein Wort, das im Code nicht existiert, und speichere.
2. Führe den Docker-Befehl aus Schritt 2 aus.
3. Der Build bricht mit einer Fehlermeldung ab. Es ist dieselbe, die GitHub zeigen würde, nur eben bevor du gepusht hast.
4. Mache die Änderung mit `Cmd+Z` in VS Code rückgängig und prüfe mit `git diff`, dass nichts Ungewolltes übrig ist.

## Geschafft, wenn

- [ ] Der Build im Container endet mit `Application bundle generation complete.`
- [ ] Du kannst erklären, warum das Projekt in den Container **kopiert** wird.
- [ ] Du kannst erklären, was `:ro` bewirkt.

[Zurück zu Kapitel 2](02-first-container.md) · [Weiter zu Kapitel 4](04-serve-website.md)
