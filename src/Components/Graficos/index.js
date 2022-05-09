import React, { Component } from "react";
import Chart from "react-google-charts";


const Grafico = () => {

  const data = [
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ];
   

  return (
    <div className="container mt-5">
      <h2>React Basic Bar Chart with Multiple Series</h2>

      <Chart
        width={'700px'}
        height={'320px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: 'Population of Largest U.S. Cities',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Total Population',
            minValue: 0,
          },
          vAxis: {
            title: 'City',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )

}



export default Grafico;