import React, { Component } from "react";

import "./App.css";
import AppContext from "./Context";
import ThemeProvider from "./ThemeProvider";

const { ThemeContext } = AppContext;

const ThemeConsumer = ThemeContext.Consumer;

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeConsumer>
          {theme => <div style={styles[theme]}>{theme}</div>}
        </ThemeConsumer>
      </ThemeProvider>
    );
  }
}

const styles = {
  dark: {
    backgroundColor: "black",
    color: "white"
  },
  light: {
    backgroundColor: "white",
    color: "black"
  }
};

export default App;
