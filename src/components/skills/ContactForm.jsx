import styled from 'styled-components';
import React from "react";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";

const StyledContactForm = styled.div`
  background-color: white;
  padding: 1em;
  margin-top: 1em;
  max-width: 500px;
  min-width: 320px;
  width: 40%;
`;

const SkillIconsContainer = styled.div`
  i {
    margin: 3px;
    margin: 5px;
    font-size: 1.5em;
  }
`;

const ContactForm = ({skills}) => (
  <StyledContactForm>
    <form
      action="https://formspree.io/xrgzwzrv"
      method="POST"
    >
      <p className="h4 text-center mb-4">Send me a message</p>
      <MDBInput
        type="text"
        label="YOUR NAME"
        name="name"
      />
      <MDBInput
        type="email"
        label="YOUR EMAIL"
        name="_replyto"
      />
      <MDBInput
        type="text"
        label="SUBJECT"
        name="_subject"
      />
      <label
        htmlFor="messageBody"
        className="grey-text"
      >
        YOUR MESSAGE
      </label>
      <textarea
        type="text"
        id="messageBody"
        className="form-control"
        rows="3"
        name="message"
      />
      <textarea
        hidden
        type="text"
        id="skillsSelected"
        className="form-control"
        rows="3"
        name="skills-selected"
        value={skills.map(skill => skill.content).join(', ')}
      />
      <br />
      <label className="grey-text">TOP CHOSEN SKILLS</label>
      <SkillIconsContainer>
        {skills.map(skill => skill.icon)}
      </SkillIconsContainer>
      <div className="text-center mt-4">
        <MDBBtn color="info" outline type="submit">
          Send
          <MDBIcon far icon="paper-plane" className="ml-2" />
        </MDBBtn>
      </div>
    </form>
  </StyledContactForm>
);

export default ContactForm;
