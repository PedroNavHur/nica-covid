import React from "react";
import { Card } from "antd";
import { ViralMapChart } from "./ViralMapChart";

import UnofficialData from "./data/UnofficialData.json";
import OfficialData from "./data/OfficialData.json";

const tabListNoTitle = [
  {
    key: "official",
    tab: "Cifras Oficiales",
  },
  {
    key: "stimate",
    tab: "Cifras No Oficiales",
  },
];

const contentListNoTitle = {
  official: <ViralMapChart mapData={OfficialData} />,
  stimate: <ViralMapChart mapData={UnofficialData} />,
};

export class TabsCard extends React.Component {
  state = {
    key: "official",
    noTitleKey: "official",
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
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => {
            this.onTabChange(key, "noTitleKey");
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}
