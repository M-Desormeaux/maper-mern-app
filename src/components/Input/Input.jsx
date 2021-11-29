import { useState } from "react";

export const Input = ({ type, output, id, label }) => {
  const [input, setInput] = useState("");
  const filteredType = type;
  // const filteredType = type === "text" || type === "password" ? type : "text";

  const updateInputHandler = (event) => {
    setInput(event.target.value);
    output && output(event.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={filteredType}
        value={input}
        onChange={updateInputHandler}
      />
    </>
  );
};
