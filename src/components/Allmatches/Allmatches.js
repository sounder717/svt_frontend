import React, { useEffect, useState } from "react";
import Videos from "../Videos/Videos";
import "./Allmatches.css";
import rankdata from "../../assets/json/data.json";
import contentdata from "../../assets/json/content.json";

function Allmatches() {
  useEffect(() => {
    fetch("https://svt.onrender.com/svtjson ")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const fil = rankdata.filter((e, i) => {
    return e.format.includes("odi") && e.type.includes("team");
  });
  const [data, setdata] = useState(true);
  const [bu1, updatebu1] = useState(true);
  const [bu2, updatebu2] = useState(false);
  const [bu3, updatebu3] = useState(false);
  const [bu4, updatebu4] = useState(true);
  const [bu5, updatebu5] = useState(false);
  const [bu6, updatebu6] = useState(false);
  const [bu7, updatebu7] = useState(false);
  const [ranking, updatedranking] = useState(fil);
  const [onlinedata, uponlinedata] = useState(contentdata);

  const typeFilter = (val, val1, val2) => {
    if (val2 === "bu1") {
      updatebu1(true);
      updatebu2(false);
      updatebu3(false);
      updatebu4(true);
      updatebu5(false);
      updatebu6(false);
      updatebu7(false);
    } else if (val2 === "bu2") {
      updatebu2(true);
      updatebu1(false);
      updatebu3(false);
      updatebu4(true);
      updatebu5(false);
      updatebu6(false);
      updatebu7(false);
    } else if (val2 === "bu3") {
      updatebu3(true);
      updatebu2(false);
      updatebu1(false);
      updatebu4(true);
      updatebu5(false);
      updatebu6(false);
      updatebu7(false);
    } else if (val2 === "bu4") {
      typeFilter1(val, val1, val2);
    }
    const boys = rankdata.filter((e, i) => {
      return e.format.includes(val) && e.type.includes(val1);
    });
    updatedranking(boys);
  };
  const typeFilter1 = (val) => {
    if (val === "bu5") {
      updatebu5(true);
      updatebu6(false);
      updatebu7(false);
      updatebu4(false);
      if (bu1) {
        const boys = rankdata.filter((e, i) => {
          return (
            e.format.includes("odi") &&
            e.type.includes("player") &&
            e.player_type.includes("batting")
          );
        });
        updatedranking(boys);
      } else if (bu2) {
        const boys = rankdata.filter((e, i) => {
          return (
            e.format.includes("test") &&
            e.type.includes("player") &&
            e.player_type.includes("batting")
          );
        });
        updatedranking(boys);
      } else if (bu3) {
        const boys = rankdata.filter((e, i) => {
          return (
            e.format.includes("t20") &&
            e.type.includes("player") &&
            e.player_type.includes("batting")
          );
        });
        updatedranking(boys);
      } else {
        console.log("none");
      }
    } else if (val === "bu6") {
      updatebu6(true);
      updatebu5(false);
      updatebu7(false);
      updatebu4(false);
      if (bu1) {
        const boys = rankdata.filter((e, i) => {
          return (
            e.format.includes("odi") &&
            e.type.includes("player") &&
            e.player_type.includes("bowling")
          );
        });

        updatedranking(boys);
      } else if (bu2) {
        const boys = rankdata.filter((e, i) => {
          return (
            e.format.includes("test") &&
            e.type.includes("player") &&
            e.player_type.includes("bowling")
          );
        });
        updatedranking(boys);
      } else if (bu3) {
        const boys = rankdata.filter((e, i) => {
          return (
            e.format.includes("t20") &&
            e.type.includes("player") &&
            e.player_type.includes("bowling")
          );
        });
        updatedranking(boys);
      }
    } else if (val === "bu7") {
      updatebu7(true);
      updatebu6(false);
      updatebu5(false);
      updatebu4(false);
      if (bu1) {
        const boys = rankdata.filter((e, i) => {
          return (
            e.format.includes("odi") &&
            e.type.includes("player") &&
            e.player_type.includes("all rounder")
          );
        });
        updatedranking(boys);
      } else if (bu2) {
        const boys = rankdata.filter((e, i) => {
          return (
            e.format.includes("test") &&
            e.type.includes("player") &&
            e.player_type.includes("all rounder")
          );
        });
        updatedranking(boys);
      } else if (bu3) {
        const boys = rankdata.filter((e, i) => {
          return (
            e.format.includes("t20") &&
            e.type.includes("player") &&
            e.player_type.includes("all rounder")
          );
        });
        updatedranking(boys);
      }
    } else {
      updatebu4(true);
      updatebu6(false);
      updatebu5(false);
      updatebu7(false);
    }
  };
  return (
    <div className="c_all">
      <div className="all">
        <div className="all_comman">
          <div className="sub_button">
            <button className="sub_bu" onClick={() => setdata(true)}>
              News
            </button>
            <button className="sub_bu" onClick={() => setdata(false)}>
              Videos
            </button>
          </div>
          {data ? (
            <div>
              <div className="all_news">
                {onlinedata.map((e, i) => (
                  <div className="all_news_content" key={i}>
                    <img src={e.imageUrl} className="all_news_img"></img>
                    <div className="all_news_title">{e.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <Videos></Videos>
            </div>
          )}
        </div>
        <div className="all_Ranking">
          <div className="Ranking_button">
            <button
              className={bu1 ? "ranking_bu active" : "ranking_bu"}
              onClick={() => typeFilter("odi", "team", "bu1")}
            >
              ODI
            </button>
            <button
              className={bu2 ? "ranking_bu active" : "ranking_bu"}
              onClick={() => typeFilter("test", "team", "bu2")}
            >
              TEST
            </button>
            <button
              className={bu3 ? "ranking_bu active" : "ranking_bu"}
              onClick={() => typeFilter("t20", "team", "bu3")}
            >
              T20
            </button>
          </div>
          <div className="Ranking_button">
            <button
              className={bu4 ? "ranking_bu active" : "ranking_bu"}
              onClick={() => typeFilter("odi", "team", "bu4")}
            >
              Team
            </button>
            <button
              className={bu5 ? "ranking_bu active" : "ranking_bu"}
              onClick={() => typeFilter1("bu5")}
            >
              Batting
            </button>
            <button
              className={bu6 ? "ranking_bu active" : "ranking_bu"}
              onClick={() => typeFilter1("bu6")}
            >
              Bowling
            </button>
            <button
              className={bu7 ? "ranking_bu active" : "ranking_bu"}
              onClick={() => typeFilter1("bu7")}
            >
              Alrounder
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player/team</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((e, i) => (
                <tr>
                  <td>{e.ranking}</td>
                  <td>{e.team_player}</td>
                  <td>{e.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Allmatches;
