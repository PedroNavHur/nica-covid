import React from "react";
import { Chart } from "react-google-charts";

export class ViralBarChart extends React.Component {
  render() {
    return (
      <div>
        <Chart
          className={"mapChart"}
          chartType="BarChart"
          data={this.props.barData}
          options={{
            title: 'Distribucion por departamento',
            hAxis: {
                title: 'Casos Totales',
                minValue: 0
            },
            vAxis: {
                title: 'Departamento'
            }
          }}

          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}
