import React, { useState } from "react";
import Welcome from "./welcome";
import Login from "./login";
import Register from "./register";

const AuthNav = ({ onAuth }) => {
  const [view, setView] = useState("welcome");

  return (
    <>
      {view === "welcome" && <Welcome setView={setView} />}
      {view === "login" && <Login onAuth={onAuth} setView={setView} />}
      {view === "register" && <Register onAuth={onAuth} setView={setView} />}
    </>
  );
};

export default AuthNav;
