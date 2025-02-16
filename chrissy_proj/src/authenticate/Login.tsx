import React, { useState } from "react";
//import "../../css/style.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../style.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="flex flex-col border border-solid border-gray-500 p-[50px] mx-[30px]">
    <div className="text-white text-5xl" style={{ fontFamily: 'Pacifico, cursive' }}>Epic Baking Website</div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        className="bg-graytone border border-solid border-gray-500 rounded-[3px] p-3 mb-5 text-white focus:outline-[1px] outline-gray-500"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="passsword"
        placeholder="Password"
        value={password}
        className="bg-graytone border border-solid border-gray-500 rounded-[3px] p-3 mb-5 text-white focus:outline-[1px] outline-gray-500"
      />
      <button
        onClick={handleLogin}
        className="p-3 rounded-[8px] border-none text-white bg-bluish font-bold hover:cursor-pointer"
      >
        Log in
      </button>
    </div>
  );
}

export default Login;