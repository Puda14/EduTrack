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
  ModalHeader,
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
  const taskList = {
    required: [],
    optional: [],
  };
  const [list, setList] = useState(
    typeof window !== "undefined" ? localStorage.getItem("goalList") : []
  );
  const [input, setInput] = useState("");
  const [kpiPopup, setKpiPopup] = useState(false);
  const [cardPopup, setCardPopup] = useState(false);
  const [task, setTask] = useState(taskList);
  const [KPI, setKPI] = useState([]);

  const checkFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const goalWorkbook = XLSX.read(data);
    const goalSheet = goalWorkbook.Sheets[goalWorkbook.SheetNames[0]];
    const goalJSON = XLSX.utils.sheet_to_json(goalSheet);
    const KPIFilter = new Set([]);
    const KPIList = [];

    goalJSON.forEach((item) => {
      KPIFilter.add(item.KPI);
    });
    KPIFilter.forEach((KPI) => {
      KPIList.push({ KPI: KPI, task: { required: [], optional: [] } });
    });
    goalJSON.forEach((item) => {
      KPIList.some((i) => {
        i.KPI === item.KPI
          ? item.Type === "Required"
            ? i.task.required.push(item.Task)
            : i.task.optional.push(item.Task)
          : "";
      });
      item.Type === "Required"
        ? taskList.required.push({
            task: item.Task,
            from: item.From,
            to: item.To,
            link: item.Link,
            description: item.Description,
          })
        : taskList.optional.push({
            task: item.Task,
            from: item.From,
            to: item.To,
            link: item.Link,
            description: item.Description,
          });
    });
    setKPI(KPIList);
    setTask(taskList);
    console.log(taskList);
    console.log(KPIList);
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
    <div className="flex flex-col px-5 w-full md:grid grid-cols-5">
      <div
        className="flex flex-col justify-center goal-menu md:col-span-3"
        style={{ width: 500 }}
      >
        <form
          onSubmit={handleAddToList}
          classname="flex flex-row w-full goal-menu"
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
            <Button
              style={{
                margin: "0px 15px",
                backgroundColor: "#8380fe",
                color: "white",
              }}
            >
              <label for="excel-input">Import</label>
            </Button>
            <Button color="primary" style={{ backgroundColor: "#8380fe" }}>
              Export
            </Button>
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
          style={{
            margin: "32px 0",
            backgroundColor: "#8380fe",
            color: "white",
          }}
        >
          Add Goal
        </Button>
      </div>
      <div
        className="flex flex-col kpi-menu item-center"
        style={{ width: 300 }}
      >
        <h2 style={{ fontSize: 34, display: "flex", alignItems: "center" }}>
          KPI <InformationTooltip content={"KPI"} />
        </h2>
        {
          KPI.map((item) => {
            return (
              <Card
                style={{ backgroundColor: "#dad0ff", margin: "16px 0" }}
                className="flex-row"
                key={item.KPI}
              >
                <div className="flex items-center justify-center h-full">
                  <ClipboardIcon />
                </div>
                <CardBody className="bg-white">
                  <div>{item.KPI}</div>
                  <div></div>
                  <Button onClick={setCardPopup}>Information</Button>
                </CardBody>
                <Modal size="5xl" isOpen={cardPopup}>
                  <ModalContent>
                    {() => (
                      <>
                        <ModalHeader>Fixing overflow</ModalHeader>
                        <ModalBody className="modal-body">
                          <h1
                            style={{
                              fontSize: 34,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            New KPI <InformationTooltip content="New KPI" />
                          </h1>
                          <div
                            className="flex justify-between w-full px-8 kpi-info-menu"
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
                          <h1
                            style={{
                              fontSize: 34,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Tasks
                            <InformationTooltip content="Tasks" />
                          </h1>
                          <div
                            className="flex justify-between w-full px-8 task-menu"
                            style={{ gap: 120 }}
                          >
                            <div className="w-1/2 child-menu">
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
                              <Button
                                style={{ marginTop: "12px" }}
                                color="primary"
                              >
                                ADD NEW TASK
                              </Button>
                            </div>
                            <div className="w-1/2 child-menu">
                              <h2
                                style={{
                                  fontSize: 34,
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                Required Tasks{" "}
                                <InformationTooltip content="requiring" />
                              </h2>
                              {item.task.required.map((i) => {
                                return (
                                  <Card
                                    style={{
                                      backgroundColor: "#dad0ff",
                                      margin: "16px 0",
                                    }}
                                    className="flex-row"
                                  >
                                    <div className="flex items-center justify-center h-full">
                                      <ClipboardIcon />
                                    </div>
                                    <CardBody className="bg-white">
                                      <h3 style={{ fontSize: 20 }}>{i}</h3>
                                    </CardBody>
                                  </Card>
                                );
                              })}
                              <hr />
                              <h2
                                style={{
                                  fontSize: 34,
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                Optional Tasks
                                <InformationTooltip content="optional" />
                              </h2>
                              <Select
                                label="Select number of tasks"
                                defaultSelectedKeys={"0"}
                              >
                                <SelectItem key="0">0</SelectItem>
                                <SelectItem>1</SelectItem>
                                <SelectItem>2</SelectItem>
                              </Select>
                              {item.task.optional.map((i) => {
                                return (
                                  <Card
                                    style={{
                                      backgroundColor: "#dad0ff",
                                      margin: "16px 0",
                                    }}
                                    className="flex-row"
                                  >
                                    <div className="flex items-center justify-center h-full">
                                      <ClipboardIcon />
                                    </div>
                                    <CardBody className="bg-white">
                                      <h3 style={{ fontSize: 20 }}>{i}</h3>
                                    </CardBody>
                                  </Card>
                                );
                              })}
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button onPress={() => setCardPopup(false)}>
                            Close
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
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
          style={{ backgroundColor: "#8380fe", color: "white" }}
        >
          ADD NEW KPI
        </Button>
        <Modal size="5xl" isOpen={kpiPopup}>
          <ModalHeader>Fixing overflow</ModalHeader>
          <ModalContent>
            {() => (
              <>
                <ModalBody className="modal-body">
                  <h1
                    style={{
                      fontSize: 34,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    New KPI <InformationTooltip content="New KPI" />
                  </h1>
                  <div
                    className="flex justify-between w-full px-8 kpi-info-menu"
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
                  <h1
                    style={{
                      fontSize: 34,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Tasks
                    <InformationTooltip content="Tasks" />
                  </h1>
                  <div
                    className="flex justify-between w-full px-8 task-menu"
                    style={{ gap: 120 }}
                  >
                    <div className="w-1/2 child-menu">
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
                    <div className="w-1/2 child-menu">
                      <h2
                        style={{
                          fontSize: 34,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Required Tasks{" "}
                        <InformationTooltip content="requiring" />
                      </h2>
                      {task.required.map((i) => {
                        return (
                          <Card
                            style={{
                              backgroundColor: "#dad0ff",
                              margin: "16px 0",
                            }}
                            className="flex-row"
                          >
                            <div className="flex items-center justify-center h-full">
                              <ClipboardIcon />
                            </div>
                            <CardBody className="bg-white">
                              <h3 style={{ fontSize: 20 }}>{i.task}</h3>
                              <div>{i.description}</div>
                            </CardBody>
                          </Card>
                        );
                      })}
                      {/*    <Card
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
                      </Card> */}
                      <hr />
                      <h2
                        style={{
                          fontSize: 34,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Optional Tasks
                        <InformationTooltip content="optional" />
                      </h2>
                      <Select
                        label="Select number of tasks"
                        defaultSelectedKeys={"0"}
                      >
                        <SelectItem key="0">0</SelectItem>
                        <SelectItem>1</SelectItem>
                        <SelectItem>2</SelectItem>
                      </Select>
                      {task.optional.map((i) => {
                        return (
                          <Card
                            style={{
                              backgroundColor: "#dad0ff",
                              margin: "16px 0",
                            }}
                            className="flex-row"
                          >
                            <div className="flex items-center justify-center h-full">
                              <ClipboardIcon />
                            </div>
                            <CardBody className="bg-white">
                              <h3 style={{ fontSize: 20 }}>{i.task}</h3>
                              <div>{i.description}</div>
                            </CardBody>
                          </Card>
                        );
                      })}
                      {/* <Card
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
                      </Card> */}
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
