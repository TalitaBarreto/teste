import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


const BarChart3 = () =>{
    return <div>
        <Bar
            data={{
                labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dev', 'Jan', 'Fev'],
                datasets:[
                    {
                        label: 'Valor da Venda 2021/2022',
                        data: [26.69, 22.24, 24.10, 23.62, 26.87, 29.43, 26.91, 27.19, 27.23, 27.25, 29.43, 28.45, 32.35, 33.00],
                        backgroundColor: '#008542'
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

export default BarChart3