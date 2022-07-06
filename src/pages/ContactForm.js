import React from 'react';
import {useForm} from "react-hook-form";
import Tile from "../components/tiles/Tile";
import {Link} from "react-router-dom";

function ContactForm() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onFormSubmit(data) {
        console.log(data);
        window.alert("Je bericht is écht verstuurd en zéker niet alleen in de console gelogged..")
    }

    return (
        <>
            <h2>Neem contact op!</h2>

            <div className="GeneralPage">

                <Tile title="Contact gegevens"
                      colspan={2}
                      rowspan={3}>
                    <h3>Laat een bericht achter en onze hoofd-ZonneZoeker komt zo snel mogelijk bij je terug!</h3>

                    <p>
                        Voer hieronder de gewenste contact gegevens in;
                    </p>

                    <div className="reactForm">

                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <fieldset>
                                <legend>Registratie</legend>

                                <label htmlFor="details-name">
                                    Naam:
                                    <input
                                        type="text"
                                        id="details-name"
                                        {...register("nameId", {
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
                                    {errors.nameId &&
                                        <span className="errorHandling">{errors.nameId.message}</span>}
                                </label>

                                <label htmlFor="details-tel">
                                    Naam:
                                    <input
                                        type="tel"
                                        id="details-tel"
                                        {...register("telId", {
                                            minLength: {
                                                value: 6,
                                                message: "*Dit veld moet minimaal 6 karakters lang zijn!"
                                            }
                                        })}
                                    />
                                    {errors.telId &&
                                        <span className="errorHandling">{errors.telId.message}</span>}
                                </label>

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

                                <label htmlFor="details-message">
                                    <p>Boodschap</p>
                                    <textarea
                                        type="text"
                                        id="details-message"
                                        rows="10"
                                        cols="40"
                                        {...register("message", {
                                            required: {
                                                value: true,
                                                message: "Dit veld is verplicht!"
                                            },
                                        })}
                                    />
                                    {errors.message && <span className="errorHandling">{errors.message.message}</span>}
                                </label>

                                <button
                                    type="submit">
                                    Versturen
                                </button>
                            </fieldset>
                        </form>
                    </div>

                    <p>Neem je toch liever geen contact op, dan ga je <Link to="/">hier</Link> terug naar Home.
                    </p>

                </Tile>

                <Tile title="ZonneFeitjes"
                      colspan={1}
                      rowspan={3}
                >
                    <h3>De Zon bestaat voornamelijk uit waterstof en helium</h3>
                    <p>
                        Als je de Zon uit elkaar zou kunnen rafelen en de verschillende elementen op aparte hopen zou
                        kunnen gooien dan zou je zien dat 74% van de massa afkomstig is van waterstof en 24% van helium.
                        De resterende 2% zijn sporen van ijzer, nikkel, zuurstof en alle andere elementen die in ons
                        zonnestelsel voorkomen. Met andere woorden, de Zon bestaat voornamelijk uit waterstof..</p>

                    <h3>Niet alle delen van de Zon draaien even snel rond</h3>
                    Anders dan de planeten is de Zon een grote bal waterstofgas. Hierdoor draaien verschillende delen
                    van de Zon met verschillende snelheden rond. Je kan aan de verplaatsing van zonnevlekken aan het
                    oppervlak zien hoe snel de Zon draait. Delen aan de evenaar hebben ongeveer 25 dagen nodig om
                    eenmaal rond te draaien. Aan de polen kan het wel tot 36 dagen duren. Het binnenste van de Zon heeft
                    er 27 dagen voor nodig.
                </Tile>
            </div>
        </>
    );
}

export default ContactForm;
