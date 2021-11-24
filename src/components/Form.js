import React, {useState} from "react";
import { validateEmail } from '../utils/helpers';

export default function Form() {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleChange = (e) => {
const {target} = e;
const inputType = target.name;
const inputValue = target.value;


if (inputType === "email") {
  setEmail(inputValue);

}

if (!validateEmail(email)) {
  setErrorMessage('email is invalid!');
  return;
} else {
  setErrorMessage("");
}

}; 

  return (
    <form className="form">
      <div className="inputs">
        <input type="text" id="input-first" placeholder="Name"></input>
        <input value={email} type="email" name="email" id="input-email" onChange={handleChange} placeholder="Email"></input>
        
        <input type="text" id="input-subject" placeholder="Subject"></input>
      </div>
      <div className="text">
        <textarea
          name="message"
          type="text"
          id="input-message"
          placeholder="Message"
        ></textarea>
        <div>
    {errorMessage && (
      
        <p className="error">{errorMessage}</p>
      
    )} </div>
        <button className="submit">Submit</button>
      </div>
    </form>
  );
}
