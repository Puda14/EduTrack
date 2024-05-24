import { Input } from "@nextui-org/input";
import React, { useState } from "react";
export const InputField = (props) => {
  const { name, style, placeholder, value } = props;
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    console.log(`${name} field value: ${input}`);
    setInput(e.target.value);
  };
  return (
    <div style={{ margin: "8px 0" }}>
      <Input
        onChange={handleChange}
        value={input}
        style={style}
        placeholder={placeholder}
      />
    </div>
  );
};
