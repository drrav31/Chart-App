import ReactEcharts from "echarts-for-react";

// Malic acid values for Alcohol class 1
let malicAcid1:number[] = [
  1.71, 1.78, 2.36, 1.95, 2.59, 1.76, 1.87, 2.15, 1.64, 1.35, 2.16, 1.48, 1.73,
  1.73, 1.87, 1.81, 1.92, 1.57, 1.59, 3.1, 1.63, 3.8, 1.86, 1.6, 1.81, 2.05,
  1.77, 1.72, 1.9, 1.68, 1.5, 1.66, 1.83, 1.53, 1.8, 1.81, 1.64, 1.65, 1.5,
  3.99, 1.71, 3.84, 1.89, 3.98, 1.77, 4.04, 3.59, 1.68, 2.02, 1.73, 1.73, 1.65,
  1.75, 1.9, 1.67, 1.73, 1.7, 1.97, 1.43,
];

// Malic acid values for Alcohol class 2
let malicAcid2:number[] = [
  0.94, 1.1, 1.36, 1.25, 1.13, 1.45, 1.21, 1.01, 1.17, 0.94, 1.19, 1.61, 1.51,
  1.66, 1.67, 1.09, 1.88, 0.9, 2.89, 0.99, 3.87, 0.92, 1.81, 1.13, 3.86, 0.89,
  0.98, 1.61, 1.67, 2.06, 1.33, 1.83, 1.51, 1.53, 2.83, 1.99, 1.52, 2.12, 1.41,
  1.07, 3.17, 2.08, 1.34, 2.45, 1.72, 1.73, 2.55, 1.73, 1.75, 1.29, 1.35, 3.74,
  2.43, 2.68, 0.74, 1.39, 1.51, 1.47, 1.61, 3.43, 3.43, 2.4, 2.05, 4.43, 5.8,
  4.31, 2.16, 1.53, 2.13, 1.63, 4.3,
];

// Malic acid values for Alcohol class 3
let malicAcid3:number[] = [
  1.35, 2.99, 2.31, 3.55, 1.24, 2.46, 4.72, 5.51, 3.59, 2.96, 2.81, 2.56, 3.17,
  4.95, 3.88, 3.57, 5.04, 4.61, 3.24, 3.9, 3.12, 2.67, 1.9, 3.3, 1.29, 5.19,
  4.12, 3.03, 1.68, 1.67, 3.83, 3.26, 3.27, 3.45, 2.76, 4.36, 3.7, 3.37, 2.58,
  4.6, 3.03, 2.39, 2.51, 5.65, 3.91, 4.28, 2.59, 4.1,
];

// Calculating average malic acid values
function calculateAvgMalicAcid(arr: number[]){
    return arr.reduce((sum, val) => {return sum + val},0)/arr.length
}

// avg malic acid for class 1
let avgMalicAcid1:number = calculateAvgMalicAcid(malicAcid1)

// avg malic acid for class 2
let avgMalicAcid2:number = calculateAvgMalicAcid(malicAcid2)

// avg malic acid for class 3
let avgMalicAcid3:number = calculateAvgMalicAcid(malicAcid3)


const BarChart = () => {
    //plot the bar chart
    const option = {
        xAxis: {
          type: 'category',
          data: ['Class 1', 'Class 2', 'Class 3'],
          name:"Alcohol Category",
          nameLocation:"center",
          nameGap:"30"
        },
        yAxis: {
          type: 'value',
          name:'Avg. Malic Acid',
          nameLocation:'center',
          nameGap:'30' 
        },
        series: [
          {
            data: [avgMalicAcid1, avgMalicAcid2, avgMalicAcid3],
            type: 'bar'
          }
        ],
        textStyle: {fontWeight:"bold", fontSize:"13", fontFamily:"Sans-serif" },
        grid: [{left:"15%", right:"30px", top:"30px"}]
      };
  return <ReactEcharts option={option}/>;
};

export default BarChart;
