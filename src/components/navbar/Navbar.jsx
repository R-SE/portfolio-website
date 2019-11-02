import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse } from "mdbreact";



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
    // {
    //   page: "/contact",
    //   text: "contact"
    // },
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
      <MDBNavbar color="default-color" dark expand="md">
        <MDBCollapse navbar>
          <strong className="white-text">Rose Lin | Software Engineer </strong>
        </MDBCollapse>
        <MDBNavbarNav left>
          <button class="btn-floating linkedin"><i class="fab fa-linkedin"></i></button>
          <button class="btn-floating github"><i class="fab fa-github"></i></button>
          <button class="btn-floating envelope"><i class="fa fa-envelope"></i></button>
          <button class="btn-floating file-alt"><i class="fas fa-file-alt"></i></button>
        </MDBNavbarNav>
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
    );
  }
}

export default withRouter(NavbarPage);