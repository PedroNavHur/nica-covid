import React from "react";
import { Layout, Space, Row, Col, Typography } from "antd";
import { ViralCard } from "./components/ViralCard.js";

import udTime from "./components/data/udTime.json";

import "./App.css";

const { Header, Footer, Content } = Layout;
const { Text } = Typography;

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
              <ViralCard />
            </Col>
          </Row>
        </Content>
        <Footer>
          <Space direction="vertical">
            <h2>Fuentes</h2>
            <Space align="start" direction="vertical">
              <h3>Fuentes Oficiales</h3>
              <Text>
                La informacion de fuentes oficiales proviene directamente de la
                informacion provista por el Ministerio de Salud Nicaraguense
                (MINSA).
                <br />
                <a href="http://www.minsa.gob.ni/">Sitio oficial del MINSA</a>
              </Text>
              <h3>Fuentes No Oficiales</h3>
              <Text>
                La informacion de fuentes no oficiales proviene de los reportes
                semanales provistos por el Observatorio Ciudadano COVID-19.
                <br />
                <a href="https://twitter.com/observatorioni">
                  Observatorio Ciudadano
                </a>
              </Text>
              <h3>
                Ultima Actualizacion: 
                <Text type="warning">{udTime}</Text>
              </h3>
            </Space>
          </Space>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
