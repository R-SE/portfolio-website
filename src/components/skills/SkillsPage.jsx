import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { MDBContainer, MDBCardTitle } from "mdbreact";
import styled from 'styled-components';
import SKILLS_DATA from "./skillsData";
import ContactForm from "./ContactForm";
import Column from "./Column";

const StyledMDBContainer = styled(MDBContainer)`
  padding-top: 3%;
  user-select: none;
  max-width: none;
`;

const StyledSpan = styled.span`
  display: inline-block;
  color: #fff;
`;

const SplitContainer = styled(MDBContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: none;
  align-items: self-start;
  justify-content: center;

  > div:first-child {
    max-width: 400px;
    margin: 0;
  }
`;

const TitleBox = styled.div`
  margin-bottom: 2em;
`;

const SkillsPage = () => {
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
        <StyledSpan>Let me know your priorities by </StyledSpan>{' '}
        <StyledSpan>drag and dropping my skills.</StyledSpan>
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

export default SkillsPage;
