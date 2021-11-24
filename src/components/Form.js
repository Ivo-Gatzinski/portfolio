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
      <div className="inputs">
        <input
          type="text"
          id="input-name"
          placeholder="Name"
          onMouseLeave={handleMouse}
        ></input>
        <input
          value={email}
          type="email"
          name="email"
          id="input-email"
          onChange={handleChange}
          onMouseLeave={handleMouse}
          placeholder="Email"
        ></input>

        <input
          type="text"
          id="input-subject"
          placeholder="Subject"
          onMouseLeave={handleMouse}
        ></input>
      </div>
      <div className="text">
        <textarea
          name="message"
          type="text"
          id="input-message"
          placeholder="Message"
          onMouseLeave={handleMouse}
        ></textarea>
        <div>{errorMessage && <p className="error">{errorMessage}</p>} </div>
        <button className="submit">Submit</button>
      </div>
    </form>
  );
}
