import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Divider,
  Badge,
  Avatar,
} from "@nextui-org/react";

export default function UserIntro() {
  return (
    <Card className="grid hidden grid-cols-4 sm:grid">
      <div className="flex items-center justify-center ">
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </div>

      <div className="flex flex-col col-span-3">
        <div>title</div>
        <div>role</div>
        <div>description</div>
      </div>
    </Card>
  );
}
