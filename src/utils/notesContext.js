import { createContext } from "react"

const NotesContext = createContext({
        notes : JSON.parse(localStorage.getItem("notes"))?.length
    ? JSON.parse(localStorage.getItem("notes"))
    : []
})


export default NotesContext;
