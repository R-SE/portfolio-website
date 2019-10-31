import React from 'react';
import './App.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Background from "./components/background/Background";
import NavbarPage from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
    <MDBContainer fluid>
      <Background />
      <NavbarPage />
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
