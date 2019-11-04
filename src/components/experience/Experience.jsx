import React from "react";
import { MDBContainer, MDBCardBody, MDBCardTitle } from "mdbreact";
import styled from 'styled-components'
import Testimonials from "../testimonial/Testimonials";

const StyledMDBContainer = styled(MDBContainer)`
  padding-top: 3%;
`;

const StyledSpan = styled.span`
  display: inline-block;
  color: #fff;
`;

const StyledCardTitle = styled(MDBCardTitle)`
  color: #fff;
`;

const Experience = () => (
  <StyledMDBContainer>
    <MDBCardTitle className="h3">
      <StyledSpan>"Helping people everywhere</StyledSpan>{' '}
      <StyledSpan>live healthier lives</StyledSpan>{' '}
      <StyledSpan>through behavior change"</StyledSpan>
    </MDBCardTitle>
    <MDBCardBody>
    <StyledCardTitle>
      <StyledSpan>Software Engineer @ Noom</StyledSpan>{' '}
      <StyledSpan>(SEP 2018 to Now)</StyledSpan>
    </StyledCardTitle>
    <StyledCardTitle>
      Hear what others have to say about my work!
    </StyledCardTitle>
    <Testimonials />
    </MDBCardBody>
  </StyledMDBContainer>
);

export default Experience;
