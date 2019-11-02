import React from 'react';
import './App.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Background from "./components/background/Background";
import NavbarPage from './components/navbar/Navbar';
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <MDBContainer fluid>
      <Background />
      <Router>
        <NavbarPage />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={Experience} />
          <Route exact path="/skills" component={() => <h1>SKILLS</h1>} />
        </Switch>
      </Router>
      {/* <MDBRow>
        <MDBCol>One of three columns</MDBCol>
        <MDBCol>One of three columns</MDBCol>
        <MDBCol>One of three columns</MDBCol>
      </MDBRow> */}
    </MDBContainer>
    </div>
  );
}

export default App;
