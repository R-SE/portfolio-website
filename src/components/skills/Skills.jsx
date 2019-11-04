import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MDBContainer, MDBCardTitle, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import styled from 'styled-components';
import SKILLS_DATA from "./skillsData";


const StyledMDBContainer = styled(MDBContainer)`
  padding-top: 3%;
  user-select: none;
  max-width: none;
`;

const StyledSpan = styled.span`
  display: inline-block;
  color: #fff;
`;

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
    <form>
      <p className="h4 text-center mb-4">Send me a message</p>
      <MDBInput
        type="text"
        label="YOUR NAME"
      />
      <MDBInput
        type="email"
        label="YOUR EMAIL"
      />
      <MDBInput
        type="text"
        label="SUBJECT"
      />
      <label
        htmlFor="defaultFormContactMessageEx"
        className="grey-text"
      >
        YOUR MESSAGE
      </label>
      <textarea
        type="text"
        id="defaultFormContactMessageEx"
        className="form-control"
        rows="3"
      />
      <br />
      <label className="grey-text">TOP CHOSEN SKILLS</label>
      <SkillIconsContainer>
        {skills.map(skill => skill.icon)}
      </SkillIconsContainer>
      <div className="text-center mt-4">
        <MDBBtn color="info" outline>
          Send
          <MDBIcon far icon="paper-plane" className="ml-2" />
        </MDBBtn>
      </div>
    </form>
  </StyledContactForm>
);

const SplitContainer = styled(MDBContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: none;
  align-items: self-start;
  justify-content: space-around;

  > div:first-child {
    max-width: 400px;
    margin: 0;
  }
`;

const TitleBox = styled.div`
  margin-bottom: 2em;
`;

const Skills = () => {
  const [ skills, updateSkills ] = useState(SKILLS_DATA);


  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) {
      return;
    }

    let newSkills = Array.from(skills);
    newSkills.splice(destination.index, 0, newSkills.splice(source.index, 1)[0]);

    updateSkills(newSkills);
  }


  return (
    <StyledMDBContainer>
      <TitleBox>
      <MDBCardTitle className="h3">
        <StyledSpan>What's important to you?</StyledSpan>
      </MDBCardTitle>
      <h4>
        <StyledSpan>Let me know your priorities</StyledSpan>{' '}
        <StyledSpan>by drag and dropping my skills.</StyledSpan>
      </h4>
      </TitleBox>

      <SplitContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Column id="mySkills" skills={skills} />
        </DragDropContext>
        <ContactForm skills={skills.slice(0, 8)}/>
      </SplitContainer>
    </StyledMDBContainer>
  );
}

const StyledDraggable = styled.div`
  margin: .5em;
  padding: .5em;
  background-color: rgba(0, 115, 177, .5);
  box-shadow:  2px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: .25rem;
  display: flex;
  align-items: center;
  text-align: center;

  i {
    margin-right: 12px;
  }

  span {
    width: 100%;
  }
`;

const Skill = ({skill, idx}) => {
  return (
  <Draggable draggableId={skill.id} key={skill.id} index={idx}>
    {({draggableProps, dragHandleProps, innerRef}) =>
    
      <StyledDraggable
        {...draggableProps}
        {...dragHandleProps}
        ref={innerRef}
        >
        {skill.icon}<span>{skill.content}</span>
      </StyledDraggable>}
  </Draggable>
);
}

const StyledDroppable = styled.div`
  font-size: 1.3em;
  color: white;
  min-width: 200px;
  max-width: 324px;
  margin: 0 auto;
`;

const Column = ({id, skills}) => (
  <MDBContainer>
    <Droppable droppableId={id}>
      {({innerRef, droppableProps, placeholder}) => (
        <StyledDroppable ref={innerRef} {...droppableProps}>
          {skills.map((skill, idx) => <Skill skill={skill} idx={idx} key={skill.id}/>)}
          {placeholder}
        </StyledDroppable>
      )}
    </Droppable>
  </MDBContainer>
);

export default Skills;
