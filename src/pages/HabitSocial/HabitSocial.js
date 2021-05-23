import {ReactComponent as LeftArrow} from './svg/Vector.svg';
import {ReactComponent as DayOne} from './svg/Timer.svg';
import FriendOne from './img/29-17.png';
import FriendTwo from './img/29-29.png';
import FriendThree from './img/29-23.png';
import "./HabitSocial.scss";
import React, { useState } from "react";

const HabitSocial = () => {

    const [currentTab, setCurrentTab] = useState("notes"); // 'notes' or 'progress'
    const [taskIsDone, setTaskIsDone] = useState(false);

    const renderTab = () => {
        if (currentTab === "notes") {
            return (
                <>
                    <div className="notesContainer">
                        notes
                    </div>
                </>
            );
        } else if (currentTab === "progress")
        return (
            <>
                <div className="progressContainer">
                    progress
                </div>
            </>
        );
    };

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
                            <p>Lets expand our knowledge by reading some books!!</p>
                            <div className="friendsContainer">
                                <div className="friends">
                                    {currentTab === "progress" && (
                                        <div className="progressButtons">
                                            <button 
                                                onClick={() => setTaskIsDone(!taskIsDone)} 
                                                className={taskIsDone ? "taskDone" : "taskNotDone"}>
                                                {taskIsDone ? (
                                                    <><i className="fas fa-check-square"></i>Nice work!</>
                                                ) : (
                                                    <><i className="far fa-square"></i>I'm done</>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                    <img src={FriendOne}/>
                                    <img src={FriendTwo}/>
                                    <img src={FriendThree}/>
                                </div>
                                <div className="paraContainer">
                                    <p>3 friends are already done today.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabsContainer">
                        <div className="tabs">
                            <span onClick={(() => setCurrentTab("notes"))} className={currentTab === "notes" ? "selectedTab" : "notSelectedTab"}>NOTES</span>
                            <span onClick={(() => setCurrentTab("progress"))} className={currentTab === "progress" ? "selectedTab" : "notSelectedTab"}>PROGRESS</span>
                        </div>
                        <div className="tab">
                            {renderTab()}
                        </div>
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