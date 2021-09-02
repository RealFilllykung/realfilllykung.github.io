import { Card, Container, Row, Col, Button } from 'react-bootstrap'

function ProjectCard(props) {

    function clickLink(){
        window.location.href = props.projectLink
    }
    return (
      <div className="Projects">
          <Container>
            <Row className="mt-5">
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={String(props.imageLink)} alt="Loading image..."/>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                            {props.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => clickLink()}>Explore project</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Container>
      </div>
    );
}

export default ProjectCard;