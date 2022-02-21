import React, {useState} from 'react';
import BarChart1 from './BarChart1';
import LineChart1 from './LineChart1';
import PieChart1 from './PieChart1';

function Collapse1(){

    const [isOpen, setIsOpen] = useState(false);   

    return <div className='collapsible'>

        <a className='btnFacebook' onClick={() => setIsOpen(!isOpen)}>Facebook</a>
        {isOpen && <div className='content'>
         <BarChart1/>
         <LineChart1/>        
        </div>}

    </div>
}

export default Collapse1;