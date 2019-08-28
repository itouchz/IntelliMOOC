import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';

import NavBar from './Containers/NavBar'
import SectionList from './Containers/SectionList'
import QuestionBox from './Containers/QuestionBox'
import AnswerBox from './Containers/AnswerBox'

import Breadcrumbs from './Components/Breadcrumbs'
import Player from './Components/Player'
import Agent from './Components/Agent'

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavBar selectedKey='1' />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumbs style={{ margin: '16px 0' }} />
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <SectionList />
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Row className='main-contents' type='flex' justify='space-between'>
              <Col span={20}>
                <Player />
              </Col>
              <Col span={4} style={{ padding: 10 }}>
                <Row type='flex' justify='end'>
                  <Col><Agent /></Col>
                </Row>
              </Col>
            </Row>
            <Divider orientation="left">Asking a question</Divider>
            <Row className='sub-contents'>
              <QuestionBox />
              <br />
              <AnswerBox />
            </Row>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>IntelliMOOC © 2019</Footer>
    </Layout>
  );
}

export default App;
