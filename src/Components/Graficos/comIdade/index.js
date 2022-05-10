import React, { Component } from "react";
import Chart from "react-google-charts";


const ComIdade = () => {

  const data = [
    ['idade', 'peso'],
    ['2', 6],
    ['4', 7],
    ['6', 8],
    ['8', 10],
    ['10', 12.0],
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
          title: 'Gráfico de Comprimento para Idade de 0 a 2 Anos',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Idade(meses e anos completos)',
            minValue: 0,
          },
          vAxis: {
            title: 'Comprimento (cm)',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )

}



export default ComIdade;