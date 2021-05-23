import "./NewHabit.scss";
import { ReactComponent as OtherGirl } from "./svg/OtherGirl.svg";
import { ReactComponent as Angela } from "./svg/Angela.svg";
import { ReactComponent as CreativeBlock } from "./svg/Creative-Block.svg";
import { Link } from "react-router-dom";

const NewHabit = () => {
  var name = "Christy Grant";
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

        <p className="welcome">Enter in a new habit</p>

        <div className="messages">
          {/* change name dynamically */}
          <p>What's the activiy? (40 characters max.)</p>
          <input type="text" className="tf" id="task" name="task" ></input>
          <br /> <br />
          <p>Briefly describe what's it about.</p>
         
          <input type="text" className="tf" id="description" name="description"></input>
          <br /><br />
          <label for="birthday">When are we starting?</label>
          <br />
          <input type="date" className="tf" id="startdate" name="startdate" />
          <br /><br/>
          <p>for how many days</p>
          
          <input type="number" className="tf" id="days" name="days"></input>
          <br /><br />
          <p>invite the crew</p>
          
          <input type="text" className="tf"  id="crew" name="crew"></input>
          <br />
          <br/>
          <center>
            <button className="btn3">Start Habit</button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default NewHabit;
