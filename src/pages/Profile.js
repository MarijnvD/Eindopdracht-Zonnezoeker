import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import './Pages.css';
import Tile from "../components/tiles/Tile";
import Button from "../components/button/Button";

function Profile({avatar}) {

    const {user, logout} = useContext(AuthContext);
    const history = useHistory();
    const base = "data:image/png;base64," + avatar

    return (
        <>
            <h2>Profielpagina</h2>

            <div className="GeneralPage">
                <Tile title="Avatar"
                      colspan={3}
                      rowspan={2}>

                    <section>
                        <p>
                            Welkom op je eigen stukje ZonneZoeker!
                            Als geregistreerde gebruiker kan je gebruik maken van onze voorspellingen en we geven zelfs
                            ratings aan verschillende activiteiten!
                        </p>

                        <div>
                            {avatar !== " " &&

                                <img src={base} alt="UserImage"/>}
                        </div>
                    </section>

                </Tile>

                <Tile title="Account diensten"
                      colspan={1}
                      rowspan={2}
                >
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
                        Emails Wijzigen
                    </button>

                    <button
                        type="button"
                        onClick={() => history.push('/UploadAvatar')}
                    >
                        Foto uploaden
                    </button>

                    <Button>
                    </Button>
                </Tile>

                <Tile title="Persoonlijke gegevens"
                      colspan={2}
                      rowspan={2}>

                    <section>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>ID: {user.id}</p>
                    </section>

                </Tile>
            </div>
        </>
    );
}

export default Profile;


