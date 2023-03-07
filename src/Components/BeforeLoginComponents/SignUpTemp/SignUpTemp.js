/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SignupForm from "../Signup Form/SignupForm";

import SignupLogos from "../Signup logos/SignupLogos";

export default function SignUpTemp() {
  return (
    <>
      <div className="container-fluid bg-upwork-dark">
        <div className="row">
          <SignupForm />
        </div>
      </div>
      <SignupLogos />
    </>
  );
}
