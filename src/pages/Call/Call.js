import "./Call.scss";
import { ReactComponent as OtherGirl } from "./svg/OtherGirl.svg";
import { ReactComponent as Angela } from "./svg/Angela.svg";
import { ReactComponent as CreativeBlock } from "./svg/Creative-Block.svg";
import { Link,useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';
import {db} from '../../utils/firebase';

const Call = () => {

var name = "Christy";  
  
  return (
    <div className="fullscreen">
      <div className="col1">
        <center>
          <Angela className="Angela" width="60%" />
        </center>
        <center>
          <div className="list">
            <p>{name}</p>
            <br />
            <br />
            <button className="btn">HOME</button>
            <br />
            <button className="btn">MY PROFILE</button>
            <br />
            <button className="btn">NOTIFICATIONS</button>
            <br />
            <button className="btn">CALENDAR</button>
            <br />
            <button className="btn">SETTINGS</button>
            <br />
            <button className="btn">LOG OUT</button>
            <br />
          </div>
        </center>
      </div>
      <div className="col2">
        <Link to="/dashboard">
          <button className="btn2">
            <i class="arrow lefT"></i>
          </button>
        </Link>

        <p className="welcome">Call a friend</p>

        <div className="messages">
          {/* change name dynamically */}
          <p>Who do you wanna call?</p>
          <input type="text" className="tf" id="task" name="task"></input>
         
          <br />
          <br/>
          <center>
            <button className="btn3" >Call</button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Call;
