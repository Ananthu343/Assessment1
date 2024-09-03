import { createContext, useContext, useState } from "react";
const Context = createContext();

export function StateContextProvider({children}) {
    const [user,setUser] = useState({})
    

    return(
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export function StateContext() {
    return(
        useContext(Context)
    )
}