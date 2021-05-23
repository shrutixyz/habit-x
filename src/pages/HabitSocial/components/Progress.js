import FriendOne from "../img/29-17.png";
import FriendTwo from "../img/29-29.png";
import FriendThree from "../img/29-23.png";
import You from "../img/3010.png";
import { useState } from "react";

const Progress = () => {

  const [myStreak, setMyStreak] = useState(0);

  const pinkRenderCardsAndRow = (cards = Array) => {
    const renderRow = (streak) => {
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((streakDay) => {
            
            const checkPossibleDashLineNext = () => {
                if (streakDay === 1 | streakDay === 7 | streakDay === 14) {
                    return (
                        <div className="dots"></div>
                    );
                }
            };
            
            if (streakDay === 21) return (
                <div onClick={() => setMyStreak(streakDay)} className={`streakColumn ${streak >= streakDay && "full"}`}>
                    <i className="fas fa-star"></i>
                </div>
            );
            return (
                <>
                    <div onClick={() => setMyStreak(streakDay)} className={`streakColumn ${streak >= streakDay && "full"}`}></div>
                    {checkPossibleDashLineNext()}
                </>
            );
        });
    };
    return cards.map((card) => {
      const { img, name, streak } = card;
      return (
        <>
            <div className="pinkCardAndRowParentContainer">
                <div className="pinkCard">
                    <img src={img} alt="Profile Picture" />
                    <div className="textContent">
                        <h3 className="name">{name}</h3>
                        <p
                        className={`description ${
                            streak === 0 ? "notStarted" : "started"
                        }`}
                        >
                        {streak === 0 ? "haven't started" : `${streak} day streak`}
                        </p>
                    </div>
                </div>
                <div className="rowContainer">
                    {renderRow(streak)}
                </div>
            </div>
        </>
      );
    });
  };

  const renderDays = (days=[]) => {

    return days.map((day) => {
        if (day === 21) return (
            <div className={`dayHeaderContainer`}
                style={{marginLeft:`10rem`}}
            >
                <h1>{day}</h1>
            </div>
        );

        const getDotsMargin = () => {
            if (day === 1) return "0rem";
            if (day === 7) return "10rem";
            if (day === 14) return "12rem";
        };
        return (
            <>
                <div className={`dayHeaderContainer`}
                    style={{marginLeft:`${getDotsMargin()}`}}
                >
                    <h2>Day {day}</h2>
                    <div className="dots"></div>
                </div>
            </>
        );
    });  

  };

  return (
    <>
      <div className="progressContainer">
            <div className="textContent">
                <h1>📅&nbsp;Track Your Progress</h1>
                <p>Keep it up!</p>
            </div>
            <div className="daysContainer">
                {renderDays([1,7,14,21])}
            </div>
            <div className="pinkCardsContainer">
              {pinkRenderCardsAndRow([
                {
                  img: You,
                  name: "You",
                  streak: myStreak,
                },
                {
                  img: FriendOne,
                  name: "Jennifer",
                  streak: 1,
                },
                {
                  img: FriendTwo,
                  name: "Kenny",
                  streak: 1,
                },
                {
                  img: FriendThree,
                  name: "Sarah",
                  streak: 1,
                },
              ])}
            </div>
      </div>
    </>
  );
};

export default Progress;
