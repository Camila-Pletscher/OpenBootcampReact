import React, { useState } from "react";

let red = 0;
let green = 200;
let blue = 150;

//Definir estilos en constantes

//!si esta logueado
const loggedStyle = {
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  color: "white",
};

//!Si no esta logueado
const unLoggedStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeight: "bold",
};

//Login / logout buttons

const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>
      Login
    </button>
  );
};

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>
      Logout
    </button>
  );
};

const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);

  //   const updateAccess = () => {
  //     setAccess(!access);
  //   };

  const loginAction = () => {
    setAccess(true);
  };

  const logoutAction = () => {
    setAccess(false);
  };

  let optionalButton;

  //   if (access) {
  //     optionalButton = <button onClick={updateAccess}>Logout</button>;
  //   } else {
  //     optionalButton = <button onClick={updateAccess}>Login</button>;
  //   }

  if (access) {
    optionalButton = (
      <LogoutButton propStyle={unLoggedStyle} logoutAction={logoutAction} />
    );
  } else {
    optionalButton = (
      <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
    );
  }

  //Unread messages

  let addMessages = () => {
    setNMessages(nMessages + 1);
  };

  return (
    <div>
      {optionalButton}
      {/* {nMessages > 0 && nMessages === 1 && (
        <p>You have {nMessages} new message...</p>
      )}
      {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
      {nMessages === 0 && <p>There are no new messages</p>} */}

      {/* Ternay operator */}
      {access ? (
        <div>
          {nMessages > 0 ? (
            <p>
              You have {nMessages} new message{nMessages > 1 ? "s" : ""}...
            </p>
          ) : (
            <p>There are no new messages</p>
          )}

          <button onClick={addMessages}>
            {nMessages === 0 ? "Add your first message" : "Add new message"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default OptionalRender;
