import React from "react";

export const About = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4">About this app</h1>
        <p className="lead">
          App version: <strong>1.0.0</strong>
        </p>
        <p> © {new Date().getFullYear()} Copyright Elena Riemer</p>
      </div>
    </div>
  );
};
