function FormInput(props) {

    return (
        <div className="input-group">
            <label htmlFor={props.name}>
                {props.label}
            </label>
            <input
                id={props.name}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                pattern={props.pattern}
                onChange={props.onChange}
            />
            <div className="input-error-msg">
                {props.errorMessage}
            </div>
        </div>
    )
}

export default FormInput