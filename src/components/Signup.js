import React, { useState, useLayoutEffect } from "react";
import { Link, navigate } from "gatsby";
import userbase from "userbase-js";

const Signup = ({ user, setUser }) => {
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("idle");

  useLayoutEffect(() => {
    if (user) {
      navigate("/app");
    }
  }, [user]);

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();

    const username = event.target.elements.usernameSignUp.value;
    const email = event.target.elements.emailLandingLocation.value;
    const password = event.target.elements.pasSword.value;

    try {
      console.log("Sign up");
      setError(false);
      setStatus("pending");

      const user = await userbase.signUp({ username, email, password });

      console.log("Sign up succeeded", user.username);
      setUser(user);
      setStatus("idle");
      // goGoYear(user.username);
    } catch (error) {
      console.log("Sign up failed", error);
      setError(error);
      setStatus("idle");
    }
  };
  // function goGoYear(user) {
  //   const successUrl = "https://en.wikipedia.org/wiki/1554";
  //   const cancelUrl =
  //     "https://github.com/lillylabs/Rubys-TimeShip-1.4/issues/3";

  //   if (!user.subscriptionStatus) {
  //     userbase.purchaseSubscription({ successUrl, cancelUrl });
  //     return;
  //   }
  // }

  return (
    <>
      <h3>Go to 2026 on:</h3>
      <h1>Ruby's </h1>
      <h1>TimeShip⛵</h1>

      <form onSubmit={handleSubmitSignUp}>
        <label>
          pasSword <br />
          <input type="password" id="pasSword" name="password" required />
        </label>
        <br />
        <br />

        <label>
          email (landing location) <br />
          <input type="email" id="emailLandingLocation" name="email" />
        </label>

        <br />
        <br />

        <label>
          username <br />
          <input type="text" id="usernameSignUp" name="username" required />
        </label>

        <br />
        <br />

        {error && (
          <>
            <small>{error.message}</small>
            <br />
            <br />
          </>
        )}

        <button type="submit" disabled={status === "pending"}>
          ⛵ Let's Go to 2026 ⛵
        </button>
        <br />
        <small>
          {" "}
          or <Link to="/app/login">log in</Link>
        </small>
      </form>
    </>
  );
};

export default Signup;
