import './App.css';
import Create from './components/create';
import CreateCard from './components/createCard';
import InfoCard from './components/InfoCard';
import Wo from './components/wo';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBIcon
} from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Divider } from '@mui/material';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header>
        <MDBNavbar expand='lg' light bgColor='white'>
          <MDBContainer fluid>
            <div  id='navbarExample01'>
              <MDBNavbarNav right className='mb-2 mb-sm-0'>
                <MDBNavbarItem active>
                  <MDBNavbarLink aria-current='page' href='/'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBNavbar>
        <div className='p-5 text-center bg-light'>
          <h1 className='mb-3'>Jan wird 30</h1>
          <h4 className='mb-3'>das Fest</h4>
          <Divider />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/anmelden">
              <Create />
            </Route>
            <Route path="/wo">
              <Wo />
            </Route>
            <Route path="/wie">
              <Wie />
            </Route>
            <Route path="/wann">
              <Wann />
            </Route>
            <Route path="/close">
              <Wo />
            </Route>
          </Switch>
        </div>
      </header>
    </Router>

  );
}

function Home() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="d-flex justify-content-center">
          <CreateCard />
        </MDBCol>
        <MDBCol className="d-flex p-2 justify-content-center">
          <InfoCard />
        </MDBCol>
      </MDBRow>
    </MDBContainer>

  );
}


function Wie() {
  return (
    <div>
      <h2>Wie</h2>
    </div>
  );
}

function Wann() {
  return (
    <div>
      <h2>Wann</h2>
    </div>
  );
}

export default App;
