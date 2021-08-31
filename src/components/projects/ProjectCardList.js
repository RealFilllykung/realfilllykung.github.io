import ProjectCard from './projectCardListComponent/ProjectCard'
import ProjectCardJson from './projectCardListComponent/ProjectCardItem.json'
import { Row, Col, Container } from 'react-bootstrap'

function ProjectCardList(){

    function ConstructProjectCard(props){
        const projectCard = ProjectCardJson[props.num]
        return(
            <ProjectCard
                name={projectCard.name}
                description={projectCard.description}
                imageLink={projectCard.imageLink}
            >
            </ProjectCard>
        )
    }

    function ConstructProjectCardRow(){
        const ProjectCardArray = ProjectCardJson.map((item, index) => {
            return(
                <Col xs={4}>
                    <ConstructProjectCard num={index}></ConstructProjectCard>
                </Col>
            )
        })
        
        return(
            <Row>
                {ProjectCardArray}
            </Row>
        )
    }

    return(
        <div className="ProjectCardList">
            <Container>
                <ConstructProjectCardRow></ConstructProjectCardRow>
            </Container>
        </div>
    )
}

export default ProjectCardList