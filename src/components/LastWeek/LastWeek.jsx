import "./last.scss";
import React, { useState } from "react";
import italy from "../../assets/images2/italy.svg";
import epl from "../../assets/images2/english.svg";
import laliga from "../../assets/images2/laliga.svg";
import bundesliga from "../../assets/images2/bundesliga.svg";
import ligue1 from "../../assets/images2/ligeu1.svg";
import barcelona from "../../assets/images2/barcelona.svg";
import liverpool from "../../assets/images2/liverpool.svg";
export const LastWeek = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Italiya. Seriya A",
      content: (
        <div className="games">
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
        </div>
      ),
      icon: italy,
    },
    {
      id: 2,
      tabTitle: "Premier Liga",
      content: (
        <div className="games">
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
        </div>
      ),
      icon: epl,
    },
    {
      id: 3,
      tabTitle: "LaLiga",
      content: (
        <div className="games">
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
        </div>
      ),
      icon: laliga,
    },
    {
      id: 4,
      tabTitle: "Bundesliga",
      content: (
        <div className="games">
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
        </div>
      ),
      icon: bundesliga,
    },
    {
      id: 5,
      tabTitle: "Ligue 1 ",
      content: (
        <div className="games">
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
          <div className="game-date">
            <div className="game">
              <div className="club">
                <img src={barcelona} />
                <p className="club_name">Barcelona</p>
              </div>
              <p className="score">3 : 0</p>
              <div className="club">
                <img src={liverpool} />
                <p className="club_name">Liverpool</p>
              </div>
            </div>
            <p className="date">11.11.2021 23:59</p>
          </div>
        </div>
      ),
      icon: ligue1,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="prev_div">
      <div className="container">
        <div className="tabs">
          {tabs.map((tab, i) => (
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
              className="tab"
            >
              <img src={tab.icon} /> {tab.tabTitle}
            </button>
          ))}
        </div>
        <div className="content">
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div className="">{tab.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
