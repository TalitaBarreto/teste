import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Collapse1 from './CollapseFacebook';
import Collapse2 from './CollapseGoogle';
import Collapse3 from './CollapsePetrobras';
import PieChart1 from './PieChart1'


class Article extends React.Component {    

    render() {

        return (
           
            <div className='main'>

                <Container>
                    <Row>

                        <div className='titleRendimento'>
                            <h2>Comparação de Bolsa de Valores</h2>
                        </div>
                       
                    </Row>
                </Container>
                <Container> 
                    <Row>
                        <Col>
                            <PieChart1/>
                        </Col>
                    </Row> 
                </Container>
                <Container>
                    <Row>

                        <div className='titleRendimento'>
                            <h2>Evolução de Rendimento</h2>
                        </div>
                       
                    </Row>
                </Container>
                <Container>                   

                    <Row>
                        <Col>
                            <Collapse1/>
                        </Col>
                        <Col>
                            <Collapse2/>
                        </Col>
                        <Col>
                            <Collapse3/>
                        </Col>
                    </Row>                    

                </Container>
               
            </div>

        )
    }
}

export default Article;