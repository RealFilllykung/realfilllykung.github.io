import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectClassList from '../components/projects/ProjectCardList'
import { Container } from 'react-bootstrap'

function Projects() {
  return (
    <div className="Projects">
      <ProjectClassList></ProjectClassList>
    </div>
  );
}

export default Projects;
