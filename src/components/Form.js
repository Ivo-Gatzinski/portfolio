/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    }

    if (inputType === "name") {
      setName(inputValue);
    }

    if (inputType === "message") {
      setMessage(inputValue);
    }

    if (!validateEmail(email)) {
      setErrorMessage("email is invalid!");
      return;
    } else {
      setErrorMessage("");
    }
  };

  const handleMouse = () => {
    setErrorMessage("this field is required");
    return;
  };

  return (
    <form className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Luke Skywalker"
          onMouseLeave={handleMouse}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          onMouseLeave={handleMouse}
          placeholder="luke@resistance.org"
        ></input>
      <label htmlFor="message">Message</label>
        <textarea
        className="text"
          name="message"
          type="text"
          id="message"
          placeholder="May the Force be with you!"
          onMouseLeave={handleMouse}
        ></textarea>
        <div>{errorMessage && <p className="error">{errorMessage}</p>} </div>
        <div className="submit"><button>Submit</button></div>
    </form>
  );
}
