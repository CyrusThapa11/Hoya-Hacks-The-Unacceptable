import React, { useContext, useState, useEffect } from "react";
import { auth } from './services/firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Main from "./container/Main";
import Login from "./pages/Login";

function App() {

  const [user] = useAuthState(auth);

  return (
    <div>
      {user ?
        <Main />
        :
        <Login />
      }
    </div>

  );
}

export default App;
