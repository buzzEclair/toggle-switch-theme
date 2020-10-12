import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import "./Scss/Styles.scss";
import ThemeContext from "./Contexts/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState({});

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" style={theme}>
        <HashRouter>
          <Switch>
            <Route path="" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    </ThemeContext.Provider>
  );
}
