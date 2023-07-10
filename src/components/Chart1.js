import React, { Component } from "react";
import Chart from "react-apexcharts";
var r = document.querySelector(':root'); // for inheriting color from app.css
class Chart1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                },
                colors: [getComputedStyle(r).getPropertyValue('--color-primary')]
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        };
    }

    render() {
        return (
            <div className="chart-container">
                <div className="mixed-chart">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                    />
                </div>
            </div>
        );
    }
}

export default Chart1;