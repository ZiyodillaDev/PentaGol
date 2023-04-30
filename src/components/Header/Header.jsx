import "./header.scss";
import logo from "../../assets/images2/logo.svg";
import moon from "../../assets/images2/moon.svg";
import sun from "../../assets/images2/sun.svg";
import { useState } from "react";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [theme, setThemes] = useState(
      localStorage.getItem("mode") || "light"
    );
    if (document.body.classList == "body") {
      document.body.classList.add(localStorage.getItem("mode"));
    } else if (theme == "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else if (theme == "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
    const handleClick = (evt) => {
      evt.target.classList.toggle("active");
      if (!darkMode) {
        setThemes("light");
      } else {
        setThemes("dark");
      }
    };
  
  return (
    <header className="header">
      <div className="container header_div">
        <img className="logo" src={logo} alt="logo" />
        <button className="dark-light" onClick={(evt) => handleClick(evt)}>
          <img className="moon" src={moon} alt="moon" />
        </button>
      </div>
    </header>
  );
};
