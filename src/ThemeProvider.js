import React from "react";
import AppContext from "./Context";

const { ThemeContext } = AppContext;

class ThemeProvider extends React.Component {
  state = { theme: "light" };
  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <button onClick={this.toggleTheme}>toggle theme</button>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
