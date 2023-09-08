import { useState } from "react";
import Sidebar from "./Sidebar"
import TaskCard from "./TaskCard"
import TaskList from "./TaskList"

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

  return (
    <div className="main">
      <h1 className="title">Tasks Dashboard</h1>
      <Sidebar></Sidebar>
      <div className="task-list-container">
        {taskLists.map((taskList, index) => {
          return (
            <TaskList key={index} title={taskList.title} cards={taskList.cards}>
            </TaskList>
          )
        })}
      </div>
    </div>
  )

}

export default App
