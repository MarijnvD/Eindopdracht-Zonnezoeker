import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Tile from "../components/tiles/Tile";
import axios from "axios";

function UploadAvatar({avatar, setAvatar}) {

    const token = localStorage.getItem("accesToken")
    const history = useHistory()
    const [avatarInput, setAvatarInput] = useState("")

    async function handleAvatarSubmit(e) {
        e.preventDefault();
        try {
            const avatarResponse = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/user/image`,
                {
                    base64Image: avatarInput
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })

            setAvatar(avatarResponse.data.base64Image)

            history.push("/Profile")
            // window.location.reload()

        } catch (e) {

            console.error("Fout in Avatar wijzigen")
            console.error(e)
        }
    }

    return (
        <>
            <h2>Aanpassen Avatar</h2>

            <div className="GeneralPage">


                <Tile title="Avatar Uploaden"
                      colspan={3}
                      rowspan={3}>

                    <p>Eindelijk de perfecte selfie gemaakt?! Upload hem hier! /br
                        let op; De afbeelding moet worden aangeleverd in de vorm van een base64-string.</p>

                    <p>Zodra ik weet hoe ik gewoon kan implementeren hoe je een normale afbeelding upload zonder deze base54-meuk, implementeer ik dat als eerste....</p>



                    <div className='form'>
                        <form onSubmit={handleAvatarSubmit}>
                            <fieldset>
                                <legend>Base64-string</legend>
                                <label htmlFor="details-email">
                                    Base64:
                                    <input
                                        type="text"
                                        id="details-avatar"
                                        value={avatarInput}
                                        onChange={(e) => setAvatarInput(e.target.value)}
                                        name="avatar-ID"
                                    />
                                </label>

                                <button
                                    type="submit">
                                    Versturen
                                </button>
                            </fieldset>
                        </form>
                    </div>

                    <p>Heb je toch geen betere Avatar kunnen vinden? Hier kan je terug naar <Link to="/">Home</Link></p>

                </Tile>
            </div>
        </>
    );
}

export default UploadAvatar;