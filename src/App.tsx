import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";

import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Learn React
        </header>
      </div>
    </ThemeProvider>
  );
}
