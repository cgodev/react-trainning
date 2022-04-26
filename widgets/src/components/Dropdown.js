import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {

  const [toggleState, setToggleState] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      setToggleState(false);
    }

    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener("click", onBodyClick, {capture: true});
    };

  }, []);


  const rederedOptions = options.map((option) => {
    if (option.value === selected.value) return;

    return (
      <div onClick={() => onSelectedChange(option)} key={option.value} className="item">
        {option.label}
      </div>
    )
  })



  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setToggleState(!toggleState)}
          className={`ui selection dropdown ${toggleState ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${toggleState ? 'visible transition' : ''}`}>
            {rederedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;