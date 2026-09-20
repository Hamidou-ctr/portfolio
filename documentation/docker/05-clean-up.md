# Kapitel 5: Aufräumen und Spickzettel

**Ziel:** Du gibst Speicher frei und hast alle wichtigen Befehle auf einen Blick.

## Wie viel Speicher belegt Docker?

```bash
docker system df
```

**Das solltest du sehen:** eine Tabelle mit den Zeilen `Images`, `Containers`, `Local Volumes` und `Build Cache` und der jeweils belegten Größe.

## Aufräumen

Alle diese Befehle fragen vor dem Löschen nach (`[y/N]`). Lies, was aufgelistet wird, bevor du mit `y` bestätigst.

| Befehl | Was er löscht |
| --- | --- |
| `docker container prune` | alle **beendeten** Container |
| `docker image prune` | Images ohne Namen (`<none>`), die kein Container braucht |
| `docker image rm portfolio-image` | genau dieses Image |
| `docker system prune` | beendete Container, ungenutzte Netzwerke, unbenannte Images und Reste des Build-Caches |

Gelöschte Images lädt oder baut Docker bei Bedarf neu. Das dauert dann wieder etwas länger.

**Docker Desktop beenden:** Wal-Symbol in der Menüleiste, dann **Quit Docker Desktop**. Das gibt den Arbeitsspeicher frei.

## Deine Übungsdateien

Ob du `Dockerfile`, `.dockerignore` und `nginx-site.conf` behältst, entscheidest du. Sie schaden nicht, werden aber vom Deployment nicht gebraucht. Willst du sie nicht behalten, lösche die drei Dateien und wechsle zurück auf `main`.

## Spickzettel

| Ich will … | Befehl |
| --- | --- |
| prüfen, ob Docker läuft | `docker --version` |
| einen Container starten und danach löschen | `docker run --rm IMAGE BEFEHL` |
| in einem Container eine Shell öffnen | `docker run --rm --interactive --tty IMAGE bash` |
| einen Container im Hintergrund starten | `docker run --detach --name NAME IMAGE` |
| einen Port nur für meinen Mac freigeben | `--publish 127.0.0.1:8080:80` |
| einen Ordner nur lesend einbinden | `--volume "$PWD":/source:ro` |
| ein Image bauen | `docker build --tag NAME .` |
| laufende Container sehen | `docker ps` |
| alle Container sehen | `docker ps --all` |
| Images sehen | `docker images` |
| Logs eines Containers sehen | `docker logs NAME` |
| in einen laufenden Container schauen | `docker exec --interactive --tty NAME sh` |
| einen Container stoppen | `docker stop NAME` |
| einen Container löschen | `docker rm NAME` |
| einen Container stoppen und löschen | `docker rm --force NAME` |
| ein Image löschen | `docker image rm NAME` |
| Speicher aufräumen | `docker system prune` |

Groß geschriebene Wörter wie `IMAGE`, `BEFEHL` und `NAME` ersetzt du durch deine eigenen Werte.

## Wie geht es weiter?

- **Docker Compose:** Mehrere Container gemeinsam starten, zum Beispiel eine Website mit einer Datenbank. Der Befehl dafür ist `docker compose`.
- **Volumes für Daten:** Datenbanken brauchen Speicher, der das Löschen des Containers überlebt. Das ist der Hauptgrund für benannte Volumes.
- **Offizielle Anleitung:** <https://docs.docker.com/get-started/>
- **Fertige Images:** <https://hub.docker.com/_/node> und <https://hub.docker.com/_/nginx>

## Geschafft, wenn

- [ ] Du weißt, wie viel Platz Docker auf deinem Mac belegt.
- [ ] Du hast beendete Container und ungenutzte Images aufgeräumt.
- [ ] Du kannst ohne Spickzettel ein Image bauen und einen Container daraus starten.

[Zurück zu Kapitel 4](04-serve-website.md) · [Zur Übersicht](../README.md)
