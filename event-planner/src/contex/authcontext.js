import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Auth/firebase";

export const authcontext = createContext();

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
    <authcontext.Provider value={{ isAuthentication, setIsAuthentication }}>
      {props.children}
    </authcontext.Provider>
  );
}
