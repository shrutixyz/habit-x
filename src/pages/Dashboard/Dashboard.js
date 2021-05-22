import "./Dashboard.scss";
import {ReactComponent as OtherGirl} from './svg/OtherGirl.svg';
import {ReactComponent as Angela} from './svg/Angela.svg';
import {ReactComponent as CreativeBlock} from './svg/Creative-Block.svg';
import {Link} from "react-router-dom";

const dashboard = () => {
  var name = "Chris Grant"
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
<p>Welcome back!</p>
<p>Recent Notifications</p>
<button>Start New Habit</button>

<div className="todolist">
  <p>Your Daily Habits</p>
  <input type="checkbox" id="checkbox" name="task1" value="task1"/>
  <label for="task1">TASK1</label><br/>
  <input type="checkbox" id="checkbox" name="task2" value="task2"/>
  <label for="task2">TASK2</label><br/>
  <input type="checkbox" id="checkbox" name="task3" value="task3"/>
  <label for="task3">TASK3</label><br/>

</div>
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
      </div>
    );
}

export default dashboard;