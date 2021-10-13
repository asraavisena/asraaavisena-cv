import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import { Provider } from "react-redux";
import store from "./store";
import Educations from "./components/Educations/Educations";
// import Portofolios from "./components/Portofolios/Portofolios";
import WorkExperiences from "./components/WorkExperiences/WorkExperiences";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 pb-10">
        <Navbar />
        <AboutMe />
        <WorkExperiences />
        <Skills />
        <Educations />
        {/* <Portofolios /> */}
      </div>
    </Provider>
  );
}

export default App;
