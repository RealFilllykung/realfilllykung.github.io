//CSS import
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/components/homepage/IntroText.css'

//Component import
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSpring, animated } from 'react-spring'

//Message JSON
import NowadaysMessage from './Nowadays.json';

function Nowadays(){
    const styles = useSpring({
        loop: false,
        from: {x:0, y:1000},
        to: {x:0,y:0}
    })

    return (
        <animated.div style={{...styles}}>
            <Container className="mt-5 text-white d-none d-lg-block">
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
        </animated.div>
    )
}

export default Nowadays;
