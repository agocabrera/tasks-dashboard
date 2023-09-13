import TaskCard from "./TaskCard";

function TaskList(props) {

    function handleTitleChange(event) {
        const value = event.target.value;
        props.titleUpdate(props.id, value);
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
                        className="material-symbols-outlined edit-tl-title"
                        onClick={() => props.titleToggleEditing(props.id)}>
                        edit
                    </span>
                </div>
                <div className="task-list-body">
                    {props.cards.map((card, index) => {
                        return (<TaskCard key={index} body={card.body} />)
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
