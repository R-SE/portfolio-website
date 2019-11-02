import React from 'react';
import { MDBMask, MDBView } from "mdbreact";
// TODO: Replace with actual background image.
import background from "../../assets/20191102_105510.jpg";

const Background = () => (
<MDBView waves id="background-img">
<img
  src={background}
  className="img-fluid"
  alt="programmer at work"
/>
<MDBMask pattern={8} className="background-mask" />
</MDBView>
);

export default Background;