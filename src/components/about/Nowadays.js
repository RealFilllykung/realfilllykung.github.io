//CSS import
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/components/homepage/IntroText.css'

//Component import
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Message JSON
import NowadaysMessage from './Nowadays.json';

class Nowadays extends React.Component {

    render(){
        return (
            <div>
                <Container className="mt-5 text-white">
                    <Row>
                        <Col xs={6}>
                            Image coming soon
                        </Col>
                        <Col xs={6}>
                            <h1>{NowadaysMessage.header}</h1>
                            <p>{NowadaysMessage.message}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
          )
    }
}

export default Nowadays;
