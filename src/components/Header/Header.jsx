import "./header.scss";
import "../../assets/styles/main.scss";
import logo from "../../assets/images2/logo.svg";
import moon from "../../assets/images2/moon.svg";
import sun from "../../assets/images2/sun.svg";
import { useState } from "react";

export const Header = () => {
  const [state, setState] = useState(true);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    console.log(321);
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("light");
    } else {
      setTheme("light");
      document.body.classList.add("dark");
    }
    if (document.body.classList == "body") {
    } else if (theme == "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else if (theme == "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  return (
    <header className="header ">
      <div className="container header_div">
        <img className="logo" src={logo} alt="logo" />
        <button className="dark-light" onClick={toggleTheme}>
          <img className="moon" src={moon} alt="moon" />
        </button>
      </div>
    </header>
  );
};
