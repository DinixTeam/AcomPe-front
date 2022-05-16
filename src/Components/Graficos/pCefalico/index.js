import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { getIdPatient } from '../../../Services/auth';
import http from '../../../Services/httpRequest';


const PCefalico = () => {

  // const data = [
  //   ['idade', 'peso'],
  //   ['2', 3.4],
  //   ['4', 6.2],
  //   ['6', 10.2],
  //   ['8', 11.8],
  //   ['10', 13.0],
  // ];

  const [data, setgrafico] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await http.get(`/graphidadeperimetro/${getIdPatient()}`);
      console.log(response.data);
      setgrafico(response.data);
    })();
  }, []);

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
          title: 'Gráfico de Perímetro Cefálico para Idade de 0 a 2 Anos',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Idade(meses e anos completos)',
            minValue: 0,
          },
          vAxis: {
            title: 'Perímetro Cefálifo(cm)',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )

}



export default PCefalico;