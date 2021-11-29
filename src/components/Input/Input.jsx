import { useState } from "react";

export const Input = ({ type }) => {
  const [input, setInput] = useState("");

  const updateInputHandler = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return <input type={type} value={input} onChange={updateInputHandler} />;
};
