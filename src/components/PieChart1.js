import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


const PieChart1 = () =>{
    return <div>
       
        <Pie
            data={{
                labels:['Facebook', 'Google', 'Petrobras'],
                datasets:[
                    {
                        label: 'Valor Atual',
                        data: [206.16, 2608.06, 33.00],
                        backgroundColor:[ '#191970', '#9c0000', '#008542']
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

export default PieChart1