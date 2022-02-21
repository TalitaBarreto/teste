import React, {useState} from 'react';
import BarChart3 from './BarChart3';
import LineChart3 from './LineChart3';

function Collapse3(){

    const [isOpen, setIsOpen] = useState(false);   

    return <div className='collapsible'>

        <a className='btnPetrobras' onClick={() => setIsOpen(!isOpen)}>Petrobras</a>
        {isOpen && <div className='content'>
         <BarChart3/>
         <LineChart3/>
        </div>}

    </div>
}

export default Collapse3;