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
import About from './component/Home/About/About';
import Contact from './component/Home/Contact/Contact';
import Footer from './component/Footer/Footer';


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
            <PrivetRoute path="/specialist">
              <Specialist></Specialist>
            </PrivetRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivetRoute path="/contact">
              <Contact></Contact>
            </PrivetRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
