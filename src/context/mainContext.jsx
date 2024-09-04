import { createContext, useContext, useEffect, useState } from "react";
import classData from "../utils/classData";
import assignmentdata from "../utils/assignmentData";
const Context = createContext();

function StateContextProvider({ children }) {
    const [inView, setInView] = useState("Dashboard")
    const [user, setUser] = useState({})
    const [filteredClass, setFilteredClass] = useState(classData)
    const [assignments, setAssignments] = useState(assignmentdata)

    useEffect(() => {
        setUser({ name: "John Doe", profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwCDq7bgmwlISykeuIuqDR1l0-l0DZ90_vA&s", level:"Intermediate" })
        setFilteredClass(classData)
        setAssignments(assignmentdata)
    }, [])

    function filter(flag) {
        if (flag) {
            let joinData = classData.filter(ele => ele.status == "join")
            let scheduledData = classData.filter(ele => ele.status == "scheduled")
            let others = classData.filter(ele => ele.status != "join" && ele.status != "scheduled")
            setFilteredClass([...joinData,...scheduledData,...others])
        }else{
            setFilteredClass(classData)
        }
    }

    function bookNow(index){        
        let item = filteredClass.map((ele,i) => {
            if (i == index) {
                 ele.status = "scheduled"
            }
            return ele
        })        
        setFilteredClass(item)
    }
    
    return (
        <Context.Provider value={ 
            { user, inView, setInView, filteredClass, filter, assignments, bookNow } 
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