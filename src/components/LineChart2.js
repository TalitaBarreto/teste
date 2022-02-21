import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


const LineChart2 = () =>{
    return <div>
        <Line
            data={{
                labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dev', 'Jan', 'Fev'],
                datasets:[
                    {
                        label: 'Valor da Venda 2021/2022',
                        data: [1827.36, 2021.91, 2062.52, 2353.50, 2356.80, 2441.80, 2694.53, 2893.95, 2673.52, 2960.92, 2837.95, 2897.04, 2706.07, 2608.06],
                        backgroundColor: '#9c0000'
                    }
                ]
            }}
            height={200}
            width={300} 
            options={{
                maintainAspectRatio:false,
            }}
        />
    </div>
}

export default LineChart2