import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import './Pages.css';
import PageTile from "../components/tiles/PageTile";
import VerticalTile from "../components/tiles/VerticalTile";
import Tile from "../components/tiles/Tile";

function Profile() {
    const {user, logout} = useContext(AuthContext);

    return (
        <>
            <h2>Profielpagina</h2>
            <div className="GeneralPage">
                <Tile title="Avatar"
                      colspan={1}
                      rowspan={2}>

                    <section>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>ID: {user.id}</p>
                    </section>

                    <p>Terug naar de <Link to="/">Homepagina</Link></p>

                    <button
                        type="button"

                    >
                        Foto uploaden
                    </button>
                </Tile>

                <Tile title="Persoonlijke gegevens"
                      colspan={2}
                      rowspan={2}>

                    <section>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>ID: {user.id}</p>
                    </section>

                    <p>Terug naar de <Link to="/">Homepagina</Link></p>

                    <button
                        type="button"
                        onClick={logout}
                    >
                        Uitloggen
                    </button>
                </Tile>

                <Tile title="Overig"
                      colspan={3}
                      rowspan={2}>

                    <button
                        type="button"
                        onClick={logout}
                    >
                        Gebruiker gegevens aanpassen
                    </button>

                </Tile>
            </div>
        </>
    );
}

export default Profile;


// #TODO Functionaliteit toevoegen om een foto toe te kunnen voegen
// #TODO User input toevoegen aan de ratings
// #TODO Lichtmode/Darkmode aan de praat krijgen
// #TODO Celcius/Fahrenheit rating aan de praat krijgen


