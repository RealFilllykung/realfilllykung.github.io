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
import EarlyDaysMessage from './EarlyDays.json';

function EarlyDays(){
    const styles = useSpring({
        loop: false,
        from: {x:1000, y:0},
        to: {x:0,y:0}
    })

    const styles2 = useSpring({
        loop: false,
        from: {x:-1000, y:0},
        to: {x:0,y:0}
    })

    return (
        <div>
            <Container className="mt-5 text-white d-none d-lg-block">
                <Row>
                    <Col xs={6}>
                        <animated.p style={{...styles2}}>Image coming soon</animated.p>
                        
                    </Col>
                    <Col xs={6}>
                        <animated.div style={{...styles}}>
                            <h1 style={{...styles}}>{EarlyDaysMessage.header}</h1>
                            <p style={{...styles}}>{EarlyDaysMessage.message}</p>
                        </animated.div>
                        
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 text-white d-lg-none">
                <Row>
                    <Col>
                        <animated.div style={{...styles}}>
                                <h1 style={{...styles}}>{EarlyDaysMessage.header}</h1>
                                <p style={{...styles}}>{EarlyDaysMessage.message}</p>
                        </animated.div>
                    </Col>
                </Row>
            </Container>

        </div>  
    )
}

export default EarlyDays;
