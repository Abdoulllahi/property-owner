import React from "react";

const SignupPage = () => {
  const handleSignup = (event) => {
    event.preventDefault();
    // Here, you would usually connect to your API and create the new user in your database.
    // For simplicity, we're just logging the form values.
    const { name, email, password } = event.target.elements;
    console.log(
      "Creating new user with name:",
      name.value,
      "email:",
      email.value,
      "password:",
      password.value
    );
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" required />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" required />
        <button className="but" type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignupPage;
