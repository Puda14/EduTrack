import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Badge,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "../icons/SearchIcon.js";
import { NotificationIcon } from "../icons/NotificationIcon.js";

export default function App() {
  return (
    <div className="flex items-center px-10 py-3 bg-white grow">
      <div className="flex items-center gap-14 grow">
        <div>
          <p className="text-2xl font-bold">Dashboard</p>
          <p className="text-sm">14 March 2024</p>
        </div>
        <div className="w-[500px]">
          <Input
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </div>
      </div>
      <div className="flex gap-20">
        <Badge content="99+" shape="circle" color="danger">
          <Button
            radius="full"
            isIconOnly
            aria-label="more than 99 notifications"
            variant="light"
          >
            <NotificationIcon size={24} />
          </Button>
        </Badge>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="gap-2 h-14">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
