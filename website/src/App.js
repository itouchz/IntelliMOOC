import React from 'react';
import { Layout, Divider, Row, Col, Typography } from 'antd';

import NavBar from './Containers/NavBar'

const { Title } = Typography

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavBar selectedKey='1' />
      <Title style={{ margin: '16px 50px' }}>IntelliMOOC: Intelligent Online Learning Environment for MOOC Platforms</Title>

      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <video src=""></video>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>IntelliMOOC © 2019</Footer>
    </Layout>
  );
}

export default App;
