import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import { Provider } from "react-redux";
import store from "./store";
import Educations from "./components/Educations/Educations";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 pb-10">
        <Navbar />
        <AboutMe />
        <Skills />
        <Educations />
      </div>
    </Provider>
  );
}

export default App;
