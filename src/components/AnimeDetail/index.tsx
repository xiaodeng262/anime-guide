'use client'


import React, {useState} from 'react';
import {Avatar, Button, Card, Col, Flex, List, Row, Input, Divider} from 'antd';
import {Descriptions} from 'antd';

const {TextArea} = Input;
import type {DescriptionsProps} from 'antd';


const cardStyle: React.CSSProperties = {
    margin: 20,
    padding: 10
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 273,
};


function AnimeDetail() {

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: '番剧名',
            children: '迷宫饭',
        },
        {
            key: '2',
            label: '原版名称',
            children: 'ダンジョン飯',
        },
        {
            key: '3',
            label: '首播时间',
            children: '2024-01-04',
        },
        {
            key: '6',
            label: '制作公司',
            children: 'TRIGGER',
        },
        {
            key: '4',
            label: '播放状态',
            children: '连载',
        },
        {
            key: '5',
            label: '类型',
            children: '搞笑 冒险 奇幻',
        },

        {
            key: '7',
            label: '简介：',
            children: '在地牢深处被龙袭击，失去了金钱和食物的冒险者。里奥斯一行。即使再挑战地牢，如果继续下去，途中也会饿死。于是，里奥斯做出了决定。“是啊，吃怪物吧。」',
        },
    ];
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    const [value, setValue] = useState('');


    return <>
        <Card style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
            <Flex justify="space-between">
                <img
                    alt="avatar"
                    src="https://cdn.aqdstatic.com:966/age/20230301.jpg"
                    style={imgStyle}
                />
                <Flex vertical align="flex-end" justify="space-between" style={{padding: 32}}>
                    <Descriptions title="番剧信息" items={items}/>
                    <Row gutter={10}>
                        <Col span={8}>
                            <Button type="primary" autoInsertSpace>
                                已看
                            </Button>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" autoInsertSpace>
                                在追
                            </Button>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" autoInsertSpace>
                                不喜欢
                            </Button>
                        </Col>
                    </Row>
                </Flex>
            </Flex>
        </Card>
        <Card style={cardStyle} title="评论区">
            <div>
                <TextArea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Controlled autosize"
                    autoSize={{minRows: 3, maxRows: 5}}
                />
                <Button type="primary" autoInsertSpace style={{float: 'right', marginTop: 10, marginBottom: 10}}>
                    发表
                </Button>
            </div>
            <Divider/>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </Card>
    </>
}


export default AnimeDetail;
