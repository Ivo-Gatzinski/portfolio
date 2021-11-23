import React from "react";

export default function Form() {
  return (
    <form className="form">
      <div className="inputs">
        <input type="text" id="input-name" placeholder="Name"></input>

        <input
          type="email"
          id="input-email"
          placeholder="Email"
        ></input>

        <input type="text" id="input-subject" placeholder="Subject"></input>
      </div>
      <div className="text">
        <textarea
          name="message"
          type="text"
          id="input-message"
          placeholder="Message"
        ></textarea>
        <button className="submit">Submit</button>
      </div>
      
    </form>
  );
}
