import React from "react";
import { Link, useHistory } from 'react-router-dom';
import logo from "../assets/logo.svg";

const Hero = () => (
  
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>

    <p>
      <Link to='/react/home2'>Go to Home 2</Link>      
    </p>
    <p>
      <Link to='/react/about'>Go to About</Link>
    </p>
    <p>
      <Link to='/react/contact'>Go to Contact</Link>
    </p>
  </div>
);

export default Hero;
