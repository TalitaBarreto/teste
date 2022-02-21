import React, {useState} from 'react';
import BarChart2 from './BarChart2';
import LineChart2 from './LineChart2';

function Collapse2(){

    const [isOpen, setIsOpen] = useState(false);   

    return <div className='collapsible'>

        <a className='btnGoogle' onClick={() => setIsOpen(!isOpen)}>Google</a>
        {isOpen && <div className='content'>
         <BarChart2/>
         <LineChart2/>
        </div>}

    </div>
}

export default Collapse2;