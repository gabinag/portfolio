import { useEffect, useState } from "react";
import { ReactComponent as SunIcon } from "../../Assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../Assets/icons/moon.svg";
import { DarkModeContainer } from "./DarkModeStyles";

export const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme");

        if (selectedTheme === "dark") {
            document.body.setAttribute("data-theme", "dark");
            setIsDarkMode(true);
        } else {
            document.body.setAttribute("data-theme", "light");
            setIsDarkMode(false); 
            localStorage.setItem("selectedTheme", "light"); 
        }
    }, []);

    const toggleTheme = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("selectedTheme", "dark");
            setIsDarkMode(true);
        } else {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("selectedTheme", "light");
            setIsDarkMode(false);
        }
    };

    return (
        <DarkModeContainer>
            <input
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                checked={isDarkMode}
            />
            <label htmlFor='darkmode-toggle'>
                <SunIcon className="sun" />
                <MoonIcon className="moon" />
            </label>
        </DarkModeContainer>
    );
};

