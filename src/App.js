import Header from "./components/header/Header";
import Home from "./pages/Home";
//Theme
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
