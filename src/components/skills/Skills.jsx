import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MDBContainer, MDBCardTitle } from "mdbreact";
import styled from 'styled-components';
import SKILLS_DATA from "./skillsData";

// const ColumnContainer = styled(MDBContainer)`
//   width: calc(50% - 50px);
//   display: inline-block;
//   vertical-align: top;
// `;

const StyledMDBContainer = styled(MDBContainer)`
  padding-top: 3%;
`;

const StyledSpan = styled.span`
  display: inline-block;
  color: #fff;
`;


const Skills = () => {
  const [ skills ] = useState(SKILLS_DATA);

  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) {
      return;
    }

    skills.splice(destination.index, 0, skills.splice(source.index, 1)[0]);
    console.log('my skills', skills);
  }
  

  return (
    <StyledMDBContainer>
      <MDBCardTitle className="h3">
        <StyledSpan>What's important to you?</StyledSpan>
      </MDBCardTitle>
      <h4>
        <StyledSpan>Let me know your priorities by drag and dropping my skills,</StyledSpan>{' '}
        <StyledSpan>or adding new ones you don't see listed here.</StyledSpan>
      </h4>
      <DragDropContext onDragEnd={onDragEnd}>
        <Column id="mySkills" skills={skills} />
      </DragDropContext>
    </StyledMDBContainer>
  );
}

const StyledDraggable = styled.div`
  // position: relative;
  margin: .5em;
  padding: .5em;
  background-color: #24292e;
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
        {skill.icon || <i class="fas fa-plus-circle" />}{' '}{skill.content}
      </StyledDraggable>}
  </Draggable>
);
}

const StyledDroppable = styled.div`
  width: 50%;
  font-size: 1.3em;
  color: white;
  text-align: left
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
