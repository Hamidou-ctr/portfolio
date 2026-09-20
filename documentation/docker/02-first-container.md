# Kapitel 2: Der erste eigene Container

**Ziel:** Du schaust in einen Linux-Container hinein und verstehst, was in ihm bleibt und was nicht.

## Schritt 1: Ein Programm in einem Container ausführen

```bash
docker run --rm node:24 node --version
```

| Teil | Bedeutung |
| --- | --- |
| `--rm` | lösche den Container, sobald er fertig ist |
| `node:24` | das Image: `node` ist der Name, `24` der Tag (die Version) |
| `node --version` | der Befehl, der **im Container** ausgeführt wird |

**Das solltest du sehen:** Beim ersten Mal lädt Docker das Image herunter (mehrere Zeilen mit `Pull complete`, das kann etwas dauern). Danach erscheint eine Versionsnummer, die mit `v24.` beginnt.

Diese Node-Version lief im Container und nicht auf deinem Mac.

## Schritt 2: In den Container hineingehen

```bash
docker run --rm --interactive --tty node:24 bash
```

`--interactive` hält die Eingabe offen, `--tty` gibt dir ein richtiges Terminal. Zusammen kürzt man sie oft als `-it` ab. Das letzte Wort `bash` ersetzt den Standardbefehl des Images und startet eine Shell.

**Das solltest du sehen:** Dein Prompt ändert sich zu etwas wie `root@a1b2c3d4e5f6:/#`. Du bist jetzt **in** einem Linux. Probiere:

```bash
cat /etc/os-release
whoami
ls /
node --version
```

- `cat /etc/os-release` zeigt, welches Linux das ist (Debian).
- `whoami` zeigt `root`. Im Container bist du Administrator, aber nur dort und nicht auf deinem Mac.
- `ls /` zeigt die Ordner dieses Linux. Dein Mac-Ordner ist nicht dabei, denn du hast keinen eingebunden.
- `node --version` zeigt wieder Node 24.

## Schritt 3: Was bleibt, was verschwindet?

Bleibe im Container und tippe:

```bash
echo "hallo" > /tmp/test.txt
cat /tmp/test.txt
exit
```

`exit` verlässt den Container. Weil du `--rm` benutzt hast, wird er gelöscht. Starte einen neuen und suche die Datei:

```bash
docker run --rm --interactive --tty node:24 bash
cat /tmp/test.txt
exit
```

**Das solltest du sehen:** `No such file or directory`. Die Datei ist weg.

**Warum?** Ein Image ist eine schreibgeschützte Vorlage. Jeder Container bekommt darauf eine dünne, beschreibbare Schicht. Wird der Container gelöscht, verschwindet diese Schicht mit allem, was du darin geändert hast. Was bleiben soll, legt man deshalb in einem Volume ab, also in einem Ordner, der mit deinem Mac geteilt wird. Das machst du in Kapitel 3.

## Schritt 4: Von außen zuschauen

Starte den Container aus Schritt 2 noch einmal und lass ihn offen. Öffne ein **zweites** Terminalfenster und tippe:

```bash
docker ps
```

**Das solltest du sehen:** eine Tabelle mit einer Zeile. Das ist dein laufender Container mit dem Image `node:24` und einem zufälligen Namen wie `sleepy_turing`.

Gehe zurück ins erste Fenster und tippe `exit`. Tippe im zweiten Fenster `docker ps` nochmal: Die Liste ist leer.

Zum Vergleich:

| Befehl | Zeigt |
| --- | --- |
| `docker ps` | nur laufende Container |
| `docker ps --all` | laufende und beendete Container |
| `docker images` | alle heruntergeladenen Images |

## Wenn etwas nicht klappt

| Meldung | Ursache und Lösung |
| --- | --- |
| `pull access denied ... repository does not exist` | Tippfehler im Image-Namen |
| `Cannot connect to the Docker daemon` | Docker Desktop starten, siehe Kapitel 1 |

## Experimente

1. Rechne im Container: `docker run --rm node:24 node --eval "console.log(2 + 3)"`.
2. Starte eine **andere** Node-Version, ohne etwas zu installieren: `docker run --rm node:22 node --version`. Tippe danach `docker images`. Was hat sich geändert?
3. Gib einem Container einen Namen und lass ihn liegen:

   ```bash
   docker run --name experiment-container node:24 node --version
   docker ps --all
   docker rm experiment-container
   docker ps --all
   ```

   Was zeigt der erste `docker ps --all` und was der zweite?

## Geschafft, wenn

- [ ] Du kannst einen Container mit einer Shell starten und wieder verlassen.
- [ ] Du kannst erklären, warum die Datei `/tmp/test.txt` verschwunden ist.
- [ ] Du weißt, was der Unterschied zwischen `docker ps` und `docker ps --all` ist.

[Zurück zu Kapitel 1](01-installation.md) · [Weiter zu Kapitel 3](03-build-in-linux.md)
