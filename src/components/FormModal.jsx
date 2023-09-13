import { useState } from "react";
import FormInput from "./FormInput";

function FormModal() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const formInputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            label: "Username",
            placeholder: "Username",
            required: true,
            pattern: "^[a-zA-Z0-9]{3,15}$",
            errorMessage: "Must be between 3 and 15 characters long, with no symbols."
        },
        {
            id: 2,
            name: "email",
            type: "email",
            label: "E-mail",
            placeholder: "E-mail",
            required: true,
            pattern: undefined,
            errorMessage: "Must be a valid e-mail address."
        },
        {
            id: 3,
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "Password",
            required: true,
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$",
            errorMessage: "Must be at least 8 characters long and contain at least one number and one letter."
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            label: "Confirm password",
            placeholder: "Confirm password",
            required: true,
            pattern: formData.password,
            errorMessage: "Must match password."
        }
    ];

    function handleInputChange(event) {
        setFormData((previousData) => {
            return { ...previousData, [event.target.name]: event.target.value }
        });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
    }

    function closeRegisterModal() {
        const modal = document.querySelector("#form-modal");
        modal.style.display = "none";
    }

    return (
        <div id="form-modal">
            <div className="modal-body">
                <span id="modal-close-btn" className="material-symbols-outlined" onClick={closeRegisterModal}>close</span>
                <h2>Register</h2>
                <form onSubmit={handleFormSubmit}>
                    {formInputs.map((input) => {
                        return <FormInput
                            key={input.id}
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            placeholder={input.placeholder}
                            required={input.required}
                            pattern={input.pattern}
                            errorMessage={input.errorMessage}
                            value={formData[input.name]}
                            onChange={handleInputChange} />
                    })}
                    <button id="form-submit-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default FormModal;