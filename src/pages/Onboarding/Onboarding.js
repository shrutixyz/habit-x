import "./Onboarding.scss";
import { ReactComponent as OtherGirl } from "../../svg/OtherGirl.svg";
import Angela from "./img/Angela.png";
import { ReactComponent as CreativeBlock } from "../../svg/Creative-Block.svg";
import { Link } from "react-router-dom";

const Onboarding = ({user}) => {
  
  return (
    <>

      <div className="leftRightContainer">
        <div className="left">
          <div className="leftInnerContainer">
            <h1>Habit X</h1>
            <p>Helping You And Your Friends Start New Habits.</p>
            <Link to="/login">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <OtherGirl className="otherGirl" />
          <img src={Angela} className="angela" />
          <CreativeBlock className="" />
        </div>
      </div>

    </>
  );
};

export default Onboarding;
