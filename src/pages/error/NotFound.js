import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/svg/notFound.svg";

function NotFound() {
  return (
    <div className="section section-center text-center">
      <img
        src={notFound}
        className="mb-5"
        alt=""
        style={{ maxWidth: "40rem", width: "100%" }}
      />
      <h3 className="mb-3">Ohh! Page Not Found</h3>

      <p>We can't seem to find the page you're looking for</p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
