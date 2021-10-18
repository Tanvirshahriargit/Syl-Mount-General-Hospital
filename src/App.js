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
            <Route path="/moreinformation/:serviceId">
              <ModeInformation></ModeInformation>
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
