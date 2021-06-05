import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1 className="display3 text-center">404</h1>
      <h1 className="display4 text-center">
        <Link to="/">Return to Home Page</Link>
      </h1>
    </>
  );
}

export default NotFoundPage;
