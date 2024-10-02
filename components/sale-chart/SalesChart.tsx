'use client'
import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, scales } from 'chart.js'
import { color } from '../colors'

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)
interface SalesChartProps {
    saleData : Number[]
}
const SalesChart : React.FC <SalesChartProps> = ({saleData}) => {
    const data = {
        labels : Array.from({ length: saleData.length }, (_, i) =>i + 1),
        datasets : [{
            lable: "مقدار فروش",
            data : saleData,
            backgroundColor: '#DB2777',
            fill: true,
            }
        ]
    }
    const option = {
        responsive: true,
        plugins: {
            Legend: {
                position: 'top' as const
            },
            title: {
                display: true,
                text: "نمودار فروش روزانه"
            },
            scales : {
                x: {
                    title: {
                        display: true,
                        text: "روز"
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: " فروش"
                    },
                    beginAtZero: true
                }
            }
        }
    }
  return (
    <Bar data={data} options={option}/>
  )
}
export default SalesChart

