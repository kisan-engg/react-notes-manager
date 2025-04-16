import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Note {
    id: number,
    title: string,
    text: string
}
export interface Notes extends Array<Note> {}
interface NotesState {
    editMode: boolean,
    activeNote: Note,
    notes: Notes
}
const initialState: NotesState = {
    editMode: false,
    activeNote: { title: '', text: ''} as Note,
    notes: []
}

const notesSlice = createSlice({
    name: 'notesList',
    initialState,
    reducers: {
        changeNoteTitle: (state, action: PayloadAction<string>) => {
            state.activeNote.title = action.payload
        },
        changeNoteText: (state, action: PayloadAction<string>) => {
            state.activeNote.text = action.payload
        },
        reset: (state) => {
            state.activeNote = initialState.activeNote
        },
        resetEdit: (state) => {
            state.activeNote = initialState.activeNote
            state.editMode = false               
        },        
        enableEditMode: (state, action: PayloadAction<Note>) => {            
            state.activeNote = {...action.payload}
            state.editMode = true;
        }
    }
});


export const noteAction = notesSlice.actions

export default notesSlice.reducer