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
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Button, Card } from "@nextui-org/react";
import { useState } from "react";

const AddNewGoalPage = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [kpiPopup, setKpiPopup] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleAddToList = (item) => {
    setList((prevList) => [...prevList, item]);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleAddTask = () => {
    const newTask = {
      title: "Task Title",
      description: "Task Description",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="flex items-center justify-center pt-5">
      <div className="flex flex-col pr-5 goal-menu" style={{ width: 500 }}>
        <form
          onSubmit={handleAddToList}
          className="flex flex-col w-full goal-menu"
        >
          <h2 className="pt-4 pb-5 text-2xl">
            {" "}
            <b>New Goal</b>
          </h2>
          <div>Title</div>
          {/* <Input
            style={{ border: "none" }}
            placeholder="Please enter here"
            onChange={handleInputChange}
            value={input}
          /> */}
          <InputField name="Title" style={{ border: "none" }} />
          <div>From</div>
          <DateInput />
          <div>To</div>
          <DateInput />
          <div>Role</div>
          {/*<Input
            style={{ border: "none" }}
            placeholder="Choose your role"
            value={input}
          /> */}
          <InputField name="Role" style={{ border: "none" }} />
          <div>Description</div>
          <Input
            style={{ border: "none" }}
            placeholder="Please enter description (/250)"
          />
        </form>{" "}
        <div className="pt-5">
          {" "}
          <Button style={{ backgroundColor: "#8380fe" }}>Add Goal</Button>
        </div>
      </div>
      <div
        className="flex flex-col pl-5 ml-5 kpi-menu item-center"
        style={{ width: 320 }}
      >
        <h2>KPI</h2>
        <Card className="mb-5">
          <CardBody>
            <p>Goal 1</p>
          </CardBody>
        </Card>
        <Button
          onClick={() => {
            setKpiPopup(true);
          }}
          style={{ backgroundColor: "#8380fe" }}
        >
          ADD NEW KPI
        </Button>
        <Modal size="5xl" isOpen={kpiPopup}>
          <ModalContent>
            {() => (
              <>
                <ModalBody>
                  <h1>New KPI</h1>
                  <div
                    className="flex justify-between w-full px-8"
                    style={{ gap: 120 }}
                  >
                    <div className="w-1/2">
                      <div>KPI Title</div>
                      <Input style={{ border: "none" }} />
                    </div>
                    <div className="w-1/2">
                      <div>KPI Description</div>
                      <Input style={{ border: "none" }} />
                    </div>
                  </div>
                  <hr />
                  <h1>Tasks</h1>
                  <div
                    className="flex justify-between w-full px-8"
                    style={{ gap: 120 }}
                  >
                    <div className="w-1/2">
                      <div>
                        <span>Import File Excel</span>
                        <Button color="primary" style={{ margin: "0 32px" }}>
                          Import
                        </Button>
                        <Button color="primary">Export</Button>
                      </div>
                      <div>Task name</div>
                      <Input style={{ border: "none" }} />
                      <div>Type</div>
                      <Select>
                        <SelectItem>Required</SelectItem>
                        <SelectItem>Optional</SelectItem>
                      </Select>
                      <div>From</div>
                      <DateInput />
                      <div>To</div>
                      <DateInput />
                      <div>Description</div>
                      <Input style={{ border: "none" }} />
                      <Button color="primary" onClick={handleAddTask}>
                        ADD NEW TASK
                      </Button>
                    </div>
                    <div className="w-1/2">
                      <h2>Required Tasks</h2>
                      {tasks.map((task, index) => (
                        <Card
                          key={index}
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
                            <div>{task.title}</div>
                            <div>{task.description}</div>
                          </CardBody>
                        </Card>
                      ))}
                      <hr />
                      <h2>Optional Tasks</h2>
                      {tasks.map((task, index) => (
                        <Card
                          key={index}
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
                            <div>{task.title}</div>
                            <div>{task.description}</div>
                          </CardBody>
                        </Card>
                      ))}
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
