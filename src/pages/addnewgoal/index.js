import { ClipboardIcon } from "@/app/components/icons/ClipboardIcon";
import { InputField } from "@/app/components/input/InputField";
import { DateInputField } from "@/app/components/input/DateInputField";
import { SelectInputField } from "@/app/components/input/SelectInputField";
import { ClipboardIcon } from "@/app/components/icons/ClipboardIcon";
import { InputField } from "@/app/components/input/InputField";
import KPITabs from "@/app/components/kpi/KPITabs";
import { Input } from "@nextui-org/input";
import {
  CardBody,
  CardHeader,
  DateInput,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Pagination,
  Select,
  SelectItem,
  Tooltip,
} from "@nextui-org/react";
import { Button, Card } from "@nextui-org/react";
import { useState } from "react";
import { InformationTooltip } from "@/app/components/hover/InformationTooltip";
import "./responsive.css";

const XLSX = require("xlsx");

const AddNewGoalPage = () => {
  const [list, setList] = useState(
    typeof window !== "undefined" ? localStorage.getItem("goalList") : []
  );
  const [input, setInput] = useState("");
  const [kpiPopup, setKpiPopup] = useState(false);
  const [KPI, setKPI] = useState([]);

  const checkFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const goalWorkbook = XLSX.read(data);
    const goalSheet = goalWorkbook.Sheets[goalWorkbook.SheetNames[0]];
    const goalJSON = XLSX.utils.sheet_to_json(goalSheet);
    const KPIList = [];
    goalJSON.forEach((i) => KPIList.push(i.KPI));
    setKPI(KPIList);
    localStorage.setItem("goalList", JSON.stringify(goalJSON));
  };
  const handleAddToList = (item) => {
    setList((prevList) => [...prevList, item]);
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleAddGoal = () => {};
  // list contains goals
  // list = [ {task = [{name, type, fromDate, toDate, description} ], title, fromDate, toDate, role, hashtag, description} ]
  //
  const mapKPI = () => {};
  return (
    <div className="flex flex-col justify-between flex-container">
      <div className="flex flex-row goal-menu item-end">
        <form
          onSubmit={handleAddToList}
          className="flex flex-col w-full goal-menu"
        >
          <h2 style={{ fontSize: 34, display: "flex", alignItems: "center" }}>
            New Goal
            <InformationTooltip content={"Adding goal"} />{" "}
          </h2>

          <div>
            <span>Import File Excel</span>
            {/* <Button color="primary" style={{ margin: "0 32px" }}> */}
            {/* Import */}
            {/* </Button> */}
            <input
              type="file"
              accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              id="excel-input"
              onChange={checkFile}
              style={{ borderRadius: 12, display: "none" }}
            />
            <Button color="primary" style={{ margin: "0px 15px" }}>
              <label for="excel-input">Import</label>
            </Button>
            <Button color="primary">Export</Button>
          </div>
          <div>Title</div>

          {/* <Input
            style={{ border: "none" }}
            placeholder="Please enter here"
            onChange={handleInputChange}
            value={input}
          /> */}
          <InputField
            name="Title"
            style={{ border: "none", margin: "8px 0" }}
          />
          <div>From</div>
          <DateInputField />
          <div>To</div>
          <DateInputField />
          <div>Role</div>
          {/*<Inpu t
            style={{ border: "none" }}
            placeholder="Choose your role"
            value={input}
          /> */}
          <InputField name="Role" style={{ border: "none" }} />
          <div>Hashtag</div>
          <InputField style={{ border: "none" }} />
          <div>Description</div>
          <InputField
            style={{ border: "none" }}
            placeholder="Please enter description (/250)"
          />
        </form>{" "}
        <Button
          onClick={handleAddGoal}
          style={{ margin: "32px 0" }}
          color="primary"
        >
          Add Goal
        </Button>
      </div>
      <div className="flex flex-row kpi-menu item-center">
        <h2>KPI</h2>
        <KPITabs />
        <KPITabs />
        <Button>ADD NEW KPI</Button>
      </div>
    </div>
  );
};

export default AddNewGoalPage;
