"use client";
import {Avatar, Card, Col, Flex, Row, Tabs} from "antd";
import {Typography} from 'antd';
import {AndroidOutlined, AntDesignOutlined, AppleOutlined} from "@ant-design/icons";
import React from "react";
import AnimeHeader from "@/components/AnimeHeader";
import AnimeFooter from "@/components/AnimeFooter";

const {Title} = Typography;

function UserInfo() {
    return <>
        <AnimeHeader/>
        <div style={{margin: 20}}>
            <Card>
                <Title level={4}>个人信息</Title>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar
                        size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                        icon={<AntDesignOutlined/>}
                        style={{marginRight: 20}}
                    />
                    <div>
                        <p style={{margin: 10}}>昵称：张三的心腹手势～</p>
                        <p style={{margin: 10}}>账号：222331111</p>
                        <p style={{margin: 10}}>称号：老湿机</p>
                    </div>
                </div>
            </Card>
            <Card style={{marginTop: 20}}>
                <Tabs
                    defaultActiveKey="2"
                    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
                        const id = String(i + 1);
                        return {
                            key: id,
                            label: `Tab ${id}`,
                            children: `Tab ${id}`,
                            icon: <Icon/>,
                        };
                    })}
                />
            </Card>
        </div>
        <AnimeFooter/>
    </>
}

export default UserInfo;
