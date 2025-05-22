import { ReactComponent as SunIcon } from "../../Assets/sun.svg";
import { ReactComponent as MoonIcon } from "../../Assets/moon.svg";
import styles from "./DarkMode.module.css";

export const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        localStorage.setItem("selectedTheme", "dark");
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        localStorage.setItem("selectedTheme", "light");
    }

    const selectedTheme = localStorage.getItem("selectedTheme");

    if(selectedTheme === "dark") {
        setDarkMode();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }

    return (
        <div className={styles.dark_mode}>
            <input
                className={styles.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className={styles.dark_mode_label} htmlFor='darkmode-toggle'>
                <SunIcon className={styles.sun} />
                <MoonIcon className={styles.moon} />
            </label>
        </div>
    );
};

