import "./NewHabit.scss";
import { ReactComponent as OtherGirl } from "./svg/OtherGirl.svg";
import { ReactComponent as Angela } from "./svg/Angela.svg";
import { ReactComponent as CreativeBlock } from "./svg/Creative-Block.svg";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import {db} from '../../utils/firebase';

const NewHabit = ({user}) => {
   const [name, setName] = useState("Christy");
   const [email, setemail] = useState("")
   const [title, setTitle] = useState("");
   const [desc, setdesc] = useState("");
   const [start, setstart] = useState();
   const [daysCount, setdaysCount] = useState(0)

  useEffect(() => {
    if(user) {
      const temp = user.email.split("@")[0]
      setName(temp)
      setemail(user.email)
    }
    
  }, [user])

  const uploadToFirebase = () => {
   
    const newHabit = {
      email : email,
      title : title,
      desc : desc,
      start : start,
      end: daysCount,
      completedOn: []
    }
    db.collection('habit').add(newHabit)
      
  }
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
          <p>What's the activity? (40 characters max.)</p>
          <input type="text" className="tf" id="task" name="task" value={title} onChange={(e) => setTitle(e.target.value)}></input>
          <br /> <br />
          <p>Briefly describe what's it about.</p>
         
          <input type="text" className="tf" id="description" name="description"  value={desc} onChange={(e) => setdesc(e.target.value)}></input>
          <br /><br />
          <label for="birthday">When are we starting?</label>
          <br />
          <input type="date" className="tf" id="startdate" name="startdate"  value={start} onChange={(e) => setstart(e.target.value)}/>
          <br /><br/>
          <p>for how many days</p>
          
          <input type="number" className="tf" id="days" name="days"   value={daysCount} onChange={(e) => setdaysCount(e.target.value)}></input>
          <br /><br />
          <p>invite the crew</p>
          
          <input type="text" className="tf"  id="crew" name="crew"></input>
          <br />
          <br/>
          <center>
            <button className="btn3" onClick={uploadToFirebase}>Start Habit</button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default NewHabit;
