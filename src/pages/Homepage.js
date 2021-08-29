import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage/homepage.css'
import IntroText from '../components/homepage/IntroText'
import React from 'react';

class Homepage extends React.Component {
  render(){
    return (
      <div className="d-flex align-items-center fullvHeight">
        <IntroText></IntroText>
      </div>
    )
  }
}

export default Homepage;
