function TaskCard(props) {

    function handleBodyChange(e) {
        const value = e.target.value;
        props.bodyUpdate(props.id, value);
    }

    return (
        <div className="task-card">
            {props.bodyEditing ? <input
                className="task-input"
                type="text"
                defaultValue={props.body}
                onChange={handleBodyChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.target.blur();
                        props.bodyToggleEditing(props.id);
                    }
                }} /> :
                <div className="task-card-body">
                    {props.body}
                </div>}

            <span
                className="material-symbols-outlined task-edit"
                onClick={() => props.bodyToggleEditing(props.id)}>
                edit
            </span>
            <span
                className="material-symbols-outlined task-delete"
                onClick={() => props.taskDelete(props.id)}>
                delete
            </span>
        </div>
    )
}

export default TaskCard;
