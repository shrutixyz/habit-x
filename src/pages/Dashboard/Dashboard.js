import "./Dashboard.scss";
import {ReactComponent as OtherGirl} from './svg/OtherGirl.svg';
import {ReactComponent as Angela} from './svg/Angela.svg';
import {ReactComponent as CreativeBlock} from './svg/Creative-Block.svg';
import {Link} from "react-router-dom";
// import Calender as Calender;
import NewHabit from "../NewHabit/NewHabit";
import Calendar from "react-calendar";


const dashboard = () => {
  var name = "Christy Grant"
    return (
      <>
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

      </div>
      
<div className="col2">
<p className="welcome">Welcome back!</p>
<p className="subtitle">Recent Notifications</p>
<Link to="/newhabit"><button className="btn3">Start New Habit</button></Link>


<div className="todolist">
  <p>Your Daily Habits</p>
  <input type="checkbox" id="checkbox" name="task1" value="task1"/>
  <label for="task1">TASK1</label><br/>
  <input type="checkbox" id="checkbox" name="task2" value="task2"/>
  <label for="task2">TASK2</label><br/>
  <input type="checkbox" id="checkbox" name="task3" value="task3"/>
  <label for="task3">TASK3</label><br/>

</div>
{/* <div>
<iframe src="https://calendar.google.com/calendar/embed?src=t7017ao9hqnmbnsrgfjpr6s8ng%40group.calendar.google.com&ctz=Asia%2FKolkata" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</div> */}


<div className="messages">
  {/* change name dynamically */}
  <p>Sarah</p> 
  <p>finished xyz</p>
  <p>(2 mins ago)</p>
</div>
</div>
<div className= "col3">
<div className="tracker">
  <p>Progress Tracker</p>
  <p>gotta include that circle here</p>
  <p>Take run outside for 30 minutes</p>
  <p>keep up the good work!</p>
</div>
<div className="awards">
  <p>Your Awards</p>
  <p>gotta include awards plot here</p>
</div>
        </div>
      </>
    );
}

export default dashboard;





