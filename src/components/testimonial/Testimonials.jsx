import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import styled from 'styled-components';
import suminPic from "../../assets/testimonial_sumin.jpg";
import keithPic from "../../assets/testimonial_keith.jpg";
import nikolaPic from "../../assets/testimonial_nikola.jpg";
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
  align-text: justify;
`;

const StyledMDBCardText = styled(MDBCardText)`
  text-align: justify;
`;

const TESTIMONIALS = [
  {
    name: "Sumin Kang",
    position: "Tech Lead @ Noom",
    image: suminPic,
    text: "I had the pleasure of working closely with Rose as her tech lead. Coming out of bootcamp a little over a year ago, Rose has made significant contributions in the team and has grown into a reliable engineer I can trust to get things done. Rose is one of the most detail-oriented and thorough engineers I have seen. Her biggest strength is being able to think through edge cases and coming up with comprehensive test plans. Her code is of high quality, and that also extends to when she is reviewing other people's code. She is a great communicator in both written and verbal aspects. She created detailed onboarding documents and came up with a status sheet to facilitate communication with the PMs. She is a team player and genuinely cares for others, and is a delight to work with. Most importantly, Rose has the drive and work ethic to become a great engineer, and I strongly believe she will achieve great things if she continues down this path. I’m excited to see what’s ahead of her!"
  },
  {
    name: "Keith Wood",
    position: "Product Manager @ Noom",
    image: keithPic,
    text: `Rose and I worked together on numerous projects at Noom, and I would highly recommend her to any team or project lead. She is an effective communicator, efficient worker, and always brought ideas to the table that improved both the design and technical elements of our projects. As a PM with a limited technical background, Rose was instrumental in bringing guidance and the "engineering" perspective to everything we worked on, and was a pleasure to work with.`
  },
  // {
  //   name: "Nikola Predovan",
  //   position: "Senior Front-end Engineer @ Noom",
  //   image: nikolaPic,
  //   text: "Reference available upon request"
  // },
  // {
  //   name: "Youngin Suh",
  //   position: "Product Designer @ Noom",
  //   image: younginPic,
  //   text: "Reference upon request"
  // },
]

const Card = ({testimonial: {name, position, text, image}}) => {
  return (
    <StyledCard>
      <StyledMDBCardImage className="img-fluid" src={image} waves />
      <MDBCardBody>
        <StyledMDBCardTitle>{name}</StyledMDBCardTitle>
        <StyledSubtitle className="card-subtitle">{position}</StyledSubtitle>
        <StyledMDBCardText>{text}</StyledMDBCardText>
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
    {TESTIMONIALS.map(testimonial => <Card key={testimonial.name} testimonial={testimonial} />)}
  </TestimonialsGroup>
);

export default Testimonials;