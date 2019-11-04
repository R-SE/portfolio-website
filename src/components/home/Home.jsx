import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import styled from 'styled-components'
import doubleArrow from "../../assets/double_arrow_down.png";

const HomeDiv = styled.div`
  z-index: 100;
  position: relative;
  background-color: rgba(45, 156, 204, 0.6);
  padding: 1em;
  top: 10em;
  color: white;
`;

const Byline = styled.h4`
  transition: all 0.4s;
  @media only screen and (max-width: 768px) {
    min-height: 75px;
    font-size: 1.3rem;
    margin-bottom: 0;
  }
`;

const Scroll = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  width: 10%;
  margin: 0 auto;
  align-items: center;
  animation-name: bounce;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const DirectionalArrow = styled.img`
  width: 20px;
`;

const StyledBreak = styled.br`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Home = () => {
  const TIME_IN_MS_PER_STRING = 3000;
  const [idx, setIdx] = useState(0);
  const [style, setStyle] = useState({opacity: 1, transform: "scale(1)"});

  const strings = [
    ["I build performant, scalable web apps ", <StyledBreak key={1}/>, "and deliver clean, well-designed code"],
    ["मैं शानदार, बदलाव किये जाने योग्य वेब एप्लिकेशन बनाता हूं，", <StyledBreak key={2}/>, "और बेहतर, अच्छी तरह से डिजाइन किये हुए कोड बनाता हूँ।"],
    ["Construyó escalante apps de web ", <StyledBreak key={3}/>, "y preparó códigos limpios é estructurales"],
    ["我创建优化的，可扩展的Web应用程序， ", <StyledBreak key={4}/>, "并提供干净，设计良好的代码"],
    ["퍼포멘트와 확장가능한 웹 앱와 ", <StyledBreak key={5}/>,"간단한 설계코드 되어 있는 것을 전해 드립니다"],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStyle(() => ({opacity: 0, transform: "scale(0.95)"}));
      setTimeout(() => setStyle(() => ({opacity: 1, transform: "scale(1)"})), 600);
      setTimeout(() => setIdx(idx => (idx + 1) % strings.length), 400);
    }, TIME_IN_MS_PER_STRING);
    return () => clearInterval(interval);
  }, [strings.length]);

  return (
    <HomeDiv>
      <h1 className="display-4">I'm <span role="img" aria-label="Rose" title="Rose">🌹</span>.</h1>
      <Byline style={style}>{strings[idx]}</Byline>
      <Scroll>
        <DirectionalArrow src={doubleArrow} alt="down arrows" />
      </Scroll>
      <Link to="/jobs"><MDBBtn gradient="aqua">Hear More</MDBBtn></Link>
    </HomeDiv>
)};

export default Home;
