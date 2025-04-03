import React from 'react';
import { Col, Divider, Flex, Layout, Row, Space } from 'antd';
import UserMenu from '../components/user-manu';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#000',
    height: 'fit-content',
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#e226',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 520,
    lineHeight: '120px',
    color: '#000',
    backgroundColor: '#fff',
};


const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#e226',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};


export default function MainLayout({ children }: any) {
    return (<>
        <Row>
            <Col span={24}>
                <Flex gap="middle" justify="center" wrap>
                    <Layout style={layoutStyle}>
                        <Header style={headerStyle}>
                            <Row justify={'center'} align={'middle'}>
                                <Col span={8}>
                                    <Divider orientation="left">
                                        K.G.E.
                                    </Divider>
                                </Col>
                                <Col span={8}>
                                    <Divider orientation="center">
                                        Notes Manager
                                    </Divider>
                                </Col>
                                <Col span={8}>
                                    <Divider orientation="right">
                                        <UserMenu></UserMenu>
                                    </Divider>
                                </Col>
                            </Row>
                        </Header>
                        <Content style={contentStyle}>
                            <Space direction="vertical" size={16}>
                                {children}
                            </Space>
                        </Content>
                        <Footer style={footerStyle}>Copyright@2025</Footer>
                    </Layout>
                </Flex>
            </Col>
        </Row>
    </>
    )
}