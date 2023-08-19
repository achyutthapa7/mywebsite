import React, { useState } from "react";
import myImage from "./assets/images/at.jpg";
import myAnotherImage from "./assets/images/gggg.jpg";
import { Fade } from "react-reveal";
const Form = () => {
  const [passwordType, setPasswordType] = useState("password");
  const showPassword = () => {
    passwordType == "password"
      ? setPasswordType("")
      : setPasswordType("password");
  };
  // Capitalize the function name for consistency (Form instead of form)
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validate(input));
  };

  const Validate = (value) => {
    const errors = {}; // Changed the variable name to 'errors'
    const email_pattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; // Corrected the email pattern

    if (value.name === "") {
      errors.name = "Name is required"; // Store error messages in the 'errors' object
    }

    if (value.email === "") {
      errors.email = "Email is required";
    } else if (!email_pattern.test(value.email)) {
      errors.email = "Invalid email format";
    }

    if (value.password === "") {
      errors.password = "Password is required";
    } else if (!password_pattern.test(value.password)) {
      errors.password =
        "Password should be at least 8 characters long and contain letters and numbers";
    }

    return errors; // Return the errors object
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text" // Use "text" type for name input
          name="name"
          placeholder="Enter your name"
          onChange={handleInput}
          value={input.name}
        />
        <input
          //   type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleInput}
          value={input.email}
        />
        <input
          type={passwordType}
          name="password"
          placeholder="Enter your password"
          onChange={handleInput}
          value={input.password}
        />
        <input type="submit" name="submit" value="Send" />
      </form>
      <button className="showpassword" onClick={showPassword}>
        click
      </button>

      {error.name && <p>{error.name}</p>}
      {error.email && <p>{error.email}</p>}
      {error.password && <p>{error.password}</p>}
    </>
  );
};

export default Form;
