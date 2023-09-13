import React from "react"

function Sidebar(props) {

    const [darkTheme, setDarkTheme] = React.useState(true);

    function toggleTheme(event) {

        setDarkTheme((previousTheme) => {
            const newTheme = !previousTheme;
            const root = document.querySelector(":root");

            event.target.innerText = newTheme === true ? "light_mode" : "dark_mode";
            root.style.setProperty("--color-text", newTheme === true ? "#FFFFFF" : "#000000");
            root.style.setProperty("--color-background", newTheme === true ? "#0F0F0F" : "#FFFFFF");
            root.style.setProperty("--color-a", newTheme === true ? "#1D1D1D" : "#D1D1D1");
            root.style.setProperty("--color-b", newTheme === true ? "#3B3B3B" : "#C2C2C2");

            return newTheme;
        });

    }

    function openRegisterModal() {
        const modal = document.querySelector("#form-modal");
        modal.style.display = "block";
    }

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <button
                        id="register-btn"
                        className="material-symbols-outlined"
                        title="Register"
                        onClick={openRegisterModal}>
                        key
                    </button>
                </li>
                <li>
                    <button
                        id="new-tl-btn"
                        className="material-symbols-outlined"
                        title="New task list"
                        onClick={props.addTaskList}>
                        add
                    </button>
                </li>
                <li>
                    <button
                        id="color-toggle-btn"
                        className="material-symbols-outlined"
                        title="Toggle between dark and light theme"
                        onClick={toggleTheme}>
                        light_mode
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
