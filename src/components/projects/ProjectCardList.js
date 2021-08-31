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

    function ConstructProjectCardRowDesktop(){
        const ProjectCardArray = ProjectCardJson.map((item, index) => {
            return(
                <Col xs={4} className="d-none d-lg-block">
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

    function ConstructProjectCardRowMobile(){
        const ProjectCardArray = ProjectCardJson.map((item, index) => {
            return(
                <Col className="d-lg-none">
                    <ConstructProjectCard num={index}></ConstructProjectCard>
                </Col>
            )
        })
        
        return(
            <Row className="justify-content-md-center">
                {ProjectCardArray}
            </Row>
        )
    }

    return(
        <div className="ProjectCardList">
            <Container>
                <ConstructProjectCardRowDesktop></ConstructProjectCardRowDesktop>
                <ConstructProjectCardRowMobile></ConstructProjectCardRowMobile>
            </Container>
        </div>
    )
}

export default ProjectCardList