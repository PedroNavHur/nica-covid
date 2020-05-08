import React from "react";
import { Card } from "antd";
import { ViralMapChart, ViralBarChart } from "./ViralCharts";

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

var sortedOfficial = OfficialData;
sortedOfficial.shift().sort((a,b) => b[1] - a[1]);
sortedOfficial.unshift(["", "Casos"]);


var sortedUnofficial = UnofficialData;
sortedUnofficial.shift().sort((a,b) => b[1] - a[1]);
sortedUnofficial.unshift(["", "Casos"]);

const tabListInfo = {
  official: (
    <>
      <ViralMapChart mapData={OfficialData} />
      <ViralBarChart barData={sortedOfficial} />
    </>
  ),
  stimate: (
    <>
      <ViralMapChart mapData={UnofficialData} />
      <ViralBarChart barData={sortedUnofficial} />
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
