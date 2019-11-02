import React, { Component } from "react";
import SKILLS_DATA from "./skillsData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MDBContainer, MDBCardBody, MDBCardTitle } from "mdbreact";

const Skill = ({skill, idx}) => (
  <Draggable draggableId={skill.id} index={idx}>
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
)

const Column = ({column, skills}) => (
  <MDBContainer>
    <h1>{column.title}</h1>
    <Droppable droppableId={column.id} className="droppable-column">
      {({innerRef, droppableProps, placeholder}) => (
        <div ref={innerRef} {...droppableProps}>
          {skills.map((skill, idx) => <Skill skill={skill} idx={idx} />)}
          {placeholder}
        </div>
      )}
    </Droppable>
  </MDBContainer>
);

class Skills extends Component {
  state = SKILLS_DATA;

  onDragEnd = result => {
    console.log('done draggin');
  }
  
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
        const column = this.state.columns[columnId];
        const skills = column.skillIds.map(id => this.state.skills[id]);

        return <Column key={column.id} column={column} skills={skills} />
      })}
      </DragDropContext>
    )
  }
}

export default Skills;
