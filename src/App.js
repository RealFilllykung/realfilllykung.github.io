import AppBar from './components/app/AppBar'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar></AppBar>
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Homepage></Homepage>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/projects">
              <Projects></Projects>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
