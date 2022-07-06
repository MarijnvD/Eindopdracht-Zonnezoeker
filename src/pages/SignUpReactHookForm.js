import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import Tile from "../components/tiles/Tile";


function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    email: email,
                    password: password,
                    username: username,
                    role: ["user", "admin"]
                })

            history.push('/signin')

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h2>Registreren</h2>

            <div className="GeneralPage">

                <Tile title="Registratie gegevens"
                      colspan={3}
                      rowspan={3}>
                    <p>Voeg je toe aan ons groeiende aantal ZonneZoekers!</p>
                    <p>In onderstaande privacyverklaring wordt uitgelegd welke gegevens worden verwerkt, wat er met uw
                        gegevens wordt gedaan en welke rechten u heeft. ZonneZoeker verzamelt slechts tot personen
                        herleidbare informatie die uitdrukkelijk en vrijwillig door de bezoeker ter beschikking is
                        gesteld.</p>

                    <p>Wil je weten wat we doen aan je privacy? Je kunt onze privacy verklaring <Link
                        to="/privacy">hier</Link> inzien.</p>

                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Gegevens</legend>

                            <label htmlFor="details-email">
                                email adres:
                                <input
                                    type="email"
                                    id="details-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email-ID"
                                />
                            </label>

                            <label htmlFor="details-password">
                                Wachtwoord:
                                <input
                                    type="password"
                                    id="details-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    name="password-ID"
                                />
                            </label>

                            <label htmlFor="details-userName">
                                Gebruikersnaam:
                                <input
                                    type="text"
                                    id="details-userName"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    name="user-ID"
                                />
                            </label>
                            <button
                                type="submit">
                                Versturen
                            </button>
                        </fieldset>
                    </form>

                    <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>

                </Tile>
            </div>
        </>
    );
}

export default SignUp;