import React from "react";
import { Card } from "antd";
import { ViralMapChart } from "./ViralMapChart";
import { ViralBarChart } from "./ViralBarChart";

import UnofficialData from "./data/UnofficialData.json";
import OfficialData from "./data/OfficialData.json";

const tabListKeys = [
  {
    key: "official",
    tab: "Cifras Oficiales",
  },
  {
    key: "stimate",
    tab: "Cifras No Oficiales",
  },
];

const tabListInfo = {
  official: (
    <>
      <ViralMapChart mapData={OfficialData} />
      <ViralBarChart barData={OfficialData} />
    </>
  ),
  stimate: (
    <>
      <ViralMapChart mapData={UnofficialData} />
      <ViralBarChart barData={UnofficialData} />
    </>
  ),
};

export class ViralCard extends React.Component {
  state = {
    key: "official",
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: "100%" }}
          tabList={tabListKeys}
          activeTabKey={this.state.key}
          onTabChange={(key) => {
            this.onTabChange(key, "key");
          }}
        >
          {tabListInfo[this.state.key]}
        </Card>
      </div>
    );
  }
}
