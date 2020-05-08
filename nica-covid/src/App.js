import React from "react";
import { Layout, Space, Row, Col, PageHeader } from "antd";
import { ViralCard } from "./components/ViralCard.js";
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
            <Col xs={24} sm={22} md={19} lg={17}>
              <ViralCard/>
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
