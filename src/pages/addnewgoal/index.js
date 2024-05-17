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

  const handleAddToList = (item) => {
    setList;
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  // list contains goals
  // list = [ {task = [{name, type, fromDate, toDate, description} ], title, fromDate, toDate, role, hashtag, description} ]
  //
  return (
    <div className="flex-container flex justify-between">
      <div classname="goal-menu flex flex-row " style={{ width: 540 }}>
        <form
          onSubmit={handleAddToList}
          classname="goal-menu flex flex-row w-full"
        >
          <h2>New Goal</h2>
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
          {/*<Inpu t
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
        <Button>Add Goal</Button>
      </div>
      <div
        className="kpi-menu flex flex-col item-center"
        style={{ width: 320 }}
      >
        <h2>KPI</h2>
        <Card>
          <CardBody>
            <p>Goal 1</p>
          </CardBody>
        </Card>
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
                  <h1>New KPI</h1>
                  <div
                    className="flex w-full justify-between px-8"
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
                    className="flex w-full justify-between px-8"
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
                      <Button color="primary">ADD NEW TASK</Button>
                    </div>
                    <div className="w-1/2">
                      <h2>Required Tasks</h2>
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
                      <h2>Optional Tasks</h2>
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
