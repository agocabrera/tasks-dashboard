import { useState } from "react";
import TaskCard from "./TaskCard";

function TaskList(props) {

    const [tasks, setTasks] = useState([]);

    function handleTitleChange(event) {
        const value = event.target.value;
        props.titleUpdate(props.id, value);
    }

    function addTask() {
        setTasks((previous) => {
            previous.push({
                body: "Something to do...",
                bodyEditing: false
            });
            return [...previous];
        });
    }

    function toggleEditBody(id) {
        return setTasks((previous) => previous.map((task, index) => {
            if (index === id) {
                return { ...task, bodyEditing: !task.bodyEditing }
            } else {
                return task;
            }
        }));

    }

    function updateBody(id, value) {
        setTasks((previous) => {
            return previous.map((task, index) => {
                if (index === id) {
                    return { ...task, body: value };
                } else {
                    return task;
                }
            });
        });
    }

    function deleteTask(id) {
        setTasks((previous) => {
            return previous.filter((task, index) => index !== id);
        });
    }

    return (
        <>
            <div className="task-list">
                <div className="tl-title-wrapper">
                    {props.titleEditing ?
                        <input
                            className="tl-title-input"
                            type="text"
                            defaultValue={props.title}
                            onChange={handleTitleChange}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.target.blur();
                                    props.titleToggleEditing(props.id);
                                }
                            }} /> :
                        <div className="task-list-title">{props.title}</div>}
                    <span
                        className="material-symbols-outlined tl-edit-title"
                        onClick={() => props.titleToggleEditing(props.id)}>
                        edit
                    </span>
                    <span
                        className="material-symbols-outlined tl-delete"
                        onClick={() => props.taskListDelete(props.id)}>
                        delete
                    </span>
                </div>
                <div className="task-list-body">
                    {tasks.map((task, index) => {
                        return (<TaskCard
                            key={index}
                            id={index}
                            body={task.body}
                            bodyEditing={task.bodyEditing}
                            bodyToggleEditing={toggleEditBody}
                            bodyUpdate={updateBody}
                            taskDelete={deleteTask} />)
                    })}
                </div>
                <div className="task-list-footer">
                    <button className="new-task-btn" onClick={addTask}>
                        <span className="material-symbols-outlined">add</span>New task
                    </button>
                </div>
            </div>
        </>
    )
}

export default TaskList;
