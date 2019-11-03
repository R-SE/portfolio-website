import React from 'react';
import { MDBMask, MDBView } from "mdbreact";
// TODO: Replace with actual background image.
import background from "../../assets/20191102_105510.jpg";
import styled from 'styled-components'

const BackgroundImg = styled.img`
  opacity: 0.4;
  display: block;
  height: 100vh;
  max-height: 100%;
  object-fit: cover;
  width: 100%;
`;

const BackgroundWrapper = styled(MDBView)`
  position: fixed;
  overflow: hidden;
  background-color: black;
  z-index: -1;
`;

const Mask = styled(MDBMask)`
  opacity: .2;
`;

const Background = () => (
  <BackgroundWrapper waves id="background-img">
      <BackgroundImg
        src={background}
        className="img-fluid"
        alt="programmer at work"
      />
      <Mask pattern={8} />
  </BackgroundWrapper>
);

export default Background;