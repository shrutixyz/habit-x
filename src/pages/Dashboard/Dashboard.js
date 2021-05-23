import "./Dashboard.scss";
import {useState, useEffect} from 'react';
import { ReactComponent as OtherGirl } from "./svg/OtherGirl.svg";
import { ReactComponent as Angela } from "./svg/Angela.svg";
import { ReactComponent as CreativeBlock } from "./svg/Creative-Block.svg";
import { Link } from "react-router-dom";
// import Calender as Calender;
import NewHabit from "../NewHabit/NewHabit";
import Calendar from "react-calendar";


//add firebase
import {db} from '../../utils/firebase';

const Dashboard = ({user}) => {

  const [habitList, sethabitList] = useState([]);
  const [email, setemail] = useState("")
  const [name, setName] = useState("Christy")
  useEffect(() => {
    
        if(user) {
           const temp = user.email.split("@")[0]
            setName(temp)
            console.log("user signed in");
            setemail(user.email)
            db.collection('habit').where("email","==", user.email).get()
        .then(snap => {
            let documents = [];
          
            snap.forEach(doc => {
                
                // console.log(doc.data())
                documents.push({...doc.data(), id: doc.id})
            })

            sethabitList(documents)
            
        })
        }else {
            console.log("uh,oh")
        }
        
   
    
}, [user])

  useEffect(() => {
    console.log(habitList.length)
  }, [habitList])


  // var name = "Christy Grant";
  return (
    <>
      <div className="fullscreen dashboardContainer">
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
      </div>

      <div className="col2">
        <p className="welcome">Welcome back!</p>
        <p className="subtitle">Recent Notifications</p>
        <Link to="/newhabit">
          <button className="btn3">Start New Habit</button>
        </Link>

        <div className="todolist">

          <p>📝 Your Daily Habits</p>
          <br />

          {
            habitList.map(item => {
              return <div className="">
                  <input type="checkbox" id="checkbox" name={item.title} value={item.title} />
                  <label for={item.title}>{item.title}</label>
                  <br />
            </div>
            } )
          }
          {
          
          
          /* {habitList.map(item => {
            return <div className="">
                  <input type="checkbox" id="checkbox" name={item.title} value={item.title} />
                  <label for={item.title}>{item.title}</label>
                  <br />
            </div>

           
          })}}
          {/* <input type="checkbox" id="checkbox" name="task1" value="task1" />
          <label for="task1">Take run outside for 30 minutes</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox" name="task2" value="task2" />
          <label for="task2">Cook a home cook meal</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox" name="task3" value="task3" />
          <label for="task3">Practice violin for 60-80 minutes</label>
          <br />
          <br /> */}
        </div>

        <div className="messages">
          <table>
            <td>
              <img src="https://i.ibb.co/gTPj2s4/29-17.png"></img>
            </td>
            <th>
              <p>Sarah</p>
              <p>finished Cook a home cook meal</p>
              <p>(2 mins ago)</p>
            </th>
          </table>
        </div>
      </div>
      <div className="col3">
        <div className="tracker">
          <p>💪 Progress Tracker</p>
          <center>
            <img src="https://i.ibb.co/2tCkcnL/Timer.png"></img>
          </center>
          <center>
            {" "}
            <p>Take run outside for 30 minutes</p>
            <p>keep up the good work!</p>
          </center>
        </div>
        <div className="awards">
          <center>
            {" "}
            <p>Your Awards</p>
          </center>
          <div className="awards-graph"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
