import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const initialState = {
    fullname: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [target, setTarget] = useState("");
  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
    setTarget(e.target);
    // if (!isSubmit) {
    //   console.log("sent");
    //   emailjs
    //     .sendForm(
    //       `${process.env.REACT_APP_EMAIL_SERVICE_ID}`,
    //       `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,
    //       e.target,
    //       `${process.env.REACT_APP_EMAIL_USER_ID}`
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         setFormData(initialState);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // } else {
    //   console.log("not sent");
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          `${process.env.REACT_APP_EMAIL_SERVICE_ID}`,
          `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,
          target,
          `${process.env.REACT_APP_EMAIL_USER_ID}`
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormData({
              fullname: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }, [formErrors, target]);

  const validate = (values) => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullname) {
      errors.fullname = "Please input your fullname";
    }

    if (!values.email) {
      errors.email = "Please input your email";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please input your valid email";
    }

    if (!values.message) {
      errors.message = "Please input your message";
    }

    if (Object.keys(errors).length === 0) {
      setIsSubmit(false);
    }

    return errors;
  };

  return (
    <div
      id="contactme"
      className="max-w-5xl flex flex-col justify-center h-auto flex-wrap mx-auto"
    >
      <div className="mx-6 lg:mx-0">
        <h1 className="text-3xl mb-5 dark:text-gray-200">Contact Me</h1>
        <form
          onSubmit={sendEmail}
          className="w-full max-w-full flex-col justify-center mb-8"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                htmlFor="fullname"
              >
                Fullname
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="fullname"
                type="text"
                placeholder="Your Fullname"
                name="fullname"
                value={formData.fullname}
                onChange={updateFormData}
              />
              <p className="text-red-500 text-sm font-semibold italic">
                {formErrors.fullname}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={updateFormData}
              />
              <p className="text-red-500 text-sm font-semibold italic">
                {formErrors.email}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
                placeholder="Your Messages..."
                value={formData.message}
                onChange={updateFormData}
              ></textarea>
              <p className="text-red-500 text-sm font-semibold italic">
                {formErrors.message}
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <input
                className="shadow bg-green-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-gray-100 font-bold py-2 px-4 rounded"
                type="submit"
                value="Send"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
