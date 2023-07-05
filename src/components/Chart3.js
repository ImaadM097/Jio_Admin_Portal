import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart3 extends Component {
    constructor(props) {
        super(props);
        this.updateCharts = this.updateCharts.bind(this);
        this.state = {
            series: [44, 55],
            options: {
            
            labels: ['Active', 'Inactive']}
        }
    }

    async updateCharts() {
        const newSeries = [];
        
        

        const url = new URL('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Tenants')
        

        const res = await fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        })
        const newdata = await res.json()
        
        let active = newdata.filter( (obj)=>{
            return obj.status
        })
        let inactive = newdata.filter( (obj)=>{
            return !obj.status
        })

        


        newSeries.push(active.length)
        newSeries.push(inactive.length)
        console.log(newSeries)
        this.setState({
            series: newSeries,
            
          })
    }

    render() {
        return (
            <div className="chart-container">
                
                <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} type="donut" />
                </div>
                <p className="col">
                <button onClick={this.updateCharts}>Update!</button>
                </p>
            </div>
        );
    }
}

export default Chart3;