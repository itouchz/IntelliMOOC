import React, { Component } from 'react';
import { Icon, Badge, Popconfirm, Button, notification } from 'antd';

const openNotificationWithIcon = type => {
    notification[type]({
        message: 'Explanation Card',
        duration: 0,
        top: 72,
        description:
            `This is the content of the explanation card. This is the content of the explanation card. This is the content of the explanation card.`,
    });
};

// Collect behavior data for training model e.g., number of rewind video, number of click yes for question, number of pausing to read the explanation card, explanation card time before closing, etc. (label: confused/not confused)
// Generative Model of user behavior
export default class Agent extends Component {
    state = {
        count: 1
    }
    render() {
        return (
            <Popconfirm placement='bottom' okText='Yes' cancelText='No' title="Do you have a question about ...?" onConfirm={() => openNotificationWithIcon('info')}>
                <Badge count={this.state.count}>
                    <Icon twoToneColor='#fcba03' type="alert" theme='twoTone' style={{ fontSize: 48 }} />
                </Badge>
            </Popconfirm>
        )
    }
}