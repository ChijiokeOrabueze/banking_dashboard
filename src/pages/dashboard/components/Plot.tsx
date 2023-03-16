import styled from "styled-components";
import Chart from "react-apexcharts";
import { useState } from "react";

const Container = styled.div`
    margin-left: -15px;

    .tool-tip-box {
        width: 73.12px;
        height: 43.88px;
        background-color: #141736;
        border-radius: 8.775px;
        padding: 7px;

    }

    .tool-tip-bar {
        display: flex;
        align-items: center;
        gap: 7px;

        span {
            font-family: 'Gilroy-Medium';
            font-size: 9.50625px;
            line-height: 11px;
            color: #868799;
        }
    }

    .tool-tip-value {
        font-family: 'Gilroy-Bold';
        font-size: 10.9688px;
        line-height: 13px;

        color: #FFFFFF;
    }


`




const Plot = () => {

    const [values, setValues] = useState({
        options: {
          chart: {
            id: "basic-bar",
            toolbar: {
                show: false
            }
          },
          xaxis: {
            categories: ["Dec 2", "Dec 3", "Dec 4", "Dec 5", "Dec 6", "Dec 7", "Dec 8", "Dec 9"],
            labels: {
                style: {
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: "9px",
                    lineHeight: "9px",
                    color: "#A5B4CB",
                }
            },
            axisTicks: {
                show: false
            }
            
          },
          yaxis: {
            min: 0,
            range: 10000,
            tickAmount: 5,
            // offsetY: 100,
            labels: {
                formatter: function (value:number) {
                    if (value >= 1000) {
                        return `${Math.round((value/1000) * 10) / 10}k`
                    }
                    return value.toString();
                },
                style: {
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: "10px",
                    lineHeight: "9px",
                    color: "#A5B4CB",
                },
                // offsetY: -10,
                
            },
            
            
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 1.5,
            dashArray: 0,      
          },
          tooltip: {
            custom: function({series, seriesIndex, dataPointIndex, w}:any) {
              return `<div class="tool-tip-box">
                            <div class="tool-tip-bar">
                                <img src="/assets/dashboard/download.svg" alt="" />
                                <span>income</span>
                            </div>
                            <span class="tool-tip-value">$ ${series[seriesIndex][dataPointIndex]}</span> 
                    </div>`
            }
          },
          grid: {
            strokeDashArray: 5,
            position: "back" as "back"
        }
          
        },
        series: [
          {
            name: "income",
            data: [5000, 10000, 5000, 30000, 25000, 40000, 50000, 10000],
          }
        ]
      })


    return (
        <Container>
            <Chart
              options={values.options}
              series={values.series}
              type="area"
              width="380"
              height="200"
            />

        </Container>

    )
}


export default Plot;