// import { FETCH_PROGRAMMINGSKILLS } from "./actionType";

const initialState = {
  educations: [
    {
      education: {
        date: "07 June 2021 - 24 September 2021",
        description:
          "Participate in Hacktiv8 Bootcamp for Fullstack Javascript Immersive, with the grade 97.29 and predicate 'HONORS'",
      },
    },
    {
      education: {
        date: "October 2015 - June 2020",
        description:
          "International Media Computing at University of Applied Science Berlin, Germany (B.Sc)",
      },
    },
    {
      education: {
        date: "2013 - 2014",
        description:
          "Studienkolleg / Preperation for International Student to study in Germany - Hochschule Aanhalt Koethen, Germany",
      },
    },
    {
      education: {
        date: "2009 - 2012",
        description: "Senior high school at SMAN 3 Depok",
      },
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
