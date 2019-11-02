import React from "react";
import { MDBContainer, MDBCardBody, MDBCardTitle } from "mdbreact";
import Testimonials from "../testimonial/Testimonials";

const Experience = () => (
  <MDBContainer className="job-page-container">
    <MDBCardTitle className="h3 card-heading">
      <strong>
        <span className="line">"Helping people everywhere</span>{' '}
        <span className="line">live healthier lives</span>{' '}
        <span className="line">through behavior change"</span>
        </strong>
    </MDBCardTitle>
    <MDBCardBody>
    <MDBCardTitle className="job-position card-heading">
      <span className="line">Software Engineer @ Noom</span>{' '}
      <span className="line">(SEP 2018 to Now)</span>
    </MDBCardTitle>
    <MDBCardTitle className="job-position card-heading">
      See what others have to say about my work!
    </MDBCardTitle>
    <Testimonials />
    </MDBCardBody>
  </MDBContainer>
);

export default Experience;
