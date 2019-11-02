import React, { useState, useEffect } from "react";

const Home = () => {
  const TIME_IN_MS_PER_STRING = 7000;
  const [idx, setIdx] = useState(0);
  const [style, setStyle] = useState({opacity: 1, transform: "scale(1)"});

  const strings = [
    ["I build performant, scalable web apps", <br/>, "and deliver clean, well-designed code"],
    ["퍼포멘트와 확장가능한 웹 앱와", <br/>,"간단한 설계코드 되어 있는 것을 전해 드립니다"],
    ["Construyó escalante apps de web", <br />, "y preparó códigos limpios é estructurales"],
    ["我创建优化的，可扩展的Web应用程序，", <br/>, "并提供干净，设计良好的代码"],
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
    <div id="home">
      <h1 className="display-4">I'm <span role="img" aria-label="Rose" title="Rose">🌹</span>.</h1>
      <h4 className="h4-responsive" style={style}>{strings[idx]}</h4>
      <div className="scroll-div">
        <span>Scroll</span>
        <img src="./assets/double_arrow_down.png" alt="down arrows" className="directional-arrow"/>
      </div>
  </div>
)};

export default Home;

// To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge. - Grace Hopper