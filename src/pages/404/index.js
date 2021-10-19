import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404"></div>
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          Sorry but the page you are looking for does not exist. It might have
          been removed, changed or is temporarily unavailable
        </p>
        <Link to={"/"} shallow={true}>
          <a style={{ textDecoration: "none" }}>Back to homepage</a>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
