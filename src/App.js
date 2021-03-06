import "./App.css";
import AboutMe from "./components/Contents/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Contents/Skills/Skills";
import { Provider } from "react-redux";
import ReactGA from "react-ga";
import store from "./store";
import Footer from "./components/Footer";
import Educations from "./components/Contents/Educations/Educations";
// import Portofolios from "./components/Portofolios/Portofolios";
import WorkExperiences from "./components/Contents/WorkExperiences/WorkExperiences";
import ContactForm from "./components/ContactForm/ContactForm";
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
        <ContactForm />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
