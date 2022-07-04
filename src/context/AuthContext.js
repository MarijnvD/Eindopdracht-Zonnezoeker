import React, {createContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import tokenValidator from "../helpers/tokenValidator";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, toggleAuth] = useState({
            user: null,
            isAuth: false,
            status: "pending"
        }
    );

    const history = useHistory();

    useEffect(() => {

        const jwt = localStorage.getItem("accesToken")

        if (jwt && tokenValidator(jwt)) {
            console.log("Token wordt gechecked op geldigheid & user data wordt opnieuw opgehaald")
            async function getValidatedData(token){
                try{
                    const userData = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,
                        {headers:{
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            }})

                    toggleAuth({
                        isAuth: true,
                        user: {
                            username: userData.data.username,
                            email: userData.data.email,
                            id: userData.data.id,
                        },
                        status: "done"
                    });

                } catch(e) {

                    console.error();
                    logout();
                }
            }
            getValidatedData(jwt)

        } else {
            toggleAuth({
                isAuth: false,
                user: null,
                status: "done"
            })
        }

    }, [])

    function login(jwtToken) {
        console.log('Gebruiker is ingelogd!');

        getData(jwtToken)
        localStorage.setItem('accesToken', jwtToken)
    }

    function logout() {
        toggleAuth({isAuth: false, user: null, status:"done"});
        history.push('/');
        localStorage.removeItem("accesToken")

        console.log("User is uitgelogged en accestoken is verwijderd uit de local storage")
    }

    async function getData(token){
        try{
            const userData = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,
                {headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }})

            toggleAuth({
                isAuth: true,
                user: {
                    username: userData.data.username,
                    email: userData.data.email,
                    id: userData.data.id,
                },
                status: "done"
            });

        }catch(e){
            console.error()
        }
        history.push('/profile');
    }

    const contextData = {
        isAuth: auth.isAuth,
        user : auth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading..</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;