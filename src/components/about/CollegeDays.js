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
import CollegeDaysMessage from './CollegeDays.json';

function CollegeDays(){
    const styles = useSpring({
        loop: false,
        from: {x:-1000, y:0},
        to: {x:0,y:0}
    })

    const styles2 = useSpring({
        loop: false,
        from: {x:1000, y:0},
        to: {x:0,y:0}
    })

    return (
        <div>
            <Container className="mt-5 text-white">
                <Row>
                    <Col xs={6}>
                        <animated.div style={{...styles}}>
                            <h1>{CollegeDaysMessage.header}</h1>
                            <p>{CollegeDaysMessage.message}</p>
                        </animated.div>
                    </Col>
                    <Col xs={6}>
                        <animated.p style={{...styles2}}>Image coming soon</animated.p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CollegeDays;
