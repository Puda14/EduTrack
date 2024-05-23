import GoalDone from "../charts/cards/GoalDone";
import NewTask from "../charts/cards/NewTask";
import TaskCompleted from "../charts/cards/TaskCompleted";
export default function TaskRate() {
  return (
    <div>
      <div className="hidden grid-cols-3 sm:grid">
        <div>
          <TaskCompleted />
        </div>
        <div>
          <NewTask />
        </div>
        <div>
          <GoalDone />
        </div>
      </div>
    </div>
  );
}
