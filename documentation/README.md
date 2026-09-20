# Dokumentation

Anleitungen zum Selbermachen. Jede Anleitung besteht aus kleinen Kapiteln, die aufeinander aufbauen.

## Docker lernen

**Ziel:** Du verstehst, was Docker ist, baust dein Portfolio in einem Linux-Container und lieferst die fertige Seite aus einem Container aus.

Du tippst jeden Befehl selbst, denn so lernst du am meisten:

1. Lies zuerst, was der Schritt bewirken soll.
2. Führe den Befehl aus.
3. Vergleiche das Ergebnis mit **Das solltest du sehen**. Weicht es ab, hilft **Wenn etwas nicht klappt**.
4. Mach am Ende die **Experimente**. Dort lernst du am meisten.

| Kapitel | Inhalt |
| --- | --- |
| [1. Installation und erster Test](docker/01-installation.md) | Docker installieren, `hello-world` starten |
| [2. Der erste eigene Container](docker/02-first-container.md) | Einen Linux-Container von innen ansehen, verstehen was bleibt und was nicht |
| [3. Dein Portfolio in Linux bauen](docker/03-build-in-linux.md) | Den Build so laufen lassen wie bei GitHub |
| [4. Die Seite im Container ausliefern](docker/04-serve-website.md) | Dockerfile schreiben, Image bauen, Seite im Browser öffnen |
| [5. Aufräumen und Spickzettel](docker/05-clean-up.md) | Speicher freigeben, wichtige Befehle, wie es weitergeht |

## Vorbereitung: eigener Branch (empfohlen)

Jeder Push auf `main` startet deinen Deploy-Workflow. Damit deine Übungsdateien nicht versehentlich dorthin gelangen, arbeitest du auf einem eigenen Branch:

```bash
git switch --create docker-learning
```

In VS Code geht das auch per Klick auf `main` unten links und **Create new branch**.

Die Docker-Dateien aus Kapitel 4 sind nur zum Lernen. Dein echtes Deployment läuft weiter über GitHub Actions und CloudPanel und braucht sie nicht.

## Sicherheitsregeln

1. **Keine Geheimnisse in Images.** Passwörter, Schlüssel und `.env`-Dateien gehören nie in ein Image. Wer das Image bekommt, kann seinen Inhalt auslesen. Die `.dockerignore` aus Kapitel 4 schützt dich davor.
2. **Nur offizielle Images.** Nimm Images mit dem Hinweis *Docker Official Image* auf Docker Hub, zum Beispiel `node` und `nginx`.
3. **Ports nur für deinen Mac öffnen.** Schreibe `127.0.0.1:8080:80` statt `8080:80`. Sonst können unter Umständen andere Geräte im selben WLAN auf deinen Container zugreifen.
4. **Ordner nur lesend einbinden**, wenn der Container nichts schreiben muss (`:ro` am Ende).
5. **Keine Befehle aus dem Internet kopieren**, die `--privileged` oder `/var/run/docker.sock` enthalten. Sie geben einem Container die Kontrolle über deinen Rechner.

## Wörterbuch

| Begriff | Bedeutung |
| --- | --- |
| Image | schreibgeschützte Vorlage, aus der Container entstehen |
| Container | ein laufendes oder beendetes Exemplar eines Images |
| Dockerfile | Textdatei mit dem Rezept zum Bauen eines Images |
| Docker Hub | öffentliche Sammlung fertiger Images |
| Tag | Version eines Images, zum Beispiel `24` in `node:24` |
| Volume | Ordner, der zwischen deinem Mac und dem Container geteilt wird (`--volume`) |
| Port-Freigabe | Verbindung von einem Port deines Macs zu einem Port im Container (`--publish`) |
| Build-Kontext | die Dateien, die `docker build` an Docker schickt (der Ordner am Ende des Befehls, meist `.`) |
