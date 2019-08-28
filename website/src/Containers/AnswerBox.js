import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Icon, Modal } from 'antd';

const { Meta } = Card;

// Show percentage of how many percent that the recommended clip can answer/cover the question
// May compute by some formula and weighted by majority vote/rating
// If the score lower than a threshold remove that clip(s) then add a new one
// Find the similarity of the question first before recommend a new set

export default class AnswerBox extends Component {
    state = {
        visible: false
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <Fragment>
                <Card title="Recommended Answers">
                    <Row type='flex' gutter={8}>
                        <Col>
                            <Card
                                onClick={this.showModal}
                                style={{ width: '100%', cursor: 'pointer' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <Icon type="like" key="like" theme='twoTone' />,
                                    <Icon type="dislike" key="dislike" theme='twoTone' twoToneColor='#FF0000' />,
                                ]}
                            >
                                <Meta title="Video title" description="Answer rate: 99%" />
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                style={{ width: '100%', cursor: 'pointer' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <Icon type="like" key="like" theme='twoTone' />,
                                    <Icon type="dislike" key="dislike" theme='twoTone' twoToneColor='#FF0000' />,
                                ]}
                            >
                                <Meta title="Video title" description="Answer rate: 90%" />
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                style={{ width: '100%', cursor: 'pointer' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <Icon type="like" key="like" theme='twoTone' />,
                                    <Icon type="dislike" key="dislike" theme='twoTone' twoToneColor='#FF0000' />,
                                ]}
                            >
                                <Meta title="Video title" description="Answer rate: 87%" />
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                style={{ width: '100%', cursor: 'pointer' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <Icon type="like" key="like" theme='twoTone' />,
                                    <Icon type="dislike" key="dislike" theme='twoTone' twoToneColor='#FF0000' />,
                                ]}
                            >
                                <Meta title="Video title" description="Answer rate: 77%" />
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                style={{ width: '100%', cursor: 'pointer' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <Icon type="like" key="like" theme='twoTone' />,
                                    <Icon type="dislike" key="dislike" theme='twoTone' twoToneColor='#FF0000' />,
                                ]}
                            >
                                <Meta title="Video title" description="Answer rate: 60%" />
                            </Card>
                        </Col>
                    </Row>
                </Card>
                <Modal width={680} title="Basic Modal" visible={this.state.visible} onCancel={this.handleCancel} footer={false}>
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/BQMyeQOLvpg?start=10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal>
            </Fragment>
        )
    }
}