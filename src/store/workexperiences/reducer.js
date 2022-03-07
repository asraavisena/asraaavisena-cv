// import { FETCH_PROGRAMMINGSKILLS } from "./actionType";

const initialState = {
  workExperiences: [
    {
      name: "CheQQme Sdn Bhd",
      location: "Selangor, Malaysia",
      duration: "March 2019 - August 2019",
      title: "Web Developer / Intern",
      responsibles:
        "I developed company website using Wordpress, PHP, CSS, HTML, jQuery and Angular Js. I did some Quality Assurance and some assignment about digital marketing. Lastly, I also learned how to hosting a web with Plesk.",
    },
    {
      name: "Sprout Digital Labs",
      location: "Tanggerang, Banten",
      duration: "October 2021 - now",
      title: "Software Engineer",
      responsibles:
        "Create, manage, maintain and develop websites/apps of Digital Sprout Lab's clients",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
