"use client";

import AnimeHeader from "../components/AnimeHeader";
import AnimeFooter from "../components/AnimeFooter";
import {Card, Col, Divider, Row} from "antd";
import styles from "@/app/page.module.scss";
import {anime, animeSearch} from "@/config/types";
import Meta from "antd/es/card/Meta";
import {useState} from "react";

export default function Home() {
    //筛选条件
    const [animeSearchList, setAnimeSearch] = useState<animeSearch[]>(
        [
            {
                id: 1,
                title: '首字母',
                conditions: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            },
            {
                id: 2,
                title: '状态',
                conditions: ['完结', '连载']
            },
            {
                id: 3,
                title: '类型',
                conditions: ['玄幻', '热血', '恋爱', '青春']
            },
            {
                id: 4,
                title: '年份',
                conditions: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
            }
        ]
    )

    //番剧
    const [animeList, setAnimeList] = useState<anime[]>(
        [
            {
                id: 1,
                title: '番剧111111',
                image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            },
            {
                id: 2,
                title: '番剧111111',
                image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            },
            {
                id: 3,
                title: '番剧111111',
                image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            },
            {
                id: 4,
                title: '番剧111111',
                image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            },
            {
                id: 5,
                title: '番剧111111',
                image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            },
            {
                id: 6,
                title: '番剧111111',
                image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            }
            , {
            id: 7,
            title: '番剧111111',
            image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        }, {
            id: 8,
            title: '番剧111111',
            image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        }, {
            id: 9,
            title: '番剧111111',
            image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        }, {
            id: 10,
            title: '番剧111111',
            image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        }
        ]
    )


    //分割线
    const DividerWithMargin = () => (
        <Divider style={{margin: 0, marginTop: 10, marginBottom: 10}}/>
    );

    return (
        <div>
            <AnimeHeader/>
            <div style={{padding: 20}}>
                <Card>
                    <Row>
                        {
                            animeSearchList.map((item, index) => {
                                return (
                                    <Col span={24} className={styles.animeCol} key={item.id}>
                                        <span>{item.title}:</span>
                                        <ul className={styles.animeSearch}>
                                            {
                                                item.conditions.map((condition, conditionIndex) => {
                                                    // 使用 conditionIndex 作为每个 condition 的 key
                                                    return <li key={conditionIndex}>{condition}</li>
                                                })
                                            }
                                        </ul>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Card>
                <br/>
                <Card>
                    <Row gutter={40}>
                        {animeList.map((item, index) => (
                            <Col xs={6} sm={6} md={6} lg={4} xl={4} key={`anime-${index}`} style={{marginBottom: 20}}>
                                <Card hoverable cover={<img alt="example" src={item.image}/>}>
                                    <Meta title={item.title} description={item.title}/>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </div>
            <AnimeFooter/>
        </div>
    );
}
