import React, { Component } from 'react';
import { Icon, Badge, Popconfirm } from 'antd';

export default class ExplanationCard extends Component {
    state = {
        count: 1
    }
    render() {
        return (
            <Popconfirm placement='bottom' okText='Yes' cancelText='No' title="Do you have a question about ...?">
                <Badge count={this.state.count}>
                    <Icon twoToneColor='#fcba03' type="alert" theme='twoTone' style={{ fontSize: 48 }} />
                </Badge>
            </Popconfirm>
        )
    }
}