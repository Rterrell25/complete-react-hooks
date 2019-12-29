import React from "react";

export default function Validation(props) {
  let validationMessage = "text be long";

  if (props.inputLength <= 5) {
    validationMessage = "text too short ";
  }
  return (
    <div>
      <p>{validationMessage} </p>
    </div>
  );
}
