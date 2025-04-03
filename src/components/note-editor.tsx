import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { noteAction } from '../state/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';

type FieldType = {
    title?: string;
    text?: string;
    save?: string;
};

export default function NoteEditor() {

    const note = useSelector((state: RootState) => state.notesStore.activeNote)
    const editMode = useSelector((state: RootState) => state.notesStore.editMode)

    const dispatch = useDispatch()
    
    const onFinish: FormProps<FieldType>['onFinish'] = () => {
        if(editMode)
            dispatch(noteAction.update())
        dispatch(noteAction.add())
    };
    

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input your title!' }]}
                >
                    <Input value={note.title} onChange={() => {}}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Text"
                    name="text"
                    rules={[{ required: false, message: 'Please input your text!' }]}
                >
                    <Input.TextArea value={note.text}/>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}