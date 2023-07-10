import React, { Component } from "react";
import Chart from "react-apexcharts";
import '../styles/charts.css'
import fetcher from "../fetcher";
var r = document.querySelector(':root'); // for inheriting color from app.css

class Chart2 extends Component {
    constructor(props) {
        super(props);
        this.updateCharts = this.updateCharts.bind(this);
        this.state = {
            options: {
                chart: {
                    id: "line"
                },
                xaxis: {
                    categories: [1896, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
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

    async updateCharts() {
        const newSeries = [];
        
        

        const url = new URL('http://www.randomnumberapi.com/api/v1.0/random?min=0&max=100&count=8')
        

        const res = await fetch(url, {
            method: 'GET',
            //headers: { 'content-type': 'application/json' }
        })
        const newdata = await res.json()
        // const newdata = await fetcher(url, 'GET', [], {})
        console.log(newdata)

        newSeries.push({name:"series-1",data:newdata})

        this.setState({
            series: newSeries,
            
          })
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
                <div className="chartButton">
                <button className="btn btn-primary"onClick={this.updateCharts}>Update!</button>
                </div>
            </div>


        );
    }
}

export default Chart2;