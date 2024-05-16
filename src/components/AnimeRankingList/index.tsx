"use client";
import React from "react";
import {Avatar, Flex, Layout, List, Menu, Space} from 'antd';
import {
    LikeOutlined,
    MessageOutlined,
    StarOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";

const {Header, Footer, Sider, Content} = Layout;


function AnimeRankingList() {

    const data = Array.from({ length: 10 }).map((_, i) => ({
        href: 'https://ant.design',
        title: `ant design part ${i+1}`,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i+1}`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }));

    const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    return (
        <Layout style={{marginTop:20, marginBottom:20, marginLeft:20, marginRight:20}}>
            <Sider width="20%" >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined/>,
                            label: '观看次数排行',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined/>,
                            label: '讨厌番剧排行',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined/>,
                            label: '站外番剧排行',
                        },
                    ]}
                />
            </Sider>
            <Content>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </Content>
        </Layout>
    )
}


export default AnimeRankingList;
