import styled from 'styled-components';
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { MDBContainer } from "mdbreact";
import Skill from "./Skill";

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

export default Column;
