import React, { useState, useRef } from "react";
import Logo from "./Logo";

import "./Accordion.css";

/** STRUCTURE OF ACCORDION COMPONENT */


function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [setClose, setCloseState] = useState(true);

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  function closeAccordionPanel(display) {
    if(display === true){
      setActiveState("active")
    }else{
      setActiveState("");
    }
    console.log(setActive)
  }

  return (
    /** Logo & title part */
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <Logo className={`${setRotate}`} width={10} />
        <p className="accordion__title">{props.title}</p>
      </button>
      {/* Content Part with dropdown content */} 
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <div className="accordion__text">
            {props.content}
          </div>
        </div>
    </div>
  );
}

export default Accordion;

// onClick={ () => closeAccordionPanel(props.display)}