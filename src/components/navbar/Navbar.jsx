import React, { Component, Fragment } from "react";
import { boundMethod } from 'autobind-decorator';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse } from "mdbreact";

import Home from "../home/Home";

class NavbarPage extends Component {
  static ROUTES = [
    {
      page: "/",
      text: "about"
    },
    {
      page: "/jobs",
      text: "experience"
    },
    {
      page: "/skills",
      text: "skills"
    },
    {
      page: "/contact",
      text: "contact"
    },
  ]

  state = {
    activePage: "/"
  }

componentDidMount() {
  this.setState({activePage: this.props.location.pathname});
}

componentWillReceiveProps(props) {
  this.setState({activePage: props.location.pathname});
}

render() {
  return (
    <Fragment>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Rose Lin | Software Engineer </strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav right>
          {NavbarPage.ROUTES.map(({page, text}) => (
            <MDBNavItem key={text} active={this.state.activePage === page}>
              <MDBNavLink to={page}>{text}</MDBNavLink>
            </MDBNavItem>
          ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/jobs" component={() => <h1>EXPERIENCE</h1>} />
       <Route exact path="/skills" component={() => <h1>SKILLS</h1>} />
       <Route exact path="/contact" component={() => <h1>CONTACT</h1>} />
      </Switch>
     </Fragment>
    );
  }
}

export default withRouter(NavbarPage);