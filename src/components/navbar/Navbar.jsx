import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse } from "mdbreact";
import styled from 'styled-components';

const StyledMDBNavbar = styled(MDBNavbar)`
  .btn-floating {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    position: relative;
    margin: 0.5em;
    vertical-align: middle;
    box-shadow:  2px 5px 10px rgba(0, 0, 0, 0.3);
  }

  .btn-floating:hover {
    transform: scale(1.1);
    transition: all 0.1s;
  }

  .btn-floating,button:focus {
    outline: none;
  }

  .btn-floating i {
    font-size: 1.3em;
    line-height: 40px;
    color: white;
  }

  .linkedin {
    background-color: #0073b1;
  }

  .github {
    background-color: #24292e;
  }

  .envelope {
    background-color: #a8372e;
  }

  .file-alt {
    background-color: #f4db7f;
  }

  .navbar-nav {
    flex-direction: row;
  }
`;

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
  ]

  state = {
    activePage: "/"
  }

componentDidMount() {
  this.setState({activePage: this.props.location.pathname});
  const quote = `"To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge." - Grace Hopper`;
  console.log(`%c ${quote}`, 'background: #0073b1; color: white; display: block;');
}

UNSAFE_componentWillReceiveProps(props) {
  this.setState({activePage: props.location.pathname});
}

render() {
  return (
      <StyledMDBNavbar color="default-color" dark expand="md">
        <MDBCollapse navbar>
          <strong className="white-text">Rose Lin | Software Engineer </strong>
        </MDBCollapse>
        <MDBNavbarNav left>
          <button className="btn-floating linkedin">
            <a href="https://www.linkedin.com/in/roseswe/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
          </button>
          <button className="btn-floating github">
            <a href="https://github.com/R-SE" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
          </button>
          <button className="btn-floating envelope">
            <a href = "mailto: rose.lin.swe@gmail.com"><i className="fa fa-envelope" /></a>
          </button>
        </MDBNavbarNav>
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav right>
          {NavbarPage.ROUTES.map(({page, text}) => (
            <MDBNavItem key={text} active={this.state.activePage === page}>
              <MDBNavLink to={page}>{text}</MDBNavLink>
            </MDBNavItem>
          ))}
          <MDBNavItem><a className="nav-link Ripple-parent" href="/Rose_Lin_Resume_Software_Engineer.pdf" download>RESUME</a></MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </StyledMDBNavbar>
    );
  }
}

export default withRouter(NavbarPage);
