import React from "react";

function Dice(props) {
  let className = props.data.isFreezed ? "dice-button freezed" : "dice-button";

  return (
    <div className="dice" onClick={props.freeze}>
      <button className={className}>{props.data.value}</button>
    </div>
  );
}

export default Dice;
