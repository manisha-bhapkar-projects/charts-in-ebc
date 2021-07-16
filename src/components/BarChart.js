import React from "react";
import { Bar } from "react-chartjs-2";
const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets:[
        {
            label:'Sales For 2019 (M)',
            data:[3, 2, 5, 1, 8],
            borderColor:[
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'

            ],
            backgroundColor:[
                'rgba(35, 102, 202, 0.2)',
                'rgba(35, 102, 202, 0.2)',
                'rgba(35, 102, 202, 0.2)',
                'rgba(35, 102, 202, 0.2)',
                'rgba(35, 102, 202, 0.2)'

            ],
           
        },
        {
            label: 'Sales For 2020 (M)',
            data:[3, 5, 4, 5, 6],
            borderColor:[
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)'

            ],
            backgroundColor:[
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
       


        },
        {
            label:'Sales For 2021 (M)',
            data:[1, 3, 4, 6, 2],
            borderColor:[
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'

            ],
            backgroundColor:[
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'

            ],
           
        },
     
    ]
    }
    const options= {
        title:{
            display: true,
            text: 'Bar Chart'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:6,
                        stepsize:1
                    }
                }
            ]
        }
    }
 
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );

};
export default BarChart;
