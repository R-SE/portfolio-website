import React from "react";
import { MDBJumbotron, MDBContainer, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardText, MDBCol } from "mdbreact";
import Testimonials from "../testimonial/Testimonials";
import image from "../../assets/hack-capital-unsplash.jpg";

const Experience = () => (
  <MDBJumbotron fluid>
    <MDBCol className="text-white text-center py-5 px-4 my-5 background-gradient">
    <MDBContainer>
            <MDBCardTitle className="card-title h1 pb-2">
              <strong>"Helping people everywhere live healthier lives through behavior change"</strong>
            </MDBCardTitle>

            {/* <MDBCardImage
              src={image}
              className="img-fluid jobs-panel"
            /> */}

            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Software Engineer @ Noom, Inc. ⁠— SEP 2018 to Current
              </MDBCardTitle>

            <Testimonials />


              </MDBCardBody>
    </MDBContainer>
    </MDBCol>
  </MDBJumbotron>
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