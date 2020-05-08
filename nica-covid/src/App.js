import React from "react";
import { Layout, Space, Row, Col } from "antd";
import { TabsCard } from "./components/TabsCard.js";
import "./App.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Space align="center">Covid-19 en Nicaragua</Space>
        </Header>
        <Content>
          <Row justify="center">
            <Col xs={24} sm={22} md={20} lg={18}>
              <TabsCard />
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
