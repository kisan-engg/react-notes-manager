import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Profile',
        disabled: true,
    },
    {
        type: 'divider',
    },
    {
        key: '2',
        label: 'Logout',
        extra: '⌘P',
    }
];

export default function UserMenu() {
    return (
        <>
            <Dropdown menu={{ items }}>
                <Button shape='circle' size="large" icon={<UserOutlined />}>
                </Button>
            </Dropdown>
        </>
    )
}
