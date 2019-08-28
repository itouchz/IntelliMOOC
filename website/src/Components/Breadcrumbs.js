import React from 'react';
import { Breadcrumb } from 'antd';

function Breadcrumbs() {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Section 1</Breadcrumb.Item>
            <Breadcrumb.Item>Lesson A</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Breadcrumbs