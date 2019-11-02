import React from "react";
import { MDBJumbotron, MDBContainer, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText, MDBCol } from "mdbreact";
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


{/* <MDBCardText>
<h5 className="h5-responsive">
  I collaborate with product managers and designers to implement new UI features,<br />
  work with cross-team engineers to bring impactful projects to fruition,<br />
  run A/B tests on web ad flows to increase conversion,<br />
  do internationalization for interfaces,<br />
  write technical documentation,<br />
  onboard new engineers,<br />
  do code reviews,<br />
  fix bugs,<br />
</h5>
<h3>and contribute to the <span >success</span> of my team in any way possible.<br /></h3>
</MDBCardText> */}