// import { FETCH_PROGRAMMINGSKILLS } from "./actionType";

const initialState = {
  progSkills: [
    {
      skills: {
        name: "html",
        rating: 91,
      },
    },
    {
      skills: {
        name: "css",
        rating: 86,
      },
    },
    {
      skills: {
        name: "javascript",
        rating: 95,
      },
    },
    {
      skills: {
        name: "java",
        rating: 66,
      },
    },
    {
      skills: {
        name: "php",
        rating: 85,
      },
    },
    {
      skills: {
        name: "ruby",
        rating: 76,
      },
    },
  ],
  frontEnd: [
    {
      skills: {
        name: "sass",
        rating: 75,
      },
    },
    {
      skills: {
        name: "bootstrap",
        rating: 87,
      },
    },
    {
      skills: {
        name: "tailwind",
        rating: 93,
      },
    },
    {
      skills: {
        name: "jquery",
        rating: 85,
      },
    },
    {
      skills: {
        name: "react",
        rating: 90,
      },
    },
    {
      skills: {
        name: "redux",
        rating: 88,
      },
    },
    {
      skills: {
        name: "react native",
        rating: 80,
      },
    },
    {
      skills: {
        name: "expo",
        rating: 77,
      },
    },
    {
      skills: {
        name: "vue",
        rating: 87,
      },
    },
    {
      skills: {
        name: "redux",
        rating: 87,
      },
    },
  ],
  backEnd: [
    {
      skills: {
        name: "node js",
        rating: 95,
      },
    },
    {
      skills: {
        name: "ruby on rails",
        rating: 78,
      },
    },
    {
      skills: {
        name: "express",
        rating: 89,
      },
    },
    {
      skills: {
        name: "laravel",
        rating: 85,
      },
    },
    {
      skills: {
        name: "mongoDb",
        rating: 87,
      },
    },
    {
      skills: {
        name: "mongoose",
        rating: 84,
      },
    },
    {
      skills: {
        name: "rest api",
        rating: 89,
      },
    },
    {
      skills: {
        name: "graphQl",
        rating: 80,
      },
    },
    {
      skills: {
        name: "apollo",
        rating: 80,
      },
    },
    {
      skills: {
        name: "sequelize",
        rating: 86,
      },
    },
    {
      skills: {
        name: "postgresql",
        rating: 88,
      },
    },
    {
      skills: {
        name: "mysql",
        rating: 88,
      },
    },
    {
      skills: {
        name: "redis",
        rating: 88,
      },
    },
  ],
  others: [
    {
      skills: {
        name: "github",
        rating: 90,
      },
    },
    {
      skills: {
        name: "mac terminal",
        rating: 83,
      },
    },
    {
      skills: {
        name: "windows Command",
        rating: 80,
      },
    },
    {
      skills: {
        name: "linux terminal",
        rating: 83,
      },
    },
    {
      skills: {
        name: "eclipse",
        rating: 70,
      },
    },
    {
      skills: {
        name: "visual studio",
        rating: 85,
      },
    },
    {
      skills: {
        name: "aws server",
        rating: 80,
      },
    },
    {
      skills: {
        name: "docker",
        rating: 78,
      },
    },
    {
      skills: {
        name: "microservice",
        rating: 83,
      },
    },
    {
      skills: {
        name: "monolith",
        rating: 87,
      },
    },
    {
      skills: {
        name: "jest",
        rating: 85,
      },
    },
    {
      skills: {
        name: "wordpress",
        rating: 85,
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
