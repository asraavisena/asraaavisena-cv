import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import { Provider } from "react-redux";
import ReactGA from "react-ga";
import store from "./store";
import Educations from "./components/Educations/Educations";
// import Portofolios from "./components/Portofolios/Portofolios";
import WorkExperiences from "./components/WorkExperiences/WorkExperiences";
import { useEffect } from "react";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Provider store={store}>
      <div className="bg-gray-100 dark:bg-gray-600 pb-10 w-full">
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
