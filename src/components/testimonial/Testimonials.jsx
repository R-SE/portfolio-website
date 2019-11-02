import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import keithPic from "../../assets/testimonial_keith.jpg";
import nikolaPic from "../../assets/testimonial_nikola.jpg";
import suminPic from "../../assets/testimonial_sumin.jpg";
import younginPic from "../../assets/testimonial_youngin.jpg";

const TESTIMONIALS = [
  {
    name: "Keith Wood",
    position: "Product Manager @ Noom",
    image: keithPic,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo tortor, placerat vel dui a, porta interdum augue. Duis in consequat augue, id facilisis quam. Suspendisse tincidunt ante at posuere luctus. Vestibulum tellus nisl, ornare eget nulla ut, sagittis dictum lectus. Fusce a mollis sapien, sed vestibulum erat. Aliquam eget lacinia nisl, in venenatis ex. Ut vel nisi mollis justo pellentesque hendrerit. Quisque dictum purus arcu, eget convallis turpis vestibulum ut. Ut dui ante, faucibus et molestie sit amet, ullamcorper quis nunc. Fusce id metus scelerisque felis venenatis pretium eget vel augue. Maecenas eu erat viverra libero convallis facilisis. Donec."
  },
  {
    name: "Sumin Kang",
    position: "Tech Lead @ Noom",
    image: suminPic,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo tortor, placerat vel dui a, porta interdum augue. Duis in consequat augue, id facilisis quam. Suspendisse tincidunt ante at posuere luctus. Vestibulum tellus nisl, ornare eget nulla ut, sagittis dictum lectus. Fusce a mollis sapien, sed vestibulum erat. Aliquam eget lacinia nisl, in venenatis ex. Ut vel nisi mollis justo pellentesque hendrerit. Quisque dictum purus arcu, eget convallis turpis vestibulum ut. Ut dui ante, faucibus et molestie sit amet, ullamcorper quis nunc. Fusce id metus scelerisque felis venenatis pretium eget vel augue. Maecenas eu erat viverra libero convallis facilisis. Donec."
  },
  {
    name: "Youngin Suh",
    position: "Designer @ Noom",
    image: younginPic,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo tortor, placerat vel dui a, porta interdum augue. Duis in consequat augue, id facilisis quam. Suspendisse tincidunt ante at posuere luctus. Vestibulum tellus nisl, ornare eget nulla ut, sagittis dictum lectus. Fusce a mollis sapien, sed vestibulum erat. Aliquam eget lacinia nisl, in venenatis ex. Ut vel nisi mollis justo pellentesque hendrerit. Quisque dictum purus arcu, eget convallis turpis vestibulum ut. Ut dui ante, faucibus et molestie sit amet, ullamcorper quis nunc. Fusce id metus scelerisque felis venenatis pretium eget vel augue. Maecenas eu erat viverra libero convallis facilisis. Donec."
  },
]

const Card = ({testimonial: {name, position, text, image}}) => {
  return (
    // <MDBCol>
      <MDBCard>
        <MDBCardImage className="img-fluid profile-pic" src={image} waves />
        <MDBCardBody>
          <MDBCardTitle className="card-title">{name}</MDBCardTitle>
          <h6 className="card-subtitle">{position}</h6>
          <MDBCardText>{text}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    // </MDBCol>
  )
}

const Testimonials = () => (
  <div className="testimonials-group">
    {TESTIMONIALS.map(testimonial => <Card testimonial={testimonial} />)}
   </div>
  )

export default Testimonials;