import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import './Pages.css';
import Tile from "../components/tiles/Tile";

function Profile({avatar}) {


    const {user, logout} = useContext(AuthContext);
    const history = useHistory();

    const base = "data:image/png;base64,"+avatar

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
                        <div>
                            {avatar !==" " &&

                            <img src={base} alt="triforce" />}
                        </div>
                    </section>

                    <p>Terug naar de <Link to="/">Homepagina</Link></p>

                    <button
                        type="button"
                        onClick={() => history.push('/UploadAvatar')}
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
                      colspan={1}
                      rowspan={2}>

                    <button
                        type="button"
                        onClick={() => history.push('/ChangePassword')}
                    >
                        Wachtwoord Wijzigen
                    </button>

                    <button
                        type="button"
                        onClick={() => history.push('/ChangeEmail')}
                    >
                        Email Wijzigen
                    </button>

                </Tile>
            </div>
        </>
    );
}

export default Profile;


// #TODO User input toevoegen aan de ratings
// #TODO Lichtmode/Darkmode aan de praat krijgen
// #TODO Contact formulier toevoegen

// #TODO Vragenlijstje Tessa;
// #TODO voorspelling pagina maken met een map method
// #TODO Promises afhandelen?
// #TODO Hoe ontbrekende data toevoegen uit de API?
// #TODO Gekke API Results
// #TODO Alternatieve usecases?



