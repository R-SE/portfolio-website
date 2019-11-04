import styled from 'styled-components';
import React from "react";
import { Draggable } from "react-beautiful-dnd";

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

const Skill = ({skill, idx}) => (
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

export default Skill;
