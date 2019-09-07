import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import logo from '../logo.png'

const { Header } = Layout;

class NavBar extends Component {
    render() {
        const { selectedKey } = this.props
        return (
            <Header className="header" style={{ background: '#fff' }}>
                <div className="logo">
                    <img src={logo} height='32' alt="IntelliMOOC" style={{ marginRight: 4 }} />
                    <strong>IntelliMOOC</strong>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={selectedKey} style={{ lineHeight: '64px' }} >
                    <Menu.Item key="1">
                        <a href="/" rel="noopener noreferrer">Home</a>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a href="/overview" rel="noopener noreferrer">Project Overview</a>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <a href="/demo" rel="noopener noreferrer">Demonstration</a>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default NavBar