import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const TESTIMONIALS = [
  {
    name: "Keith Wood",
    position: "Product Manager @ Noom",
    text: "sdkfjsdkfjsdkfjsdklfjsdlfj9weifjweidfjksldfsdkfjsdkfjsdkfjsdklfjsdlfj9weifjweidfjksldfsdkfjsdkfjsdkfjsdklfjsdlfj9weifjweidfjksldfsdkfjsdkfjsdkfjsdklfjsdlfj9weifjweidfjksldfsdkfjsdkfjsdkfjsdklfjsdlfj9weifjweidfjksldf"
  },
  {
    name: "Sumin Kang",
    position: "Tech Lead @ Noom",
    text: "sdkfjsdkfjsdkfjsdklfjsdlfj9weifjweidfjksldf"
  },
  {
    name: "Youngin Suh",
    position: "Designer @ Noom",
    text: "sdkfjsdkfjsdkfjsdklfjsdlfj9weifjweidfjksldf"
  },
]

const Card = ({testimonial: {name, position, text}}) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle className="card-title">{name}</MDBCardTitle>
          <MDBCardTitle>{position}</MDBCardTitle>
          <MDBCardText>
           {text}
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

const Testimonials = () => (
  <div className="testimonials-group">
    {TESTIMONIALS.map(testimonial => <Card testimonial={testimonial} />)}
   </div>
  )

export default Testimonials;