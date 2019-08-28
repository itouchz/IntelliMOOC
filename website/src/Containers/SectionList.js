import React from 'react'
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

function SectionList() {
    return (
        <Sider>
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }} >
                <SubMenu key="sub1" title={<span> <Icon type="user" /> Section 1 </span>} >
                    <Menu.Item key="1">Lesson 1</Menu.Item>
                    <Menu.Item key="2">Lesson 2</Menu.Item>
                    <Menu.Item key="3">Lesson 3</Menu.Item>
                    <Menu.Item key="4">Lesson 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span> <Icon type="laptop" /> Section 2 </span>} >
                    <Menu.Item key="5">Lesson 5</Menu.Item>
                    <Menu.Item key="6">Lesson 6</Menu.Item>
                    <Menu.Item key="7">Lesson 7</Menu.Item>
                    <Menu.Item key="8">Lesson 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span> <Icon type="notification" /> Section 3 </span>} >
                    <Menu.Item key="9">Lesson 9</Menu.Item>
                    <Menu.Item key="10">Lesson 10</Menu.Item>
                    <Menu.Item key="11">Lesson 11</Menu.Item>
                    <Menu.Item key="12">Lesson 12</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default SectionList