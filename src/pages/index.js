import React from "react";
import { Link } from "gatsby";

const IndexPage = () => (
  <>
    <h3>Go to 2026 on:</h3>
    <h1>Ruby's </h1>
    <h1>TimeShip⛵</h1>

    <p>
      Its an example to show how to use{" "}
      <a href="https://userbase.com/">Userbase</a> with{" "}
      <a href="https://www.gatsbyjs.org/">Gatsby JS</a> and with{" "}
      <a href="https://stripe.com/">Stripe</a>.
    </p>
    <p>
      Created by <a href="https://twitter.com/raae">@raae</a> for{" "}
      <a href="https://www.gatsbyjs.com/virtual-gatsby-days-registration/">
        Gatsby Virtual Days 2020
      </a>
      .
    </p>
    <hr />
    <p>
      <Link to="/app/login">Log In</Link> /{" "}
      <Link to="/app/signup">Sign Up</Link>
    </p>
  </>
);

export default IndexPage;
