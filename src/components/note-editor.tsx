import { Button, Flex, Input } from 'antd';
import { noteAction } from '../state/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useAddNoteMutation, useUpdateNoteMutation } from '../state/data-request';

export default function NoteEditor() {

    const {activeNote, editMode} = useSelector((state: RootState) => state.notesStore)    

    const dispatch = useDispatch()

    const [addNote, { isLoading }] = useAddNoteMutation()
    const [updateNote] = useUpdateNoteMutation()

    const save = () => {
        if(editMode) {
            updateNote({...activeNote})
            dispatch(noteAction.resetEdit())
        } else {
            dispatch(noteAction.reset())
            addNote({...activeNote})
        }        
    }

    return (
        <>  
            { isLoading ? "loading" : ''}
            <Flex vertical gap={12}>
                <Input required={true} minLength={3} placeholder='Title'
                    value={activeNote.title}
                    onChange={(e) => { dispatch(noteAction.changeNoteTitle(e.target.value)) }} />
                <Input.TextArea value={activeNote.text} placeholder='Description'
                    onChange={(e) => { dispatch(noteAction.changeNoteText(e.target.value)) }} />
                <Button type="primary" disabled={false}
                    onClick={save}>
                    Save
                </Button>
            </Flex>
        </>
    )
}