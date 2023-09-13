import { useState } from "react";
import Sidebar from "./Sidebar";
import TaskList from "./TaskList";
import FormModal from "./FormModal";

function App() {

  const [taskLists, setTaskLists] = useState([
    {
      title: "Task list 1 title",
      cards: [
        {
          body: "Task card 1 body"
        },
        {
          body: "Task card 2 body"
        },
        {
          body: "Task card 3 body"
        },
      ]
    },
    {
      title: "Task list 2 title",
      cards: [
        {
          body: "Task card 4 body"
        },
        {
          body: "Task card 5 body"
        },
        {
          body: "Task card 6 body"
        },
      ]
    }
  ]);

  function addTaskList() {
    setTaskLists((previous) => {
      return [...previous, {
        title: "Task list 1 title",
        titleEditing: false,
        cards: [
          {
            body: "Task card 1 body"
          },
          {
            body: "Task card 2 body"
          },
          {
            body: "Task card 3 body"
          },
        ]
      }]
    });
  }

  function toggleEditTitle(id) {
    setTaskLists((previous) => {
      const task = previous[id];
      console.log("toggleEditTitle task", task);
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

  return (
    <div className="main">
      <Sidebar addTaskList={addTaskList} />
      <FormModal />
      <h1 className="title">Tasks Dashboard</h1>
      <div className="task-list-container">
        {taskLists.map((taskList, index) => {
          return (
            <TaskList
              id={index}
              key={index}
              title={taskList.title}
              titleEditing={taskList.titleEditing}
              titleToggleEditing={toggleEditTitle}
              titleUpdate={updateTitle}
              cards={taskList.cards} />
          )
        })}
      </div>
    </div>
  )

}

export default App
