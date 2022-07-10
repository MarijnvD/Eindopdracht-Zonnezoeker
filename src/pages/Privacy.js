import React from 'react';
import Tile from "../components/tiles/Tile";
import {Link} from "react-router-dom";

function Privacy() {

    return (
        <>
            <h2>Privacy</h2>

            <div className="GeneralPage">

                <Tile title="Privacyverklaring"
                      colspan={3}
                      rowspan={3}>

                    <p>ZonneZoeker respecteert de privacy van alle gebruikers van haar site en draagt er zorg voor dat
                        de persoonlijke
                        informatie die u ons verschaft vertrouwelijk wordt behandeld. Wij gebruiken uw gegevens om u zo
                        snel mogelijk te
                        helpen. Voor het overige zullen wij deze gegevens uitsluitend gebruiken met uw toestemming.
                        ZonneZoeker zal uw
                        persoonlijke gegevens niet aan derden verkopen en zal deze uitsluitend aan derden ter
                        beschikking stellen die zijn
                        betrokken bij het uitvoeren en leveren van diensten die u afneemt bij ZonneZoeker.</p>

                        <p>ZonneZoeker gebruikt verzamelde data ten behoeve van de volgende dienstenverlening:

                        Gegevens over het gebruik van onze site en de feedback die we krijgen van onze bezoekers helpen
                        ons om onze site
                        verder te ontwikkelen en te verbeteren.
                        In overeenstemming met Europese wetgeving, gaan wij er van uit dat toestemming is gegeven voor
                        eventueel te
                        installeren cookies.
                        Tevens verklaard u bij het lezen van deze gegevens de maker van deze app een ruime voldoende te
                        geven.</p>

                        <p>Persoonlijke gegevens zullen niet worden opgeslagen, tenzij specifieke toestemming hiervoor is
                        verleend.
                        Voor het continu verbeteren van de website worden analytische cookies gebruikt. Hiermee worden
                        bezoekersstatistieken
                        bijgehouden. Dit is informatie over bijvoorbeeld hoeveel bezoekers de website bezoekers, welke
                        pagina’s bezoeken
                        bekijken, waar ze vandaan komen en waar ze op klikken, welke browser en schermresolutie ze
                        gebruiken. Deze
                        informatie wordt niet herleid naar een individuele bezoeker.</p>

                    <p>Wil je verder met de Zon Zoeken? begin dan op <Link to="/">Home</Link>.</p>

                </Tile>
            </div>
        </>
    );
}

export default Privacy;