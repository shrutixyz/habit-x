import React, { useState, useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
import "./Register.scss";
import "../Login/Login.scss";
import { ReactComponent as OtherGirl } from "../../svg/OtherGirl.svg";
import { ReactComponent as Angela } from "../../svg/Angela.svg";
import { ReactComponent as CreativeBlock } from "../../svg/Creative-Block.svg";

function Register() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const history = useHistory();

  //register user
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        console.log(user);
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="leftRightContainer">
    <div className="left">
      <div className="leftInnerContainer">
      <div className="titleContainer">
          <h1 clasName="header">SIGN UP</h1>
      </div>
      <form className="formContainer mt-10 md:w-2/3 shadow-md px-5 py-3 max-w-lg ">
        <div class="w-full px-3 py-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div class="w-full px-3 py-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div class="w-full px-3 py-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
        </div>
        <div className="buttonContainer">
            <button
            className="bg-fr m-auto mx-4 text-white px-5 py-2"
            onClick={register}
            >
            Sign Up
            </button>
        </div>
      </form>
      </div>
    </div>
    <div className="right">
      <OtherGirl className="otherGirl" />
      <Angela className="angela" />
      <CreativeBlock className="" />
    </div>
  </div>

  );
}

export default Register;
