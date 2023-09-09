import React from "react"

function Sidebar() {

    const [darkTheme, setDarkTheme] = React.useState(true);

    function toggleTheme(event) {

        setDarkTheme((previousTheme) => {
            const newTheme = !previousTheme;
            const root = document.querySelector(":root");

            event.target.innerText = newTheme === true ? "light_mode" : "dark_mode";
            root.style.setProperty("--color-text", newTheme === true ? "#FFFFFF" : "#000000");
            root.style.setProperty("--color-background", newTheme === true ? "#0F0F0F" : "#FFFFFF");
            root.style.setProperty("--color-a", newTheme === true ? "#1D1D1D" : "#C0C0C0");
            root.style.setProperty("--color-c", newTheme === true ? "#3B3B3B" : "#E6E6E6");

            return newTheme;
        });

    }

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <button
                        id="new-tl-btn"
                        className="material-symbols-outlined"
                        title="New task list">
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
