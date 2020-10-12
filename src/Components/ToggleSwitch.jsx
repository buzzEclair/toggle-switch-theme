import React, { useContext, useState } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { light, dark } from "../GlobalStyle/GlobalStyle";

const ToggleSwitch = () => {
  const [styleToggleSwitch, setStyleToggleSwitch] = useState({
    marginLeft: "0px",
    background: "rgb(14, 14, 14)"
  });
  const [styleToggle, setStyleToggle] = useState({});

  const { setTheme } = useContext(ThemeContext);

  // Function onClick - handleClick
  const handleClick = () => {
    if (styleToggleSwitch.marginLeft === "0px") {
      setStyleToggleSwitch({
        ...styleToggleSwitch,
        marginLeft: "30px",
        background: "white"
      });
      setTheme(dark);
      setStyleToggle({ border: "1px solid white" });
    } else {
      setStyleToggleSwitch({
        ...styleToggleSwitch,
        marginLeft: "0px",
        background: "rgb(14, 14, 14)"
      });
      setTheme(light);
      setStyleToggle({ border: "1px solid rgb(14, 14, 14)" });
    }
  };

  return (
    <>
      <div className="toggle-switch" style={styleToggle}>
        <div
          onClick={handleClick}
          className="item"
          style={styleToggleSwitch}
        ></div>
      </div>
    </>
  );
};

export default ToggleSwitch;
