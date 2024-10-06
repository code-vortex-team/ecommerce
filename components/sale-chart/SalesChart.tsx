'use client'
import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend } from 'chart.js'
import dayjs from 'dayjs'

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

interface order {
    createdAt : string
}

interface SalesChartProps {
    orders : order[]
}

const SalesChart : React.FC <SalesChartProps> = ({orders}) => {

    const orderCountByDate = orders.reduce<Record<string, number>>((acc, order) => {
        const formattedDate = dayjs(order.createdAt).format('YYYY-MM-DD');
        acc[formattedDate] = (acc[formattedDate] || 0) + 1;
        return acc
    }, {})

    const labels = Object.keys(orderCountByDate)
    const saleData = Object.values(orderCountByDate)

    const data = {
        labels,
        datasets : [{
            label: "مقدار فروش",
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
                    text: "سفارشات"
                },
                beginAtZero: true
            }
        }
    }
  return (
    <Bar data={data} options={option}/>
  )
}
export default SalesChart

