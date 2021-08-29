import AppBar from './components/app/AppBar'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <AppBar></AppBar>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Homepage}>
            </Route>

            <Route exact path="/about" component={About}>
            </Route>

            <Route exact path="/projects" component={Projects}>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
