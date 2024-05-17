import { Input } from "@nextui-org/input";
import React, { useState } from "react";
export const InputField = (props) => {
  const [value, setValue] = useState("");
  const { name, style, placeholder } = props;
  const handleChange = (e) => {
    console.log(`${name} field value: ${value}`);
    setValue(e.target.value);
  };
  return (
    <div style={{ margin: "8px 0" }}>
      <Input
        onChange={handleChange}
        value={value}
        style={style}
        placeholder={placeholder}
      />
    </div>
  );
};
