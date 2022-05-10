import React, { Component } from "react";
import Chart from "react-google-charts";


const Imc = () => {

  const data = [
    ['idade', 'peso'],
    ['2', 3.4],
    ['4', 6.2],
    ['6', 10.2],
    ['8', 11.8],
    ['10', 13.0],
  ];

  return (
    <div className="container mt-5">
      <Chart
        width={'700px'}
        height={'320px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          pointSize: 5,
          lineWidth: 0,
          title: 'Gráfico de IMC para Idade de 0 a 2 Anos',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Idade(meses e anos completos)',
            minValue: 0,
          },
          vAxis: {
            title: 'IMC (kg/m)',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )

}



export default Imc;