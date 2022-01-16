import React,{ useContext, useState, useEffect } from "react";

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export  function useTheme() {
    return useContext(ThemeContext)
}

export  function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export  function ThemeProvider({ children }) {
    const [ darkTheme, setDarkTheme ] = useState("")

    function toggleTheme() {
        if (darkTheme) {
            setDarkTheme("")
        } else {
            setDarkTheme(" dark")
        }
    }

    useEffect(()  => {
        document.body.classList.toggle("dark")
    }, [darkTheme]);
    
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider >
        </ThemeContext.Provider>
    )
}
