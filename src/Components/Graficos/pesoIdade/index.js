import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { getIdPatient } from '../../../Services/auth';
import http from '../../../Services/httpRequest';
const PesoIdade = () => {

  // const data = [
  //   ['idade', 'peso'],
  //   ['2', 4.4],
  //   ['4', 5.2],
  //   ['6', 5.2],
  //   ['8', 5.8],
  //   ['10', 5.9],
  // ];

  const [data, setgrafico] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await http.get(`/graphidadepeso/${getIdPatient()}`);
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
          title: 'Gráfico de Peso para Idade de 0 a 2 Anos',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Idade(meses e anos completos)',
            minValue: 0,
          },
          vAxis: {
            title: 'Peso(kg)',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )

}



export default PesoIdade;