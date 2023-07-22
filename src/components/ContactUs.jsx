import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


export default function ContactUs() {
  const form = useRef();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const sendEmail = (e) => {
    e.preventDefault();

    // console.log('Service ID:', process.env.REACT_APP_YOUR_SERVICE_ID);
    // console.log('Template ID:', process.env.REACT_APP_YOUR_TEMPLATE_ID);
    // console.log('Public Key:', process.env.REACT_APP_YOUR_PUBLIC_KEY);

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("msg sent");
          // Navigate to /contactsuccess after successful form submission
          navigate("/contactsuccess");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="isolate bg-white px-6 py-32 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Let us know how we can help you
        </p>
      </div>

      <form
        className="mx-auto mt-16 max-w-xl sm:mt-10"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="user_name"
                id="name" // Make sure the id matches the 'htmlFor' attribute of the label
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="user_email"
                id="email" // Make sure the id matches the 'htmlFor' attribute of the label
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message" // Make sure the id matches the 'htmlFor' attribute of the label
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            value="Send"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
