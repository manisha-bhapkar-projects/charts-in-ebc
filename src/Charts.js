import React from 'react';
import { Chart, Interval, Tooltip, Axis, Geom, Line, Point } from "bizcharts";
const Charts = () => 
{
    const data = [
      { year: "1951", sales: 38 },
      { year: "1952", sales: 52 },
      { year: "1956", sales: 61 },
      { year: "1957", sales: 45 },
      { year: "1958", sales: 48 },
      { year: "1959", sales: 38 },
      { year: "1960", sales: 38 },
      { year: "1962", sales: 38 },
    ];


  return (
    <div>
       {/* <Chart height={400} data={data} forceFit>
   <Axis name="temperature" label={{formatter: val => `${val}°C`}} />
   <Line position="month*temperature" size={2} color={'city'} />
   <Point position="month*temperature" size={4} color={'city'} />
 </Chart> */}

      <Chart height={300} autoFit data={data} >
      <Interval position="year*sales"  />
      </Chart>
   
    </div>
  );
};

export default Charts;




























// import { Chart, Interval, Tooltip, Axis, Geom, Line, Point } from "bizcharts";

// function Demo() {
//   const data = [
//     { year: "1951", sales: 38 },
//     { year: "1952", sales: 52 },
//     { year: "1956", sales: 61 },
//     { year: "1957", sales: 45 },
//     { year: "1958", sales: 48 },
//     { year: "1959", sales: 38 },
//     { year: "1960", sales: 38 },
//     { year: "1962", sales: 38 },
//   ];

//   return (
//     // <Chart height={300} autoFit data={data} >
//     // <Interval position="year*sales"  />
//     // </Chart>
   
// <Chart height={400} data={data} forceFit>
//   <Axis name="temperature" label={{formatter: val => `${val}°C`}} />
//   <Line position="month*temperature" size={2} color={'city'} />
//   <Point position="month*temperature" size={4} color={'city'} />
// </Chart>
//   );
// }

// export default Demo;
