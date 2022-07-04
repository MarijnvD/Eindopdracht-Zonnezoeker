import React, {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import axios from "axios";
import Tile from "../components/tiles/Tile";


function SignIn() {
    const {login} = useContext(AuthContext);
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const responseData = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: userName,
                password: password
            })
            console.log("token; ", responseData)
            login(responseData.data.accessToken);
            history.push('/Profile');

        } catch (e) {

            console.log("DIT GING NIET GOED")
            console.error(e)
        }
    }

    return (
        <>
            <h2>Inloggen</h2>

            <div className="GeneralPage">


                <Tile title="Gebruiksgegevens"
                      colspan={3}
                      rowspan={3}>
                    <p>Voer hier je gegevens in om deel te nemen aan de ultieme ZonneZoeker ervaring!</p>
                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Gegevens</legend>
                                <label htmlFor="details-userName">
                                    User Name:
                                    <input
                                        type="text"
                                        id="details-userName"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        name="Name-ID"
                                    />
                                </label>
                                <label htmlFor="details-password">
                                    Wachtwoord:
                                    <input
                                        type="password"
                                        id="details-password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        name="email-ID"
                                    />
                                </label>
                                <button
                                    type="submit">
                                    Versturen
                                </button>
                            </fieldset>
                        </form>
                    </div>
                    <p>Heb je nog geen account? <Link to="/Signup">Registreer</Link> je dan eerst.</p>
                    <p>Als geregistreerde gebruiker zie je meer data en kan je ons gepatenteerde weer-rating-systeem
                        gebruiken!</p>

                </Tile>
            </div>
        </>
    );
}

export default SignIn;