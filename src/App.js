import './App.css';
import {
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import Air from "./pages/Air";
import Days from "./pages/Days";
import Weekend from "./pages/Weekend";
import Month from "./pages/Month";
import Navigation from "./components/navigation/Navigation";
import {useContext, useState} from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import {AuthContext} from "./context/AuthContext";
import Privacy from "./pages/Privacy";

function App() {

    const { isAuth } = useContext(AuthContext);
    const [weatherData, setWeatherData] = useState("");
    const [predictiveWeatherData, setPredictiveWeatherData] = useState("");

    return (

        <>
            <Navigation
                appName="ZonneZoeker"
                tab1="Home"
                tab2="Lucht"
                tab3="10 Dagen"
                tab4="Weekend"
                tab5="Maand"
                setWeatherData={setWeatherData}
                setPredictiveWeatherData={setPredictiveWeatherData}
            />

                <Switch>
                    <Route exact path="/">
                        <Home weatherData={weatherData} setWeatherData={setWeatherData}/>
                    </Route>
                    <Route exact path ="/air">
                        {isAuth ? <Air/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/Days">
                        {isAuth ? <Days predictiveWeatherData={predictiveWeatherData} setPredictiveWeatherData={setPredictiveWeatherData}/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/Weekend">
                        {isAuth ? <Weekend/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/Month">
                        {isAuth ? <Month/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/SignIn">
                        <SignIn />
                    </Route>
                    <Route exact path="/SignUp">
                        <SignUp />
                    </Route>
                    <Route exact path="/Privacy">
                        <Privacy />
                    </Route>
                    <Route exact path="/Profile">
                        {isAuth ? <Profile /> : <Redirect to="/" />}
                    </Route>
                </Switch>
        </>
    );
}

export default App;
