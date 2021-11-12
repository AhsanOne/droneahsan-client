import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from './Pages/Login/Register/Register';
import Placeorder from "./Pages/Placeorder/Placeorder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
          </Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/allproducts">
            <AllProducts/>
          </Route>
          <PrivateRoute exact path="/placeorder/:id">
            <Placeorder/>
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
