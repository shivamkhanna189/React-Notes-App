import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name  :"note",
    initialState: {
        notes : JSON.parse(localStorage.getItem("notes"))?.length
        ? JSON.parse(localStorage.getItem("notes"))
        : []
    },
    reducers: {
        addNotes: (state, action) => {
            state.notes.push(action.payload)
            localStorage.setItem("notes", JSON.stringify(state.notes));
        },
        deleteNote: (state, action) => {
            state.notes.splice(action.payload, 1)
            localStorage.setItem("notes", JSON.stringify(state.notes));
        },
        onSearch: (state, action) => {
            state.notes  = state.notes.filter(value => value.includes(action.payload));
        }
    }
})

export const {addNotes , deleteNote, onSearch} = notesSlice.actions
export default notesSlice.reducer