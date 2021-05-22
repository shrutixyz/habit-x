import "./NewHabit.scss";
import {ReactComponent as OtherGirl} from './svg/OtherGirl.svg';
import {ReactComponent as Angela} from './svg/Angela.svg';
import {ReactComponent as CreativeBlock} from './svg/Creative-Block.svg';
import {Link} from "react-router-dom";



const NewHabit = () => {
    var name = "Christy Grant"
    return (
      <div className="fullscreen">
        <div className= "col1">

<center><Angela className="Angela" width="60%"/></center>
<center><div className="list">
  <p>{name}</p><br/><br/>
  <button className="btn">HOME</button><br/>
  <button className="btn">MY PROFILE</button><br/>
  <button className="btn">NOTIFICATIONS</button><br/>
  <button className="btn">CALENDAR</button><br/>
  <button className="btn">SETTINGS</button><br/>
  <button className="btn">LOG OUT</button><br/>
  
  </div></center>
        </div>
<div className="col2">
    <Link to="/dashboard">
    <button className="btn2"><i class="arrow left"></i></button>
         </Link>

<p className="welcome">Enter in a new habit</p>




<div className="messages">
  {/* change name dynamically */}
  <p>What's the activiy? (40 characters max.)</p> <br/>
  <input type="text" id="task" name="task"></input><br/>
  <p>Briefly describe what's it about.</p><br/>
  <input type="text" id="description" name="description"></input><br/>
  <label for="birthday">When are we starting?</label><br/>
  <input type="date" id="birthday" name="birthday"/><br/>
  <p>for how many days</p><br/>
  <input type="number" id="description" name="description"></input><br/>

  <p>invite the crew</p><br/>
  <input type="text" id="description" name="description"></input><br/>
  <center><button className="btn2">Start Habit</button></center>
  
</div>
</div>

      </div>
    );
};

export default NewHabit;
