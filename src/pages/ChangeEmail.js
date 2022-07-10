import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Tile from "../components/tiles/Tile";
import axios from "axios";

function ChangeEmail() {

    const [newEmail, setNewEmail] = useState("")
    const token = localStorage.getItem("accesToken")
    const history = useHistory()

    async function handleEmailSubmit(e) {
        e.preventDefault();
        try {
             await axios.put(`https://frontend-educational-backend.herokuapp.com/api/user`,
                {
                    email: newEmail
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })

            history.push("/Profile")
            window.location.reload()

        } catch (e) {

            console.error("FOUT IN WACHTWOORD WIJZIGEN")
            console.error(e)
        }
    }

    return (
        <>
            <h2>Aanpassen gebruiksgegevens</h2>

            <div className="GeneralPage">


                <Tile title="Email wijzigen"
                      colspan={3}
                      rowspan={3}>

                    <p>Toch spijt van je email die je 10 jaar geleden hebt aangemaakt?! Pas het hier aan! </p>

                    <div className='form'>
                        <form onSubmit={handleEmailSubmit}>
                            <fieldset>
                                <legend>Gegevens</legend>
                                <label htmlFor="details-email">
                                    email adres:
                                    <input
                                        type="email"
                                        id="details-email"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
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

                    <p>Gaat een nieuwe email je toch te ver? Hier kan je terug naar <Link to="/">Home</Link></p>

                </Tile>
            </div>
        </>
    );
}

export default ChangeEmail;