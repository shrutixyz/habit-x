import "./Onboarding.scss";
import { ReactComponent as OtherGirl } from "../../svg/OtherGirl.svg";
import { ReactComponent as Angela } from "../../svg/Angela.svg";
import { ReactComponent as CreativeBlock } from "../../svg/Creative-Block.svg";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <>
      <div className="leftRightContainer">
        <div className="left">
          <div className="leftInnerContainer">
            <h1 className="">Habit X</h1>
            <p className="">Helping You And Your Friends Start New Habits.</p>
            <Link to="/login">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <OtherGirl className="otherGirl" />
          <Angela className="angela" />
          <CreativeBlock className="" />
        </div>
      </div>
    </>
  );
};

export default Onboarding;
