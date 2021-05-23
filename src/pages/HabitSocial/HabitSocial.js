import {ReactComponent as LeftArrow} from './svg/Vector.svg';
import {ReactComponent as DayOne} from './svg/Timer.svg';
import FriendOne from './img/29-17.png';
import FriendTwo from './img/29-29.png';
import FriendThree from './img/29-23.png';
import "./HabitSocial.scss";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Progress from './components/Progress';

const HabitSocial = () => {

    const [currentTab, setCurrentTab] = useState("notes"); // 'notes' or 'progress'
    const [taskIsDone, setTaskIsDone] = useState(false);

    const renderTab = () => {

        if (currentTab === "notes") {
            const renderNotes = (notes=Array) => {
                return notes.map((note) => {
                    const { img, name, when, description } = note;
                    return (
                        <div className="note">
                            <div className="noteInfoContainer">
                                <div className="noteInfo">
                                    <img src={img} />
                                    <div>
                                        <h3 className="name">{name}</h3>
                                        <p className="when">{when}</p>
                                    </div>
                                </div>
                                <p className="noteText">{description}</p>
                            </div>
                        </div>
                    );
                });
            };
        return (
            <>
                <div className="notesContainer">
                    <div className="notesInnerContainer">
                        {renderNotes([
                            {
                                img: FriendThree, 
                                name: "Sarah", 
                                when: "30 min ago", 
                                description: "The book, the Hate U Give, was soooo good. What book did y’all read? 📚", 
                            },
                            {
                                img: FriendTwo, 
                                name: "Kenny", 
                                when: "10 min ago", 
                                description: "same book, it was CRAZY!! the part where he fell off the building was my fav for sure!", 
                            },
                        ])}
                    </div>
                    <div className="noteButtons">
                        <button><i class="fas fa-film"></i></button>
                        <button><i class="fas fa-image"></i></button>
                        <button><i class="far fa-file"></i></button>
                        <button><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            </>
        );
    } else if (currentTab === "progress")
        return <Progress />
    };

    const renderCards = (cards=Array) => {
        return cards.map((card) => {
            const { img, name, description } = card;
            return (
                <div className="card">
                    <img src={img} />
                    <div className="textContent">
                        <h3 className="name">{name}</h3>
                        <p className="description">{description}</p>
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            <div className="habitSocialContainer">
                <div className="leftContainer">
                    <div className="leftItems">
                        <Link to="/dashboard" className="leftArrow">
                            <LeftArrow />
                        </Link>
                        <div className="DayOne">
                            <DayOne />
                        </div>
                        <div className="textContent">
                            <span>
                                <h3>HABIT</h3>
                                <button className="options"><i className="fas fa-ellipsis-v"></i></button>
                            </span>
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
                    <div className="cardsContainer">
                        <h2 className="header">✅ Completed</h2>
                        {renderCards([
                            {
                                img: FriendOne, 
                                name: "Jennifer", 
                                description: "finished 1 min ago", 
                            },
                            {
                                img: FriendTwo, 
                                name: "Kenny", 
                                description: "finished 10 min ago", 
                            },
                            {
                                img: FriendThree, 
                                name: "Sarah", 
                                description: "finished 30 min ago", 
                            },
                        ])}
                    </div>
                </div>
            </div>
        </>
    )
};

export default HabitSocial;