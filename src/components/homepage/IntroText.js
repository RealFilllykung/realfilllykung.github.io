//CSS import
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/components/homepage/IntroText.css'

//Component import
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typical from 'react-typical'

class IntroText extends React.Component {
    render(){
        return (
            <Container>

                <Row className="justify-content-md-center">
                    <Col>
                        <p class="text-light">
                        Greetings everyone! I'm...
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <p class="text-light">
                        <h1 class="big-font">Tharathep Klinla-or</h1>
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <p class="text-light medium-font">
                            aka Filllykung
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <p class="text-light">
                        I'm a
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                ' Youtuber', 2000,
                                ' Undergrad Computer Engineer', 2000
                            ]}
                        >
                        </Typical>
                        </p>
                    </Col>
                </Row>
          
            </Container>
          )
    }
}

export default IntroText;
