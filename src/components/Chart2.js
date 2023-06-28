import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "line"
                },
                xaxis: {
                    categories: [1896, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
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
                        type="line"
                        width='500'

                    />
                </div>
            </div>


        );
    }
}

export default Chart2;