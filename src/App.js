import './App.css';
import {
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';
import Home from "./pages/Home";
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
import ChangePassword from "./pages/ChangePassword";
import ChangeEmail from "./pages/ChangeEmail";
import UploadAvatar from "./pages/UploadAvatar";
import Hours from "./pages/Hours";

function App() {

    const { isAuth } = useContext(AuthContext);
    const [weatherData, setWeatherData] = useState("");
    const [predictiveWeatherData, setPredictiveWeatherData] = useState("");
    const [error, toggleError] = useState(false)
    const [avatar, setAvatar] = useState(" ")
    const [toast, setToast] = useState(false)

    if (error){
        console.log("ALLES IS FOUT")
    }

    return (

        <>
            <Navigation
                appName="ZonneZoeker"
                tab1="Home"
                tab2="Uren"
                tab3="10 Dagen"
                tab4="Weekend"
                tab5="Maand"
                setWeatherData={setWeatherData}
                setPredictiveWeatherData={setPredictiveWeatherData}
                toggleError={toggleError}
            />



                <Switch>
                    <Route exact path="/">
                        <Home weatherData={weatherData} setWeatherData={setWeatherData}/>
                    </Route>
                    <Route exact path ="/Hours">
                        {isAuth ? <Hours predictiveWeatherData={predictiveWeatherData} setPredictiveWeatherData={setPredictiveWeatherData}/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/Days">
                        {isAuth ? <Days weatherData={weatherData} setWeatherData={setWeatherData}/> : <Redirect to="/" />}
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
                        {isAuth ? <Profile avatar={avatar} /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/ChangePassword">
                        {isAuth ? <ChangePassword /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/ChangeEmail">
                        {isAuth ? <ChangeEmail /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/UploadAvatar">
                        {isAuth ? <UploadAvatar avatar={avatar} setAvatar={setAvatar} /> : <Redirect to="/" />}
                    </Route>
                </Switch>
        </>
    );
}

export default App;
