import './App.css';
import {
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import Ratings from "./pages/Ratings";
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
import ContactForm from "./pages/ContactForm";
import Toast from "./components/Toast";
import Footer from "./components/footer/Footer";

function App() {

    const { isAuth } = useContext(AuthContext);
    const [weatherData, setWeatherData] = useState("");
    const [predictiveWeatherData, setPredictiveWeatherData] = useState("");
    const [avatar, setAvatar] = useState(" ")
    const [toast, toggleToast] = useState(false)
    const [toastText, setToastText] = useState("")

    return (
        <>
            <Navigation
                appName="ZonneZoeker"
                tab1="Home"
                tab2="Uren"
                tab3="Cijfers"
                tab4="Contact"
                setWeatherData={setWeatherData}
                setPredictiveWeatherData={setPredictiveWeatherData}
                toggleToast={toggleToast}
                setToastText={setToastText}
            />



                <Switch>
                    <Route exact path="/">
                        <Home weatherData={weatherData}
                              setWeatherData={setWeatherData}
                              toggleToast={toggleToast}
                              setToastText={setToastText}/>
                    </Route>
                    <Route exact path ="/Hours">
                        {isAuth ? <Hours predictiveWeatherData={predictiveWeatherData}
                                         setPredictiveWeatherData={setPredictiveWeatherData}
                                         toggleToast={toggleToast}
                                         setToastText={setToastText}/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/Ratings">
                        {isAuth ? <Ratings weatherData={weatherData}
                                           setWeatherData={setWeatherData}
                                           toggleToast={toggleToast}
                                           setToastText={setToastText}/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/SignIn">
                        <SignIn toggleToast={toggleToast}
                                setToastText={setToastText}/>
                    </Route>
                    <Route exact path="/SignUp">
                        <SignUp
                            toggleToast={toggleToast}
                            setToastText={setToastText}/>
                    </Route>
                    <Route exact path="/Privacy">
                        <Privacy />
                    </Route>
                    <Route exact path="/ContactForm">
                        <ContactForm toggleToast={toggleToast}
                                     setToastText={setToastText}/>
                    </Route>
                    <Route exact path="/Profile">
                        {isAuth ? <Profile avatar={avatar} /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/ChangePassword">
                        {isAuth ? <ChangePassword
                            toggleToast={toggleToast}
                            setToastText={setToastText}/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/ChangeEmail">
                        {isAuth ? <ChangeEmail
                            toggleToast={toggleToast}
                            setToastText={setToastText}/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/UploadAvatar">
                        {isAuth ? <UploadAvatar avatar={avatar}
                                                setAvatar={setAvatar}
                                                toggleToast={toggleToast}
                                                setToastText={setToastText}/> : <Redirect to="/" />}
                    </Route>
                </Switch>

            <Footer copyright="© Zonnezoeker Eindproject"
                    name="Marijn van Dorp"
                    description= "ZonneZoeker is het eindproject voor Hogeschool Novi, het is een applicatie die de gebruiker in één enkele oogopslag alle relevante weer-data overzichtelijk laat zien en ook door een gepatenteerd rating systeem verteld hoe deze weergegevens geïnterpreteerd dienen te worden."
                    title= "ZonneZoeker"

            />








            <Toast trigger={toast} setTrigger={toggleToast}>
                <h3>{toastText}</h3>
            </Toast>
        </>
    );
}

export default App;
