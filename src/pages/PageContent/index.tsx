import React from 'react'
import SideMenu from '../../components/Sidebar/SideMenu'
import Topbar from '../../components/Topbar/Topbar'
import { Outlet } from 'react-router-dom'
import Layout from 'antd/es/layout/layout'

const container: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
}
const sideMenuAndPageContent: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}
const PageContent: React.FC = () => {
    return (
        <div style={container}>
            <SideMenu />
            <Layout style={sideMenuAndPageContent}>
                <Topbar />
                <Outlet />
            </Layout>
        </div>
    )
}

export default PageContent