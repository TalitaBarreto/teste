import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


const BarChart1 = () =>{
    return <div>
        <Bar
            data={{
                labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dev', 'Jan', 'Fev'],
                datasets:[
                    {
                        label: 'Valor da Venda 2021/2022',
                        data: [258.33, 257.62, 294.53, 325.08, 328.73, 347.71, 356.30, 379.38, 339.39, 323.57, 324.46, 336.35, 313.26, 206.16],
                        backgroundColor: '#191970'
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

export default BarChart1