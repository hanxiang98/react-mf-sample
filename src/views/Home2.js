import React, { Fragment, useEffect } from "react";

const reactVersion = require('../../package.json').dependencies['react'];

// Your function to call on load
const getAccessToken = async () => {
  let token = localStorage.getItem("Access-Token");
  console.log('Access Token:', token);
};


const Home2 = () => {
  useEffect(() => {
    // Call your function when the component loads
    getAccessToken();
  }, [])
  
  return (
    <Fragment>
      <h1>
        React
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
      </h1>
      <p>
        React Version: {reactVersion}
      </p>
    </Fragment>
  );
};

export default Home2;
