import 'bootstrap/dist/css/bootstrap.min.css';
import EarlyDays from '../components/about/EarlyDays'
import CollegeDays from '../components/about/CollegeDays'
import Nowadays from '../components/about/Nowadays'

function About() {
  return (
    <div className="About">
      <div className="About-Large"></div>
        <EarlyDays></EarlyDays>
        <CollegeDays></CollegeDays>
        <Nowadays></Nowadays>
    </div>
  );
}

export default About;
