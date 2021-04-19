
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import Offenseplaybook from './pages/Offenseplaybook';
import DepthChart from './pages/DepthChart';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute'
import Team from './pages/Team';


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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
