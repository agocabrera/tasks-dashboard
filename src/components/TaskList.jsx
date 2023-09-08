import TaskCard from "./TaskCard";


function TaskList(props) {

    return (
        <>
            <div className="task-list">
                <div className="task-list-title">{props.title}</div>
                <div className="task-list-body">
                    {props.cards.map((card, index) => {
                        return (<TaskCard key={index} body={card.body}></TaskCard>)
                    })}
                </div>
                <div className="task-list-footer">
                    <button className="new-task-btn">
                        <span className="material-symbols-outlined">add</span>New task
                    </button>
                </div>
            </div>
        </>
    )
}

export default TaskList;
