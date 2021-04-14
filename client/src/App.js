
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App"> 
    <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
