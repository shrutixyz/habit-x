import {ReactComponent as LeftArrow} from './svg/Vector.svg';
import {ReactComponent as DayOne} from './svg/Timer.svg';
import {ReactComponent as FriendOne} from './svg/2917.svg';
import {ReactComponent as FriendTwo} from './svg/2929.svg';
import {ReactComponent as FriendThree} from './svg/2923.svg';
import "./HabitSocial.scss";

const HabitSocial = () => {
    return (
        <>
            <div className="container">
                <div className="leftContainer">
                    <div className="leftItems">
                        <div className="leftArrow">
                            <LeftArrow />
                        </div>
                        <div className="DayOne">
                            <DayOne />
                        </div>
                        <div className="textContent">
                            <h3>HABIT</h3>
                            <h2>Read 1-2 Chapters of a Book 📖</h2>
                            <p>Let’s get in the habit of practicing Leetcode to prep for Lets expand our knowledge by reading some books!!</p>
                            <div className="friendsContainer">
                                <div className="friends">
                                    <FriendOne />
                                    <FriendTwo />
                                    <FriendThree />
                                </div>
                                <div className="paraContainer">
                                    <p>3 friends are already done today.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="tabs">
                        <span>Notes</span>
                        <span>Progress</span>
                    </div>
                </div>

                <div className="rightContainer">
                    d
                </div>
            </div>
        </>
    )
};

export default HabitSocial;