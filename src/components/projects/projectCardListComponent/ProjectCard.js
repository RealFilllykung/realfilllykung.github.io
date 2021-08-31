import { Card, Container, Row, Col, Button } from 'react-bootstrap'

function ProjectCard(props) {
    return (
      <div className="Projects">
          <Container>
            <Row className="mt-5">
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.imageLink} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                            {props.description}
                            </Card.Text>
                        <Button variant="primary">Explore project</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Container>
      </div>
    );
}

export default ProjectCard;