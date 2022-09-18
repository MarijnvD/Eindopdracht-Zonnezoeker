import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import Tile from "../components/tiles/Tile";
import {useForm} from "react-hook-form";

function SignUp({toggleToast, setToastText}) {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const history = useHistory()

    async function onFormSubmit(data) {

        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    email: data.emailId,
                    password: data.passwordId,
                    username: data.userId,
                })

            toggleToast(true)
            setToastText("Registratie succesvol! Je wordt doorgestuurd naar de login pagina!!")
            history.push('/signin')

        } catch (data) {
            console.error(data)
            toggleToast(true)
            setToastText("Er is iets verkeerd gegaan, controleer je gegevens!")
        }
    }

    return (
        <>
            <h2>Registreren</h2>

            <div className="GeneralPage">

                <Tile title="Registratie gegevens"
                      colspan={2}
                      rowspan={3}>
                    <h3>Voeg je toe aan ons groeiende aantal ZonneZoekers!</h3>

                    <p>
                        Voer hieronder he gewenste gebruiksgegevens in;
                    </p>

                    <div className="reactForm">

                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <fieldset>
                                <legend>Registratie</legend>

                                <label htmlFor="details-email">
                                    email adres:
                                    <input
                                        type="email"
                                        id="details-email"
                                        {...register("emailId", {
                                            required: {
                                                value: true,
                                                message: "*Dit veld is verplicht!"
                                            },
                                        })}
                                    />
                                    {errors.emailId &&
                                        <span className="errorHandling">{errors.emailId.message}</span>}
                                </label>

                                <label htmlFor="details-password">
                                    Wachtwoord:
                                    <input
                                        type="password"
                                        id="details-password"
                                        {...register("passwordId", {
                                            required: {
                                                value: true,
                                                message: "Dit veld is verplicht!"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "*Moet minimaal 6 karakters lang zijn!"
                                            }
                                        })}
                                    />
                                    {errors.passwordId &&
                                        <span className="errorHandling">{errors.passwordId.message}</span>}
                                </label>

                                <label htmlFor="details-userName">
                                    Gebruikersnaam:
                                    <input
                                        type="text"
                                        id="details-userName"
                                        {...register("userId", {
                                            required: {
                                                value: true,
                                                message: "Dit veld is verplicht!"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "*Dit veld moet minimaal 6 karakters lang zijn!"
                                            }
                                        })}
                                    />
                                    {errors.userId &&
                                        <span className="errorHandling">{errors.userId.message}</span>}
                                </label>
                                <button
                                    type="submit">
                                    Registratie voltooien
                                </button>
                            </fieldset>
                        </form>
                    </div>

                    <p>Heb je al een account? Dan kan je <Link to="/signin">hier</Link> inloggen.</p>

                </Tile>

                <Tile title="Privacy verklaring"
                      colspan={1}
                      rowspan={3}>


                    <p>In onderstaande privacyverklaring wordt uitgelegd welke gegevens worden verwerkt, wat er met uw
                        gegevens wordt gedaan en welke rechten u heeft. ZonneZoeker verzamelt slechts tot personen
                        herleidbare informatie die uitdrukkelijk en vrijwillig door de bezoeker ter beschikking is
                        gesteld.</p>

                    <p>Wil je onze privacy verklaring lezen? Je kunt onze privacy verklaring <Link
                        to="/privacy">hier</Link> inzien.</p>
                </Tile>
            </div>
        </>
    );
}

export default SignUp;