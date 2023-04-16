import { MenuProps, Menu, Image, ConfigProvider, Button } from 'antd';
import React from 'react'
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
    LaptopOutlined,
    LineChartOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Dashboard', '/', <PieChartOutlined />),
    getItem('Thiết bị', '/device', <DesktopOutlined />),
    getItem('Dịch vụ', '/service', <UserOutlined />,),
    getItem('Cấp số', '/numbering', <LaptopOutlined />),
    getItem('Báo cáo', '/report', <LineChartOutlined />),
    getItem('Cài đặt hệ thống', 'sub1', <SettingOutlined />, [
        getItem('Quản lý vai trò', '6'),
        getItem('Quản lý tài khoản', '7'),
        getItem('Nhật ký người dùng', '8')]),
];
const SideMenu: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: 'orange'
                    }
                }}>
                <div style={{ minHeight: '100vh' }}>
                    <div style={{ height: 100, margin: 16, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Image src={require('../../image/logowhite.png')} width={150} preview={false} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <Menu onClick={(item) => {
                                navigate(item.key);
                            }} theme="light" mode="vertical" items={items} defaultSelectedKeys={['/']} />
                        </div>
                        <div>
                            <Button block type='primary' style={{ background:'#FFF2E7', color:'#FF7506'}}>Đăng xuất</Button>
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </div>
    )
}

export default SideMenu