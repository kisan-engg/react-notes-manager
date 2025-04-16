import { Card, Spin } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { noteAction } from "../state/notesSlice";
import { useDeleteNoteMutation, useGetAllNotesQuery } from "../state/data-request";
import { RootState } from "../state/store";

export default function Notes() {
    const { data, isLoading } = useGetAllNotesQuery();
    const activeNote = useSelector((state: RootState) => state.notesStore.activeNote)
    const dispatch = useDispatch()

    const [deleteNote] = useDeleteNoteMutation()
    return (
        <>
            <Spin spinning={isLoading}>
                {
                    data?.map((note, index) => {
                        if(note.id == activeNote.id)
                            return
                        return <Card
                            title={note.title}
                            key={'note' + index}
                            actions={[
                                <DeleteOutlined key="delete" onClick={() => deleteNote(note.id)} />,
                                <EditOutlined key="edit" onClick={() => dispatch(noteAction.enableEditMode(note))} />
                            ]}
                            variant="borderless" style={{ width: 300 }}>
                            <p>{note.text}</p>
                        </Card>
                    }
                    )
                }
            </Spin>
        </>
    )
}
