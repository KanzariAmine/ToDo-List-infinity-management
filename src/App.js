import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Card from "./components/card/Card";
import ListTache from "./pages/listTache/ListTache";
//Theme
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
//Context API
import ContextProvider from "./context/tacheContext";
const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Home />
          <ListTache />
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
