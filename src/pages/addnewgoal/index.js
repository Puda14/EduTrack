import { ClipboardIcon } from "@/app/components/icons/ClipboardIcon";
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
} from "@nextui-org/react";
import { Button, Card } from "@nextui-org/react";
import { useState } from "react";

const AddNewGoalPage = () => {
  const [list, setList] = useState([]);
  const [kpiPopup, setKpiPopup] = useState(false);

  const handleAddToList = (item) => {
    setList;
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
          <Input style={{ border: "none" }} placeholder="Please enter here" />
          <div>From</div>
          <DateInput />
          <div>To</div>
          <DateInput />
          <div>Role</div>
          <Input style={{ border: "none" }} placeholder="Choose your role" />
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
                  <div className="flex w-full justify-between px-8">
                    <div className="w-1/2">
                      <div>KPI Title</div>
                      <Input />
                    </div>
                    <div className="w-1/2">
                      <div>KPI Description</div>
                      <Input />
                    </div>
                  </div>
                  <hr />
                  <h1>Tasks</h1>
                  <div className="flex w-full justify-between px-8">
                    <div className="w-1/2">
                      <div>
                        <span>Import File Excel</span>
                        <Button color="primary">Import</Button>
                        <Button color="primary">Export</Button>
                      </div>
                      <div>Task name</div>
                      <Input />
                      <div>Type</div>
                      <Input />
                      <div>From</div>
                      <DateInput />
                      <div>To</div>
                      <DateInput />
                      <div>Description</div>
                      <Input />
                      <Button color="primary">ADD NEW TASK</Button>
                    </div>
                    <div className="w-1/2">
                      <h2>Required Tasks</h2>
                      <Card
                        style={{ backgroundColor: "#dad0ff" }}
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
                        style={{ backgroundColor: "#dad0ff" }}
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
                        style={{ backgroundColor: "#dad0ff" }}
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
                        style={{ backgroundColor: "#dad0ff" }}
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
