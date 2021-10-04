import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <AboutMe />
        <Skills />
      </div>
    </Provider>
  );
}

export default App;
