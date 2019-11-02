import React from 'react';
import { MDBMask, MDBView } from "mdbreact";
import background from "../../assets/emile-perron-unsplash.jpg";

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