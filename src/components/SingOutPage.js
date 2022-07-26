import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useStateValue } from "../Stateprovider";

const SingOutPage = () => {
  const [state,  dispatch] = useStateValue();

  const appSignOut = async (event) => {
    console.log("sign out")
    event.preventDefault();
    dispatch({
      type: "EMPTY_BASKET",
    });
    signOut(auth);
    dispatch({
      type: "LOG_IN_USER",
      newUser: [],
    });
  };

  return (
    <div>
      <p> Wanna Log out ?</p>
      <button
        align="center"
        className="login-page-buttons"
        onClick={appSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SingOutPage;
