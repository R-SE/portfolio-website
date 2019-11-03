import React, { Component } from "react";
import SKILLS_DATA from "./skillsData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MDBContainer, MDBCardBody, MDBCardTitle } from "mdbreact";
import styled, { css } from 'styled-components'

const ColumnContainer = styled(MDBContainer)`
  width: calc(50% - 50px);
  display: inline-block;
  vertical-align: top;
`;


class Skills extends Component {
  constructor() {
    super();
    this.state = SKILLS_DATA;
  }

  onDragEnd = result => {
    const {source, destination, draggableId} = result;
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    console.log('ON DRAG END', source, destination, draggableId);

    let newSource = Array.from(this.state[source.droppableId]);
    newSource.splice(source.index, 1);
    let newDestination = Array.from(this.state[destination.droppableId]);
    newDestination.splice(destination.index, 0, draggableId.split('-').pop());

    console.log(newSource, newDestination)

    this.setState({[source.droppableId]: newSource, [destination.droppableId]: newDestination});
  }
  
  render() {
    const { mySkills, selectedSkills} = this.state;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Column title="My Skills" id="mySkills" skillArr={mySkills} />
        <Column title="Selected Skills" id="selectedSkills" skillArr={selectedSkills} />
      </DragDropContext>
    )
  }
}

const Skill = ({skill, idx, list}) => {
  console.log('in skill', idx, skill);

  return (
  <Draggable draggableId={`${list}-${skill.id}`} index={idx}>
    {({draggableProps, dragHandleProps, innerRef}) =>
      <div
      style={{position: "relative"}}
        className="draggable-skill"
        {...draggableProps}
        {...dragHandleProps}
        ref={innerRef}
        >
        <span style={{position: "relative"}}>{skill.content}</span>
      </div>}
  </Draggable>
);
  }

const Column = ({title, id, skillArr}) => (
  <ColumnContainer>
    <h1>{title}</h1>
    <Droppable droppableId={id} className="droppable-column">
      {({innerRef, droppableProps, placeholder}) => (
        <div ref={innerRef} {...droppableProps}>
          {skillArr.map((skill, idx) => <Skill skill={SKILLS_DATA.skills[skill]} list={id} idx={idx}/>)}
          {placeholder}
        </div>
      )}
    </Droppable>
  </ColumnContainer>
);

export default Skills;
