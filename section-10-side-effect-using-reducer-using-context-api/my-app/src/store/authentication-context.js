import React, { useState, useEffect } from 'react'
const AuthContext = React.createContext({
    isLogined : false,
    handleLogin : () => {},
    handleLogout: () => {}
});


export const AuthContextProvider = (props) => {
    const [isLogined, setIsLogined] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("isLogined") === "1"){
            setIsLogined(true)
        }
    }, [])

    const handleLogin = () => {
        localStorage.setItem("isLogined", "1");
        setIsLogined(true);
    }


    const handleLogout = () => {
        localStorage.removeItem("isLogined");
        setIsLogined(false);
    }

    return (
        <AuthContext.Provider value={{
            isLogined: isLogined,
            handleLogin: handleLogin,
            handleLogout: handleLogout
        }}>
        {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;


