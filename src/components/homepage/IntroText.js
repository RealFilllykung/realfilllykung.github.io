//CSS import
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/components/homepage/IntroText.css'

//Component import
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Greetings from './IntroTextComponent/Greetings'
import NameIntro from './IntroTextComponent/NameIntro'
import Aka from './IntroTextComponent/Aka'
import TypicalText from './IntroTextComponent/TypicalText'

class IntroText extends React.Component {

    render(){

        return (
            <Container>

                <Row className="justify-content-md-center">
                    <Col>
                        <Greetings/>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <NameIntro/>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <Aka/>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <TypicalText/>
                    </Col>
                </Row>
          
            </Container>
          )
    }
}

export default IntroText;
