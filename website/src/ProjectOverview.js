import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import NavBar from './Containers/NavBar'

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

function App() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <NavBar selectedKey='2' />
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Project Overview</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <h1>1. Project Title</h1>
                        <h1>2. Goal and Motivation</h1>
                        <h1>3. Data Collection</h1>
                        <h1>4. Prior Study</h1>
                        <h1>5. System Overview</h1>
                        <h1>6. Implementation Tool</h1>
                        {/* <h1>7. Paper</h1> */}

                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>IntelliMOOC © 2019</Footer>
        </Layout >
    );
}

export default App;
