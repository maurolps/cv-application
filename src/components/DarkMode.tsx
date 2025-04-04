import { svgSun, svgMoon } from "./Svgs";
import "../styles/darkmode.css";

const DarkMode = () => {
  const darkMode = () => {
    document.getElementById("root")?.setAttribute("data-theme", "dark");
  };
  const lightMode = () => {
    document.getElementById("root")?.setAttribute("data-theme", "light");
  };
  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) darkMode();
    else lightMode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        defaultChecked={true}
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        {svgSun}
        {svgMoon}
      </label>
    </div>
  );
};

export default DarkMode;
