import { Card } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { noteAction } from "../state/notesSlice";

export default function Notes() {
    const notes = useSelector((state: RootState) => state.notesStore.notes) 
    const dispatch = useDispatch()
    return (
        <>
            {
                notes.map((note, index) => 
                    <Card 
                        title={note.title}
                        actions={[
                            <DeleteOutlined key="delete" onClick={()=> dispatch(noteAction.delete(index))}/>,
                            <EditOutlined key="edit" />
                        ]} 
                        variant="borderless" style={{ width: 300 }}>
                        <p>{note.text}</p>
                    </Card>
                )
            }
        </>
    )
}