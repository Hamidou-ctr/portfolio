# Kapitel 1: Installation und erster Test

**Ziel:** Docker läuft auf deinem Mac, und du hast deinen ersten Container gestartet.

## Schritt 1: Welchen Mac hast du?

Klicke auf das Apple-Symbol oben links und dann auf **Über diesen Mac**. Dort steht entweder

- **Chip: Apple M…**, dann lädst du die Version für **Apple Silicon** herunter, oder
- **Prozessor: Intel…**, dann lädst du die Version für **Intel** herunter.

## Schritt 2: Docker Desktop installieren

1. Öffne <https://www.docker.com/products/docker-desktop/> und lade Docker Desktop für deinen Mac herunter. Für privates Lernen ist es kostenlos.
2. Öffne die heruntergeladene `.dmg`-Datei und ziehe **Docker** in den Ordner **Programme**.
3. Starte Docker aus dem Ordner **Programme** und bestätige die Nutzungsbedingungen. Fragt macOS nach deinem Passwort, ist das normal: Docker richtet dabei Hilfsprogramme ein.
4. Eine Anmeldung ist nicht nötig. Du kannst sie überspringen.
5. Warte, bis oben in der Menüleiste das Wal-Symbol erscheint und in Docker Desktop unten links **Engine running** steht.

> Docker Desktop startet im Hintergrund eine kleine Linux-Maschine. Darin laufen deine Container. Sie braucht Arbeitsspeicher. Beende Docker Desktop (Wal-Symbol, dann **Quit Docker Desktop**), wenn du es gerade nicht brauchst.

## Schritt 3: Ist Docker da?

Öffne ein Terminal (in VS Code: **Terminal → New Terminal**) und tippe:

```bash
docker --version
```

**Das solltest du sehen:** eine Zeile, die mit `Docker version` beginnt, gefolgt von einer Versionsnummer.

## Schritt 4: Dein erster Container

```bash
docker run hello-world
```

Der Befehl besteht aus drei Teilen:

| Teil | Bedeutung |
| --- | --- |
| `docker` | das Programm |
| `run` | erstelle einen Container und starte ihn |
| `hello-world` | der Name des Images, aus dem der Container entsteht |

**Das solltest du sehen** (beim ersten Mal):

1. Zeilen wie `Unable to find image 'hello-world:latest' locally` und `Pulling from library/hello-world`. Docker hat das Image nicht lokal gefunden und lädt es von Docker Hub herunter.
2. Danach die Meldung **Hello from Docker!** mit einer kurzen Erklärung.

Diese Erklärung nennt vier Schritte. In deinen Worten:

1. Der Docker-Client (dein Befehl) hat mit dem Docker-Daemon gesprochen. Das ist das Programm im Hintergrund, das die Arbeit macht.
2. Der Daemon hat das Image von Docker Hub geladen.
3. Er hat daraus einen Container erstellt und gestartet.
4. Die Ausgabe des Containers wurde an dein Terminal weitergeleitet.

Der Container hat seine Meldung gedruckt und sich danach beendet.

## Wenn etwas nicht klappt

| Meldung | Ursache und Lösung |
| --- | --- |
| `Cannot connect to the Docker daemon` | Docker Desktop läuft nicht. Öffne die App und warte auf **Engine running**. |
| `command not found: docker` | Docker Desktop wurde noch nie gestartet, oder das Terminal kennt den Befehl noch nicht. Starte die App und öffne ein neues Terminal. |

## Experimente

1. Führe `docker run hello-world` ein zweites Mal aus. Was ist diesmal anders? Achte auf die ersten Zeilen.
2. Tippe `docker images`. Was siehst du?
3. Tippe `docker ps --all`. Wie viele Container siehst du, und welchen Status haben sie? Ohne `--rm` bleiben beendete Container liegen. Wie du sie aufräumst, lernst du in Kapitel 5.

## Geschafft, wenn

- [ ] `docker --version` zeigt eine Versionsnummer.
- [ ] `docker run hello-world` zeigt **Hello from Docker!**
- [ ] Du kannst in einem Satz sagen, was der Unterschied zwischen einem Image und einem Container ist.

[Weiter zu Kapitel 2](02-first-container.md)
