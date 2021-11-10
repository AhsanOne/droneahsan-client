import { Button } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Drone Ahsan...</h1>
      <Router>
        <Switch>
          <Route path="/testrouter">
            <Link to="/"><Button variant="contained">I am mui btn</Button></Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
