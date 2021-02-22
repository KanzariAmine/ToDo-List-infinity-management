import { BrowserRouter as Router, Link, Route } from "react-router-dom";
//Component
import Header from "./components/header/Header";
import Taches from "./pages/taches/Taches";
import Home from "./pages/home/Home";
import PrivateRoute from "./PrivateRoute";
//Theme
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
//Context API
import ContextProvider from "./context/tacheContext";
import ContextAuthProvider from "./context/authContext";

const App = () => {
  return (
    <Router>
      <ContextAuthProvider>
        <ContextProvider>
          <ThemeProvider theme={theme}>
            <div className="App">
              <Header />
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/taches" component={Taches} />
            </div>
          </ThemeProvider>
        </ContextProvider>
      </ContextAuthProvider>
    </Router>
  );
};

export default App;
