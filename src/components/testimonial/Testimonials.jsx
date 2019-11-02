import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import styled from 'styled-components';
import keithPic from "../../assets/testimonial_keith.jpg";
import nikolaPic from "../../assets/testimonial_nikola.jpg";
import suminPic from "../../assets/testimonial_sumin.jpg";
import younginPic from "../../assets/testimonial_youngin.jpg";

const StyledMDBCardTitle = styled(MDBCardTitle)`
  color: #0073b1;
  text-shadow:  2px 5px 10px rgba(0, 0, 0, 0.3);
`;

const StyledSubtitle = styled.h6`
  font-size: 1em;
  font-style: italic;
  margin-bottom: 1em;
`;

const StyledMDBCardImage = styled(MDBCardImage)`
  border-radius: 50%;
  width: 80px;
  margin: 1em auto 0 auto;
`;

const TestimonialsGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1em;
  justify-content: space-evenly;
`;

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
    position: "Product Designer @ Noom",
    image: younginPic,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo tortor, placerat vel dui a, porta interdum augue. Duis in consequat augue, id facilisis quam. Suspendisse tincidunt ante at posuere luctus. Vestibulum tellus nisl, ornare eget nulla ut, sagittis dictum lectus. Fusce a mollis sapien, sed vestibulum erat. Aliquam eget lacinia nisl, in venenatis ex. Ut vel nisi mollis justo pellentesque hendrerit. Quisque dictum purus arcu, eget convallis turpis vestibulum ut. Ut dui ante, faucibus et molestie sit amet, ullamcorper quis nunc. Fusce id metus scelerisque felis venenatis pretium eget vel augue. Maecenas eu erat viverra libero convallis facilisis. Donec."
  },
]

const Card = ({testimonial: {name, position, text, image}}) => {
  return (
    <StyledCard>
      <StyledMDBCardImage className="img-fluid" src={image} waves />
      <MDBCardBody>
        <StyledMDBCardTitle>{name}</StyledMDBCardTitle>
        <StyledSubtitle className="card-subtitle">{position}</StyledSubtitle>
        <MDBCardText>{text}</MDBCardText>
      </MDBCardBody>
    </StyledCard>
  )
}

const StyledCard = styled(MDBCard)`
  min-width: 300px;
  margin: 1em;
  padding: 0;
`;

const Testimonials = () => (
  <TestimonialsGroup>
    {TESTIMONIALS.map(testimonial => <Card testimonial={testimonial} />)}
  </TestimonialsGroup>
);

export default Testimonials;