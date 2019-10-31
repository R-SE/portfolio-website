import React from 'react';
import { MDBMask, MDBView } from "mdbreact";

const Background = () => (
<MDBView waves id="background-img">
<img
  src="./assets/emile-perron-unsplash.jpg"
  className="img-fluid"
  alt="programmer at work"
/>
<MDBMask pattern={8} className="background-mask" />
</MDBView>
);

export default Background;