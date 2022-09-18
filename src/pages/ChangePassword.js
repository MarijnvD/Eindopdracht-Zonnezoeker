import React, {useState} from 'react';
import Tile from "../components/tiles/Tile";
import axios from "axios";

function ChangePassword() {

    const [newPassword, setNewPassword] = useState("")
    const [repeatNewPassword, setRepeatNewPassword] = useState("")
    const token = localStorage.getItem("accesToken")

    async function handlePasswordSubmit(e) {
        e.preventDefault();
        try {
            await axios.put(`https://frontend-educational-backend.herokuapp.com/api/user`,
                {
                    password: newPassword,
                    repeatedPassword: repeatNewPassword},
                {headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })

        } catch (e) {
            console.error("FOUT IN WACHTWOORD WIJZIGEN")
            console.error(e)
        }
    }

    return (
        <>
            <h2>Aanpassen gebruiksgegevens</h2>

            <div className="GeneralPage">

                <Tile title="Wachtwoord wijzigen"
                      colspan={3}
                      rowspan={3}>
                    <p>Niet tevreden met je huidige wachtwoord of gewoon toe aan iets nieuws? Pas het hier aan! </p>
                    <div className='form'>
                        <form onSubmit={handlePasswordSubmit}>
                            <fieldset>
                                <legend>Gegevens</legend>
                                <label htmlFor="details-password">
                                    Nieuw Wachtwoord:
                                    <input
                                        type="password"
                                        id="new-password"
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        value={newPassword}
                                        name="email-ID"
                                    />
                                </label>
                                <label htmlFor="details-password">
                                    Herhaal nieuw Wachtwoord:
                                    <input
                                        type="password"
                                        id="repeat-password"
                                        onChange={(e) => setRepeatNewPassword(e.target.value)}
                                        value={repeatNewPassword}
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

                </Tile>
            </div>
        </>
    );
}

export default ChangePassword;