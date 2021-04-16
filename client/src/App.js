
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import Offenseplaybook from './pages/Offenseplaybook';
import DepthChart from './pages/DepthChart';


function App() {
  return (
    <div className="App"> 
    <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/offensePlaybook">
            <Offenseplaybook />
          </Route>
          <Route path="/DepthChart">
            <DepthChart />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
