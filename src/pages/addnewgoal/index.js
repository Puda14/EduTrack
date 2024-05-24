import { ClipboardIcon } from "@/app/components/icons/ClipboardIcon";
import { InputField } from "@/app/components/input/InputField";
import { DateInputField } from "@/app/components/input/DateInputField";
import { SelectInputField } from "@/app/components/input/SelectInputField";
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
    setList;
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
    <div className="flex-container flex justify-between">
      <div
        className="goal-menu flex flex-col justify-center"
        style={{ width: 540 }}
      >
        <form
          onSubmit={handleAddToList}
          classname="goal-menu flex flex-row w-full"
        >
          <h2 style={{ fontSize: 34 }}>
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
      <div
        className="kpi-menu flex flex-col item-center"
        style={{ width: 320 }}
      >
        <h2 style={{ fontSize: 34 }}>
          KPI <InformationTooltip content={"KPI"} />
        </h2>
        {
          KPI.map((i) => {
            if (i)
              return (
                <Card
                  style={{ backgroundColor: "#dad0ff", margin: "16px 0" }}
                  className="flex-row"
                  key={i}
                >
                  <div className="flex items-center justify-center h-full">
                    <ClipboardIcon />
                  </div>
                  <CardBody className="bg-white">
                    <div>{i}</div>
                    <div>Example task</div>
                  </CardBody>
                </Card>
              );
          })
          /* <Card
            style={{ backgroundColor: "#dad0ff", margin: "16px 0" }}
            className="flex-row"
          >
            <div className="flex items-center justify-center h-full">
              <ClipboardIcon />
            </div>
            <CardBody className="bg-white">
              <div>Task 1</div>
              <div>Example task</div>
            </CardBody>
          </Card> */
        }
        <Button
          onClick={() => {
            setKpiPopup(true);
          }}
        >
          ADD NEW KPI
        </Button>
        <Modal size="5xl" isOpen={kpiPopup}>
          <ModalContent>
            {() => (
              <>
                <ModalBody>
                  <h1 style={{ fontSize: 34 }}>
                    New KPI <InformationTooltip content="New KPI" />
                  </h1>
                  <div
                    className="flex w-full justify-between px-8"
                    style={{ gap: 120 }}
                  >
                    <div className="w-1/2">
                      <div>KPI Title</div>
                      <InputField style={{ border: "none" }} />
                    </div>
                    <div className="w-1/2">
                      <div>KPI Description</div>
                      <InputField style={{ border: "none" }} />
                    </div>
                  </div>
                  <hr />
                  <h1 style={{ fontSize: 34 }}>
                    Tasks
                    <InformationTooltip content="Tasks" />
                  </h1>
                  <div
                    className="flex w-full justify-between px-8"
                    style={{ gap: 120 }}
                  >
                    <div className="w-1/2">
                      <div>Task name</div>
                      <InputField style={{ border: "none" }} />
                      <div>Type</div>
                      <SelectInputField />
                      <div>From</div>
                      <DateInputField />
                      <div>To</div>
                      <DateInputField />
                      <div>Description</div>
                      <InputField style={{ border: "none" }} />
                      <Button style={{ marginTop: "12px" }} color="primary">
                        ADD NEW TASK
                      </Button>
                    </div>
                    <div className="w-1/2">
                      <h2 style={{ fontSize: 34 }}>
                        Required Tasks{" "}
                        <InformationTooltip content="requiring" />
                      </h2>
                      <Card
                        style={{ backgroundColor: "#dad0ff", margin: "16px 0" }}
                        className="flex-row"
                      >
                        <div className="flex items-center justify-center h-full">
                          <ClipboardIcon />
                        </div>
                        <CardBody className="bg-white">
                          <div>Task 1</div>
                          <div>Example task</div>
                        </CardBody>
                      </Card>
                      <Card
                        style={{ backgroundColor: "#dad0ff", margin: "16px 0" }}
                        className="flex-row"
                      >
                        <div className="flex items-center justify-center h-full">
                          <ClipboardIcon />
                        </div>
                        <CardBody className="bg-white">
                          <div>Task 1</div>
                          <div>Example task</div>
                        </CardBody>
                      </Card>
                      <hr />
                      <h2 style={{ fontSize: 34 }}>
                        Optional Tasks
                        <InformationTooltip content="optional" />
                        <Select
                          label="Select number of tasks"
                          defaultSelectedKeys={"0"}
                        >
                          <SelectItem key="0">0</SelectItem>
                          <SelectItem>1</SelectItem>
                          <SelectItem>2</SelectItem>
                        </Select>
                      </h2>
                      <Card
                        style={{ backgroundColor: "#dad0ff", margin: "16px 0" }}
                        className="flex-row"
                      >
                        <div className="flex items-center justify-center h-full">
                          <ClipboardIcon />
                        </div>
                        <CardBody className="bg-white">
                          <div>Task 1</div>
                          <div>Example task</div>
                        </CardBody>
                      </Card>
                      <Card
                        style={{ backgroundColor: "#dad0ff", margin: "16px 0" }}
                        className="flex-row"
                      >
                        <div className="flex items-center justify-center h-full">
                          <ClipboardIcon />
                        </div>
                        <CardBody className="bg-white">
                          <div>Task 1</div>
                          <div>Example task</div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button onPress={() => setKpiPopup(false)}>Close</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AddNewGoalPage;
