# Your Contacts

Aplikácia na zobrazovanie / vytváranie kontaktov.

## Spustenie

`npm start` na http://localhost:3000

## Využité technológie

- framework React
- TypeScript
- React router
- Axios
- MaterialUI
- styled components

## Funkcionalita

1. Zobrazenie telefónnych kontaktov v tabuľke (pozostávajúcich z mena, priezviska, telefónneho čísla a emailu). Sort podľa údajov v jednotlivých stĺpcoch (iba v móde na zobrazenie). Možnosť jednotlivé záznamy vymazať (po potvrdení pop-upu). Stránkovanie, pričom používateľ môže nastaviť počet záznamov na jednej stránke.
2. Edit kontaktov. Po stlačení "pera" vedľa jednotlivých záznamov, respektíve tlačidla "go to edit mode" pod záznamami.

- "save changes" - po potvrdení pop-upu sa uložia nové záznamy, editujú sa tie vopred existujúce. Pre uloženie je potrebné zadať aspoň hodnotu do kolónky Last Name.
- "add item" - pridá prázdny záznam do listu
- "discard changes" po potvrdení zahodí vykonané zmeny (neuložené úpravy)

## Výzvy

- na stránkovanie záznamov a ich sortovanie som využila kód z dokumentácie MaterialUI, ktorý bolo treba upraviť a zjednodušiť.
- mala som problém rozbehať styled components. Keď sa mi to podarilo tak prestalo fungovať material-ui-phone-number (na telefonické kontakty), preto bol tento komponent na poslednú chvíľu nahradený jednoduchým inputom.
- mnoho postupov, ktoré som skúšala nefungovali s verziou Reactu v tomto projektu
