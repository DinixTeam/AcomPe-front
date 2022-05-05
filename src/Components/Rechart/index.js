import React, { useState } from 'react';
// import { Chart } from "react-google-charts";
import {Chart} from "apexcharts";
import { useHistory } from "react-router-dom";

const Rechart = () => {

    const history = useHistory();

    const linkCadastro = () => {
        history.push('/rechart');
    }
    const linkHome = () => {
        history.push('/');
    }

    const options = {
        chart: {
            title: "Box Office Earnings in First Two Weeks of Opening",
            subtitle: "in millions of dollars (USD)",
        },
    };

    // const [options, setOptions] = useState({
    //     title: 'Gráfico de Pizza'
    // })
    
    const [data, setData] = useState([
        ['Linguagens', 'Quantidade'],
        ['React', 100],
        ['Angula', 80],
        ['Vue', 50],
    ])

    // const data = [
        //     [
            //         "Day",
            //         "Guardians of the Galaxy",
            //         "The Avengers",
            //         "Transformers: Age of Extinction",
    //     ],
    //     [1, 37.8, 80.8, 41.8],
    //     [2, 30.9, 69.5, 32.4],
    //     [3, 25.4, 57, 25.7],
    //     [4, 11.7, 18.8, 10.5],
    //     [5, 11.9, 17.6, 10.4],
    //     [6, 8.8, 13.6, 7.7],
    //     [7, 7.6, 12.3, 9.6],
    //     [8, 12.3, 29.2, 10.6],
    //     [9, 16.9, 42.9, 14.8],
    //     [10, 12.8, 30.9, 11.6],
    //     [11, 5.3, 7.9, 4.7],
    //     [12, 6.6, 8.4, 5.2],
    //     [13, 4.8, 6.3, 3.6],
    //     [14, 4.2, 6.2, 3.4],
    // ];


    const series = [
        {
            name: "Guests",
            data: [19, 22, 20, 26]
        }
    ];
    // const options = {
    //     xaxis: {
    //         categories: ["2019-05-01", "2019-05-02", "2019-05-03", "2019-05-04"]
    //     }
    // };

    // return <Chart type="line" series={series} options={options}/>
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="Line"
                        data={data}
                        options={options}
                    />
                </div>
            </header>
        </div>
    );
}




export default Rechart;