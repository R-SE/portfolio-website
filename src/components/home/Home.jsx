import React, { Component } from "react";

class Home extends Component {
    componentDidMount() {
        this.props.updateActivePage(this.props.match.path);
        // console.log(this.props.location.pathname);
    }

    render() {
        return (
            <div id="home">
                <h1>I'm <span role="img" aria-label="Rose" title="Rose">🌹</span>.</h1>
                {/* <h2>Nice to meet you.</h2> */}
        
                <h4>I build performant, scalable web apps</h4>
                <h4>and deliver clean, architected code.</h4>
                {/* <img src="./assets/down_arrow.png" className="directional-arrow"/> */}
                <div className="scroll-div">
                    <span>Scroll</span>
                    <img src="./assets/double_arrow_down.png" className="directional-arrow"/>
                </div>
            </div>
        );
    }
} 





export default Home;
