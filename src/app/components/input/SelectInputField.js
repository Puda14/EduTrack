import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
const defaultSelection = [
  { name: "Required", value: "required" },
  { name: "Optional", value: "optional" },
];
export const SelectInputField = (props) => {
  const [value, setValue] = useState(defaultSelection[0].value);
  const { name, style, placeholder } = props;
  console.log(Array.isArray(value));
  const handleChange = (e) => {
    console.log(`${name} field value: ${value}`);
    setValue(e.target.value);
  };
  return (
    <div style={{ margin: "8px 0" }}>
      <Select selectedKeys={value} onSelectionChange={setValue}>
        {defaultSelection.map((i) => (
          <SelectItem key={i.value} value={i.value}>
            {i.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
