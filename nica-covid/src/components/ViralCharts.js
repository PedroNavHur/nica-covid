import React from "react";
import { Chart } from "react-google-charts";

export class ViralMapChart extends React.Component {
  render() {
    return (
      <div>
        <Chart
          className={"mapChart"}
          chartType="GeoChart"
          data={this.props.mapData}
          options={{
            region: "NI", // Nicaragua
            colorAxis: { colors: ["#fce9eb", "#c53745"] },
            backgroundColor: "#fff",
            datalessRegionColor: "#fff",
            defaultColor: "#fff",
            displayMode: "regions",
            resolution: "provinces",
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          //mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}

export class ViralBarChart extends React.Component {
  render() {
    return (
      <div>
        <Chart

          className={"barChart"}
          chartType="Bar"
          data={this.props.barData}
          options={{
            colors: ["#c53745"],
            hAxis: {
              title: "Casos Totales",
              minValue: 0,
            },
            bars: "horizontal",
            legend: {position: 'none'}
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}
