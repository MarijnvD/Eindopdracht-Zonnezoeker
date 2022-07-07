# ZonneZoeker

![](src/assets/Screenshots/ZonneZoeker.jpg)

Author: Marijn van Dorp

Created:
25 Maart, 2022


# Table of contents
1. [Inleiding](#1-inleiding)
2. [Probleem stelling](#2-probleemstelling)
3. [Eisen webapplicatie](#3-eisen-webapplicatie)
    1. [Functioneel](#31-functioneel)
    2. [Niet-functioneel](#32-niet-functioneel)
4. [Use cases](#4-use-cases)
5. [Ontwerp](#5-ontwerp)
    1. [Inspiratie](#51-inspiratie)
    2. [Wireframes](#52-wireframes)
    3. [Schermontwerp](#53-schermontwerp)
    4. [Figma](#54-figma)
6. [Verantwoording](#6-Verantwoording)
    1. [Technische afwegingen](#61-weergave)
       1. [formulieren](#62-formulieren)
       2. [valideren Gebruikers](#63-validerenGebruikers)
       3. [Tile based ontwerp](#64-figma)
       4. [Enviremental variables](#34-figma)
       5. [Enviremental variables](#34-figma)
       6. [Enviremental variables](#34-figma)
       7. [Enviremental variables](#34-figma)
       8. [Enviremental variables](#34-figma)
       9. [Enviremental variables](#34-figma)
    2. [Limitaties](#6-Verantwoording)
       1. [formulieren](#62-formulieren)
       2. [valideren Gebruikers](#63-validerenGebruikers)
       3. [Tile based ontwerp](#64-figma)
    3. [Doorontwikkeling](#6-Verantwoording)
       1. [formulieren](#62-formulieren)
       2. [valideren Gebruikers](#63-validerenGebruikers)
       3. [Tile based ontwerp](#64-figma)
       
## 1. Inleiding
Mijn vriendin en ik willen gaan verhuizen.\
Doordat we het thuiswerken volledig hebben omarmd hebben we geen voorkeur voor woonplaats
en kunnen we ons richten op de écht belangrijke zaken; het weer!\
Welke stad heeft de meeste zon uren, de hoogste gemiddelde temperatuur, luchtkwaliteit, minste
neerslag- met andere woorden in welke stad worden we het gelukkigst van het weer?

## 2. Probleemstelling
Je kan nu niet in éen oogopslag zien wat de weersomstandigheden zijn per stad in Nederland\
Mijn app brengt in kaart welke steden in Nederland het beste zijn voor de zon genieters, de stormjagers en ieder ander die een specifiek weertype zoekt.\
De app maakt gebruik van de OpenWeather API waardoor de gebruikers via de zoekfunctie snel kunnen zien wat de weerverdeling is voor hun geselecteerde stad

## 3. Eisen Webapplicatie
De applicatie kan worden onderverdeeld in de volgende functionele en niet-functionele eisen;

### 3.1 Functioneel
| No. | Omschrijving                                                                                        |
|-----|-----------------------------------------------------------------------------------------------------|
| 1   | Als niet geregistreerde gebruiker kan je alleen een simpele zoekopdracht doen                       |
| 2   | Als niet geregistreerde gebruiker kan je een gebruikers account aanmaken                            |
| 3   | Als gebruiker zie je meer gedetailleerde data                                                       |
| 4   | Als gebruiker kan je een profiel foto toevoegen                                                     |
| 5   | De applicatie stuurt de gebruiker een welkomst email bij registratie                                |
| 6   | De applicatie laat met icoontjes ook visueel het weertype zien (Bewolkt, zonnig, rtc)               |
| 7   | Als gebruiker kan je een wachtwoord instellen                                                       |
| 8   | De gebruiker kan zoeken op plaats.                                                                  |
| 9   | De applicatie vraagt de gebruiker om een gebruikersnaam                                             |
| 10  | De applicatie laat de luchtkwaliteit zien                                                           |
| 11  | De applicatie laat bijzondere situaties zien (Zware storm, Extreem weer)                            |
| 12  | De applicatie laat de temperatuur zien                                                              |
| 13  | De applicatie laat de gevoelstemperatuur zien                                                       |
| 14  | De applicatie laat de windsnelheid zien                                                             |
| 15  | De applicatie laat de luchtvochtigheid zien                                                         |
| 16  | De applicatie laat de tijd van zon opkomst en zonsondergang zien                                    |
| 17  | De applicatie laat de gevoelstemperatuur zien                                                       |
| 18  | De applicatie laat de locatie zien                                                                  |
| 19  | De gebruiker kan contact opnemen met de beheerder van de applicatie                                 |
| 20  | De applicatie laat de weergegevens zien van de komende dagen                                        |
| 21  | De gebruiker kan zijn wachtwoord wijzigen in het persoonlijk profiel                                |
| 22  | De gebruiker kan zijn gebruikersnaams wijzigen in het persoonlijk profiel                           |
| 23  | De applicatie geeft een melding weer op het scherm wanneer een gebruiker verkeerde gegevens opgeeft |
| 24  | De applicatie geeft een melding weer op het scherm wanneer een gebruiker correcte gegevens opgeeft  |                                                                                                          |
| 25  | De applicatie stuurt pas de gegevens naar de server als de formulieren gevalideerd zijn             |
| 26  | De applicatie stuurt toont bij de formulieren foutieve velden en wat hierin verbeterd moet worden   |
| 27  | De applicatie geeft de windrinchting ook visuaal aan met een werkend 'kompas'                       |

### 3.2 Niet-Functioneel

| No. | Omschrijving                                                                                                           |
|-----|------------------------------------------------------------------------------------------------------------------------|
| 1   | De pagina moet binnen 5 seconden geladen zijn                                                                          |
| 2   | De zoekopdracht moet een resultaat terug geven binnen 10 seconden                                                      |
| 3   | De interface moet responsive zijn                                                                                      |
| 4   | De Interface moet goed en duidelijk leesbaar zijn                                                                      |
| 5   | De applicatie moet leesbaar zijn voor mensen met kleurenblindheid                                                      |
| 6   | De applicatie moet met semantic HTML geschikt zijn voor screenreaders                                                  |
| 7   | De gebruiker kan wisselen tussen een light en een dark mode                                                            |
| 8   | De app is op te schalen                                                                                                |
| 9   | De gebruiker kan kiezen uit de Engelse of Nederlandse taal                                                             |
| 10  | Standaard gebruikt de site de Nederlandse taal                                                                         |
| 11  | De gebruiker kan kiezen uit de eenheden voor temperatuur                                                               |
| 12  | Standaard staat de eenheid voor temperatuur op Celsius, zoals het hoort                                                |
| 13  | De gebruiker kan binnen 1 klik bij alle belangrijke functionaliteiten                                                  |
| 14  | Het systeem laat een melding zien als er geen resultaten van de zoekopdracht zijn                                      |
| 15  | De interface is modulair uitbreidbaar                                                                                  |
| 16  | De huisstijl wordt overal doorgevoerd                                                                                  |
| 17  | Het Wachtwoord moet elke 90 dagen worden vervangen                                                                     |
| 18  | De applicatie heeft een 99.5% up-time                                                                                  |
| 19  | De zoekfunctie moet binnen 5 seconden een resultaat weergeven                                                          |
| 20  | Wachtwoord moet minimaal 6 karakters lang zijn                                                                         |
| 21  | De app zal voorzien zijn van een duidelijke Readme                                                                     |
| 22  | Het systeem moet op alle moderne browsers werken                                                                       |
| 23  | Gebruikers kunnen geen account aanmaken als het email adres of de gebruikersnaam als in gebruik zijn                   |
| 24  | Wanneer een gebruiker is ingelogd dan krijgt de gebruiker zijn eigen accountgegevens te zien en niet die van een ander |
| 25  | De gebruiker kan in 1 oogopslag alle gegevens zien per zoekresultaat                                                   |

## 4. Use cases
De kernfunctionaliteiten van ZonneZoeker kunnen worden verdeeld in de volgende 4 UseCases;



| Use Case 1               | De gebruiker maakt een gebruikers account aan                                                                                                                                                                                                                                             |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Actor**                | gebruiker                                                                                                                                                                                                                                                                                 |
| **Preconditie 1**        | De gebruiker heeft een geldig email adres                                                                                                                                                                                                                                                 |
| **Preconditie 2**        | De gebruiker heeft een werkende internet verbinding en ernstige behoefte aan alle functionaliteiten                                                                                                                                                                                       |
| **Trigger**              | De gebruiker klikt op de "Registreren" link, in de inloggen pagina                                                                                                                                                                                                                        |
| **Main succes scenario** | 1. De gebruiker drukt op de "Registeren" knop<br/>2. De gebruiker voert de benodigde gegevens in<br/>3. De gebruiker drukt op de knop "registratie voltooien"<br/>4. Systeem laat melding zien dat de registratie succesvol is verlopen<br/>5. De gebruiker kan nu inloggen als gebruiker |
| **Postconditie**         | De gebruiker heeft een gebruikersaccount                                                                                                                                                                                                                                                  |

<br/>

| Use Case 1 <br/>Scenario 1 a | De knop "Registratie voltooien" is niet aan te klikken                                                                                                                                    |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Alternative scenario**     | 1. Het Systeem geeft per invoerveld feedback op niet correctie validatie"<br/>2. De gebruiker corrigeerd de gebruik gegevens<br/>3. De gebruiker drukt op de knop "registratie voltooien" |
| **Postconditie**             | De gebruiker vervolgt main succes scenario bij stap 4                                                                                                                                     |

<br/>

| Use Case 1 <br/>Scenario 5 a | De gebruiker kan niet inloggen                                                                                                                                                                          |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Alternative scenario**     | 1. Het Systeem geeft aan "Ongeldige gegevens"<br/>2. De gebruiker controleerd of de account gegevens correct zijn<br/>3. De gebruiker kan de gebruikers gegevens resetten doormiddel van een link"<br/> |
| **Postconditie**             | De gebruiker vervolgt main succes scenario bij stap 4                                                                                                                                                   |


| Use Case 2               | De gebruiker voert de zoekopdracht uit                                                                                                                                                                                                                                                                     |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Actor**                | (Geregistreerde) Gebruiker                                                                                                                                                                                                                                                                                 |
| **Preconditie 1**        | De geregistreerde gebruiker moet zijn ingelogged                                                                                                                                                                                                                                                           |
| **Preconditie 2**        | De (geregistreerde) gebruiker heeft zijn zoekopdracht ingevuld                                                                                                                                                                                                                                             |
| **Trigger**              | De (geregistreerde) gebruiker drukt op de "Zoek" knop                                                                                                                                                                                                                                                      |
| **Main succes scenario** | 1. De (geregistreerde) gebruiker drukt op de "Zoek" knop <br/>2. De applicatie returned de weergegevens van de ingevoerde term<br/>3. De gebruiker scrolled door de terug gegeven data<br/>4. Systeem laat melding zien dat de zoekopdracht succesvol was<br/>                                             |
| **Postconditie**         | De (geregistreerde)gebruiker ziet de resultaten waar hij de rechten op heeft                                                                                                                                                                                                                               |

<br/>

| Use Case 2 <br/>Scenario 1 a | De knop "Zoek" van de zoekbalk geeft een foutmelding                                                                                                        |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Alternative scenario**     | 1. Het Systeem geeft aan "Huidige plaatsnaam niet gevonden!"<br/>2. De gebruiker corrigeerd de gebruik gegevens<br/>3. De gebruiker drukt op de knop "Zoek" |
| **Postconditie**             | De gebruiker vervolgt main succes scenario bij stap 2                                                                                                       |

<br/>


| Use Case 3               | De geregistreerde gebruiker kan Activiteit(Fietsen, BBQ'en, etc) ratings zien, gebaseerd op de gekozen plaatsnaam                                                                  |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Actor**                | Geregistreerde Gebruiker                                                                                                                                                           |
| **Preconditie 1**        | De geregistreerde gebruiker moet zijn ingelogged                                                                                                                                   |
| **Preconditie 2**        | De geregistreerde gebruiker moet zijn zoekopdracht hebben gedaan                                                                                                                   |
| **Trigger**              | De geregistreerde gebruiker drukt op de "Ratings" knop                                                                                                                             |
| **Main succes scenario** | 1. De geregistreerd gebruiker drukt op de "Ratings" knop <br/>2. De applicatie toont de ratings van alle activiteiten<br/>3. De gebruiker scrolled door de terug gegeven data<br/> |
| **Postconditie**         | De geregistreerde gebruiker ziet de resultaten waar hij de rechten op heeft                                                                                                        |

<br/>

| Use Case 3 <br/>Scenario 1 a | De knop "Zoek" van de zoekbalk geeft een foutmelding                                                                                                          |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Alternative scenario**     | 1. Het Systeem geeft aan "Huidige plaatsnaam niet gevonden!"<br/>2. de gebruikers corrigeerd de gekozen zoekterm <br/>3. De gebruiker drukt op de knop "Zoek" |
| **Postconditie**             | De gebruiker vervolgt main succes scenario bij stap 2                                                                                                         |
<br/>


| Use Case 4               | De geregistreerde gebruiker kan Voorspellingen zien, gebaseerd op de gekozen plaatsnaam                                                                                                        |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Actor**                | Geregistreerde Gebruiker                                                                                                                                                                       |
| **Preconditie 1**        | De geregistreerde gebruiker moet zijn ingelogged                                                                                                                                               |
| **Preconditie 2**        | De geregistreerde gebruiker moet zijn zoekopdracht hebben gedaan                                                                                                                               |
| **Trigger**              | De geregistreerde gebruiker drukt op de "Voorspelling" knop                                                                                                                                    |
| **Main succes scenario** | 1. De geregistreerd gebruiker drukt op de "Voorspelling" knop <br/>2. De applicatie toont de voorspellingen van alle activiteiten<br/>3. De gebruiker scrolled door de terug gegeven data<br/> |
| **Postconditie**         | De geregistreerde gebruiker ziet de resultaten waar hij de rechten op heeft                                                                                                                    |

<br/>

| Use Case 4 <br/>Scenario 1 a | De knop "Zoek" van de zoekbalk geeft een foutmelding                                                                                                          |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Alternative scenario**     | 1. Het Systeem geeft aan "Huidige plaatsnaam niet gevonden!"<br/>2. de gebruikers corrigeerd de gekozen zoekterm <br/>3. De gebruiker drukt op de knop "Zoek" |
| **Postconditie**             | De gebruiker vervolgt main succes scenario bij stap 2                                                                                                         |
|                              |                                                                                                                                                               |
<br/>


## 5. Ontwerp  
In dit hoofdstuk een overzicht van hoe het ontwerp van mijn app tot stand is gekomen.
Van wireframes op papier tot uiteindelijk digitaal ontwerp in figma

### 5.1 Inspiratie 
Het hoofdontwerp is inspired op de volgende pagina;
https://www.weather.com/

![](src/assets/Screenshots/InspiratieBron1.png)

Het gebruik van losse tiles, het kleurgebruik en het duidelijk weergaven van alle informatie in één enkele oogopslag was precies wat ik zocht in een app.
Ik heb deze geprobeerd terug te laten komen in mijn eigen ontwerp

Mijn 2e inspiratie bron is;
https://www.accuweather.com/
![](src/assets/Screenshots/InspiratieBron2.png)

Het simpele kleurgebruik en de indeling van de tiles sprak me heel erg aan.
Hun logo gebruik met een naam er direct achter en in nadruk op de zoekbalk heb ik ook in mijn app geprobeerd terug te laten komen

Mijn 3e inspiratie bron is:
https://apps.apple.com/us/app/weather/id1069513131

![](src/assets/Screenshots/InspiratieBron3.png)

Ik was insp;iratie op aan het doen op mijn mobiel toen ik mijn ingebouwde weatherapp zag.
Dit bevestigde voor bij de op tiles gebaseerd ontwerp en ziet er niet alleen op een groot scherm duidelijk ook maar ook op mobiel
De nadruk op de temperatuur en de simpelheid van 1 zoekbalk en 1 soort tiles heb ik ook terug laten komen in mijn app.

### 5.2 Wireframes 
Bevat de gescande op gefotografeerde wireframes, geschetst op papier, van tenminste 5 pagina's\
deze dienen goed leesbaar te zijn, inclusief begeleidende tekst waarin duidelijk wordt over welke pagina het gaat

### 5.3 Schermontwerp 
Bevat screenshots van de schermontwerpen met titels en beschrijvingen.

### 5.4 Figma 
Aan de hand van alle design informatie ja je schermontwerpen maken in figma/adobe\
Deze bevatten zodanig veel uitgewerkte details dat je tijdens het programmeren geen ontwerpbeslissingen meer hoeft te maken

Opleveren; Het functionele ontwerp (dit document) en een link naar het openbare figma project.

Technische keuzes/ontwerpbeslissingen.


Gebruikers Validatie.

De applicatie maakt gebruik van de NOVI Educational Backend server om gebruikers te registreren, in te loggen/uitloggen en om gebruikersgegevens te wijzigen. Bij het inloggen geeft de server een JWT-token terug welke wordt opgeslagen in de Localstorage. Als de gegevens in de JWT-token overeenkomen met de gegevens in de backend server dan is de gebruiker geautoriseerd tot alle pagina’s op de webapplicatie. Ik heb ervoor gekozen om bij iedere wijziging in de routing van de applicatie (en account handelingen) de gebruiker opnieuw te valideren.



Decoderen van de JWT-token.

Via mijn studie ben ik uitgekomen bij de library: “jwt-decode” om mijn JWT token de decoden. Er zijn verschillende libraries om jwt-tokens te decoden echter was ik (en vele andere) erg tevreden over werking van “jwt-decode”. Ik heb de library dan ook gebruikt in een helper-functie, om te controleren of de JWT token nog geldig is.



React Hook Form.

De applicatie maakt gebruikt van de functie: “UseForm” van de “react-hook-form” library. Uit de “UseForm” zijn ook nog andere functies gedestructured waaronder: “register, handleSubmit en de formState: {errors}”. Deze functies heb ik gebruikt om mijn statische formulieren om te zetten in React Hook Form formulieren met validatie. Dit heeft mijn code een stuk efficiënter gemaakt en werd het gemakkelijk om eventuele errors af te vangen met het weergeven van een melding voor de gebruiker.



Gebruik van window.scrollY.

Omdat mijn applicatie een background afbeelding heeft i.c.m. een transparante (sticky) navigatiebar werd het tijdens het omlaag scrollen erg onduidelijk. De tekst van de van de navigatiebar liep door de andere teksten/afbeeldingen heen die op de pagina’s staan en alles werd hierdoor niet meer leesbaar. Ik heb gekozen om dit op te lossen om de navigatiebar standaard transparant te maken en bij het scrollen(  window.scrollY) te switchen naar een donkere background-color om zodoende alles leesbaar te houden + het geeft een cool effect.



Wrapper.

Ik heb er voor gekozen om een “Wrapper” component te maken om zodoende niet onnodig veel code te hoeven schrijven voor elke component waarvoor een “inner en outer container” geschikt voor zijn. Door de wrapper is de code nu 1x geschreven i.p.v. 10x en is er oneindig veel content toe te voegen zonder daarvoor onnodig CSS te moeten schrijven.



Popup.

Ik heb ervoor gekozen om “belangrijke” meldingen te weergeven door middel van een popup die ik heb gemaakt. De popup wordt bijvoorbeeld weergeven bij het succesvol registreren, inloggen en uitloggen. Hiermee wordt de applicatie meer gebruiksvriendelijker en vond ik het gewoon gaaf/leerzaam om dit te proberen.



React-Router-Dom.

De applicatie maakt gebruik van versie 5.2.0. en niet de meest recente versie. Dit heeft als reden omdat mijn lesmateriaal is gebaseerd op versie 5.2.0. en ik i.v.m. tijdsbesparing heb gekozen om hiermee te gaan bouwen. In de nieuwste versie (6.3.0.) is bijvoorbeeld de werking van de “Router” anders dan hoe ik het geleerd heb.



Wijziging indeling/styling.

In mijn ontwerp had ik gekozen om de inlog knop alleen op de home(welkomst-) pagina te plaatsen en de registreren knop zichtbaar in de navigatiebar. Tijdens het maken van de applicatie vond ik het toch logischer/gebruiksvriendelijker om deze knoppen om te draaien. Registreren doe je niet zo vaak, inloggen daarentegen wel en daarnaast veranderd de inlog knop na het inloggen in de uitlog knop. Dit is een stuk duidelijk voor iedereen.



Environment variables.

Omdat mijn webapplicatie openbaar op het web staat en iedereen dus mijn project kan bekijken. Dit is normaal gesproken geen probleem maar wel als hier een token in staat die eigenlijk alleen voor jou bedoeld is. Hierdoor heb ik gekozen om te werken met “environment variables” waardoor er niemand kwaadwillig met mijn token  vandoor kan gaan.

