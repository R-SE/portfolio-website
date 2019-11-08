import React from 'react';
import { MDBContainer } from "mdbreact";
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// TODO: Add code-splitting.
import Background from "./components/background/Background";
import NavbarPage from './components/navbar/Navbar';
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/SkillsPage";

// Global Overrides for Material Bootstrap 
const MDBOverrides = createGlobalStyle`
  body {
    text-align: center;
  }

  .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }

  .default-color {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }

  .nav-link {
    text-transform: uppercase;
  }

  .draggable-skill {
    background-color: #0073b1;
    border: 1px solid white;
  }

  .card {
    max-width: 324px;
  }
`

const Animations = createGlobalStyle`
  @keyframes bounce {
    30% { transform: translate(0, 20px) }
    80% { transform: translate(0, 0px) }
  }
`;

const App = () => (
  <MDBContainer fluid>
    <MDBOverrides />
    <Animations />
    <Background />
    <Router>
      <NavbarPage />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={Experience} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </Router>
  </MDBContainer>

);

export default App;
