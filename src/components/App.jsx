import { useState } from "react";
import Sidebar from "./Sidebar";
import TaskList from "./TaskList";
import FormModal from "./FormModal";

function App() {

  const [taskLists, setTaskLists] = useState([]);

  function addTaskList() {
    setTaskLists((previous) => {
      return [...previous, {
        title: `Task list ${previous.length + 1}`,
        titleEditing: false
      }]
    });
  }

  function toggleEditTitle(id) {
    setTaskLists((previous) => {
      const task = previous[id];
      task.titleEditing = !task.titleEditing;
      return [...previous];
    });
  }

  function updateTitle(id, value) {
    setTaskLists((previous) => {
      previous[id].title = value;
      return [...previous];
    });
  }

  function deleteTaskList(id) {
    setTaskLists((previous) => {
      previous.splice(id, 1);
      return [...previous];
    });
  }

  return (
    <div className="main">
      <Sidebar addTaskList={addTaskList} />
      <FormModal />
      <h1 className="title">Tasks Dashboard</h1>
      <div className="task-list-container">
        {taskLists.map((taskList, index) => {
          return (<TaskList
            id={index}
            key={index}
            title={taskList.title}
            titleEditing={taskList.titleEditing}
            titleToggleEditing={toggleEditTitle}
            titleUpdate={updateTitle}
            taskListDelete={deleteTaskList} />)
        })}
      </div>
    </div>
  )

}

export default App
