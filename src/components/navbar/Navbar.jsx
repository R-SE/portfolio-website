import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { boundMethod } from 'autobind-decorator'

import Home from "../home/Home";

class NavbarPage extends Component {
state = {
    activePage: "/"
}

@boundMethod
updateActivePage(path) {
    console.log('dfkjsfklsjdkfsdf', this);
    this.setState({activePage: path});
}

render() {
  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Rose Lin | Software Engineer </strong>
        </MDBNavbarBrand>

        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav right>
            <MDBNavItem active={this.state.active="/"}>
              <MDBNavLink to="/">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="jobs">Experience</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="skills">Skills</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="contact">Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>


      <Switch>
          {/* <h1>{JSON.stringify(window.location.pathname)}</h1> */}
      <Route exact path="/" component={Home} updateActivePage={this.updateActivePage}/>
      <Route exact path="/jobs" render={(props) => <Home {...props} updateActivePage={this.updateActivePage} />} />
          <Route path="/skills">
          <h1>SKILLS</h1>
          </Route>
          <Route path="/contact">
          <h1>CONTACT</h1>
          </Route>

        </Switch>
    </Router>
    );
  }
}

export default NavbarPage;


{/* <MDBIcon fab icon="linkedin" />
<MDBIcon fab icon="github-square" />
<MDBIcon icon="envelope" />
<MDBIcon icon="file" /> */}
