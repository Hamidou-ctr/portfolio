<?php
if(mail("hamidou-diallo@gmx.de", "Test", "Hallo")) {
    echo "OK";
} else {
    echo "FEHLER";
}