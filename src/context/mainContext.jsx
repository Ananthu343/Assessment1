import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

function StateContextProvider({ children }) {
    const [inView, setInView] = useState("Dashboard")
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({ name: "John Doe", profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwCDq7bgmwlISykeuIuqDR1l0-l0DZ90_vA&s", level:"Intermediate" })
    }, [])

    return (
        <Context.Provider value={ 
            { user, inView, setInView } 
        }>
            {children}
        </Context.Provider>
    )
}

function StateContext() {
    return (
        useContext(Context)
    )
}

export {
    StateContextProvider,
    StateContext
}