import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Note {
    title: string,
    text: string
}
export interface Notes extends Array<Note> { }
export interface NoteUpdated {
    note: Note,
    index: number
}

interface NotesState {
    editMode: boolean,
    activeIndex?: number,
    activeNote: Note,
    notes: Notes
}

const initialState: NotesState = {
    editMode: false,
    activeNote: {} as Note,
    notes: [
        {
            title: 'title',
            text: 'text'
        }
    ]
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
        add: (state) => {
            state.notes.push(state.activeNote)
        },
        delete: (state, action: PayloadAction<number>) => {
            state.notes.splice(action.payload, 1)
        },
        update: (state) => {
            if (state.editMode && state.activeIndex) {
                state.notes.splice(state.activeIndex, 0, state.activeNote)
                state.editMode = false
                state.activeIndex = -1
                state.activeNote = {} as Note
            } else {
                console.error("Edit mode disabled or Active note can not be found.")
            }
        },
        enableEditMode: (state, action: PayloadAction<number>) => {
            state.notes.splice(action.payload, 1)
            state.editMode = true;
            state.activeIndex = action.payload;
            state.activeNote = state.notes[action.payload]
        }
    }
})

export const noteAction = notesSlice.actions

export default notesSlice.reducer