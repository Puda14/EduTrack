import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function KPITag({ title }) {
  return (
    <Card
      style={{ backgroundColor: "#dad0ff", margin: "16px 0" }}
      className="flex-row"
    >
      <div className="flex items-center justify-center h-full">
        <ClipboardIcon />
      </div>
      <CardBody className="bg-white">
        <div>{title}</div>
        <div>Example task</div>
      </CardBody>
    </Card>
  );
}
