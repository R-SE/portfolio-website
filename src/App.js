import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Background from "./components/background/Background";
import NavbarPage from './components/navbar/Navbar';
import Home from "./components/home/Home";
// TODO: Add code-splitting: https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

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

function App() {
  return (
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
          {/* <Route exact path="/resume" component={Resume} /> */}
        </Switch>
      </Router>
      {/* <MDBRow>
        <MDBCol>One of three columns</MDBCol>
        <MDBCol>One of three columns</MDBCol>
        <MDBCol>One of three columns</MDBCol>
      </MDBRow> */}
    </MDBContainer>
  );
}

export default App;
