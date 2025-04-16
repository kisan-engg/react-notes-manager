import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Note, Notes } from "./notesSlice";

export const notesApi = createApi({
    reducerPath: 'notesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),
    tagTypes: ['Notes'],
    endpoints: (build) => ({
        getAllNotes: build.query<Notes, void>({
            query: () => "/notes",
            providesTags: ['Notes']
        }),
        addNote: build.mutation<Note, Note>({
            query: (note: Note) => ({
                url: "/notes",
                method: "POST",
                body: note
            }),
            invalidatesTags: ['Notes']
        }),
        deleteNote: build.mutation<Note, number>({
            query: (id: number) => ({
                url: `/notes/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Notes']
        }),
        updateNote: build.mutation<Note, Note>({
            query: (note) => ({
                url: `/notes/${note.id}`,
                method: "PUT",
                body: note
            }),
            invalidatesTags: ['Notes']
        })
    })
});

export const { useGetAllNotesQuery, useAddNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation } = notesApi;
