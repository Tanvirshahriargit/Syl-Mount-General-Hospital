import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import Header from "./component/Home/Header/Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import Services from './component/Home/Services/Services';
import ModeInformation from './component/ModeInformation/ModeInformation';
import LogIn from './component/Login/LogIn/LogIn';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './component/Login/PrivetRoute/PrivetRoute';
import Specialist from './component/Home/Specialist/Specialist';
import Register from './component/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivetRoute path="/moreinformation/:serviceId">
              <ModeInformation></ModeInformation>
            </PrivetRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/specialist">
              <Specialist></Specialist>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
