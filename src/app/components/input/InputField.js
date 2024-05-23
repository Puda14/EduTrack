import { Input } from "@nextui-org/input";
import React, { useState } from "react";
export const InputField = (props) => {
  const [value, setValue] = useState("");
  const { name, style } = props;
  const handleChange = (e) => {
    console.log(`${name} field value: ${value}`);
    setValue(e.target.value);
  };
  return (
    <>
      <Input onChange={handleChange} value={value} style={style} />
    </>
  );
};
