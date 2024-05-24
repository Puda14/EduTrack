import { getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { CalendarDate, DateInput } from "@nextui-org/react";
import React, { useState } from "react";

export const DateInputField = (props) => {
  const [date, setDate] = useState(parseDate("2024-01-01"));
  const { name, style } = props;
  return (
    <div style={{ margin: "8px 0" }}>
      <DateInput value={date} onChange={setDate} />
    </div>
  );
};
