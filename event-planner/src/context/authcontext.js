import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firbase";

export const Authcontext = createContext();

export default function AuthcontextProvider(props) {
  const [isAuthentication, setIsAuthentication] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return setIsAuthentication(true);
      } else setIsAuthentication(false);
      // console.log(user)
    });
  }, []);

  return (
    <Authcontext.Provider value={{ isAuthentication, setIsAuthentication }}>
      {props.children}
    </Authcontext.Provider>
  );
}
