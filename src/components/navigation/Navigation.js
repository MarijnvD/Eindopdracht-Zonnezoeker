import React, {useContext} from 'react';
import SearchBar from "../searchBar/SearchBar";
import TemperatureToggle from "../temperatureToggle/TemperatureToggle";
import LightDarkToggle from "../lightDarkToggle/LightDarkToggle";
import './Navigation.css';
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';

function Navigation({appName, tab1, tab2, tab3, tab4, setWeatherData, setPredictiveWeatherData, toggleError}) {
    const history = useHistory();
    const {isAuth} = useContext(AuthContext);
    return (
        <nav className="navigation">

            <div className="upper">
                <div className="title">
                    <button type="button"
                            onClick={() => history.push('/')}
                    >
                        <Logo className="logo"/>
                    </button>
                    <h1>{appName}</h1>
                </div>

                <div className="searchMenu"><SearchBar setWeatherData={setWeatherData}
                                                       setPredictiveWeatherData={setPredictiveWeatherData}
                                                       toggleError={toggleError}
                />
                </div>

                <div className="toggleBurger">
                    <TemperatureToggle/>
                    <LightDarkToggle/>

                    {isAuth ?
                        <button
                            type="button"
                            onClick={() => history.push('/Profile')}
                        >
                            Profile
                        </button>
                        :
                        <button
                            type="button"
                            onClick={() => history.push('/SignIn')}
                        >
                            Inloggen
                        </button>}
                </div>
            </div>

            <div className="tabs">

                <div className="separator"/>
                <div className="tabRow">
                    <button
                        type="button"
                        onClick={() => history.push('/')}
                    >
                        {tab1}
                    </button>

                    <button
                        type="button"
                        onClick={() => history.push('/ContactForm')}
                    >
                        {tab4}
                    </button>

                    {isAuth &&
                        <>
                            <button
                                type="button"
                                onClick={() => history.push('/Hours')}
                            >
                                {tab2}
                            </button>
                            <button
                                type="button"
                                onClick={() => history.push('/Ratings')}
                            >
                                {tab3}
                            </button>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navigation;