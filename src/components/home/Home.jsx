import React, { useState, useEffect } from "react";
import doubleArrow from "../../assets/double_arrow_down.png";
import styled from 'styled-components'

const HomeDiv = styled.div`
  z-index: 100;
  position: relative;
  background-color: rgba(45, 156, 204, 0.6);
  padding-top: 1em;
  padding-bottom: 1em;
  top: 10em;
  color: white;
`;

const Byline = styled.h4`
  transition: all 0.4s;
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

const ScrollText = styled.span`
  text-transform: uppercase;
  font-size: 0.8em;
  margin-bottom: 2px;
`;

const DirectionalArrow = styled.img`
  width: 20px;
`;


const Home = () => {
  const TIME_IN_MS_PER_STRING = 7000;
  const [idx, setIdx] = useState(0);
  const [style, setStyle] = useState({opacity: 1, transform: "scale(1)"});

  const strings = [
    ["I build performant, scalable web apps", <br/>, "and deliver clean, well-designed code"],
    ["मैं शानदार, बदलाव किये जाने योग्य वेब एप्लिकेशन बनाता हूं，", <br/>, "और बेहतर, अच्छी तरह से डिजाइन किये हुए कोड बनाता हूँ।"],
    ["Construyó escalante apps de web", <br />, "y preparó códigos limpios é estructurales"],
    ["我创建优化的，可扩展的Web应用程序，", <br/>, "并提供干净，设计良好的代码"],
    ["퍼포멘트와 확장가능한 웹 앱와", <br/>,"간단한 설계코드 되어 있는 것을 전해 드립니다"],
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
      <Byline className="h4-responsive" style={style}>{strings[idx]}</Byline>
      <Scroll>
        <ScrollText>Scroll</ScrollText>
        <DirectionalArrow src={doubleArrow} alt="down arrows" />
      </Scroll>
    </HomeDiv>
)};

export default Home;

// To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge. - Grace Hopper