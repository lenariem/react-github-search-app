import React from "react";
import { Link } from "react-router-dom";
import CatNotFound from "../img/github-logo1.png";

export const NotFound = () => {
  return (
    <div className="column">
      <h1>Page not found</h1>
      <img src={CatNotFound} alt="cat" style={{width: "30%"}}/>
      <br />
      <br />
      <Link to="/" className="btn btn-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>{" "}
        Back to home page
      </Link>
    </div>
  );
}
