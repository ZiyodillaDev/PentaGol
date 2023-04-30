import "./endNews.scss";
import { Card, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
const { Meta } = Card;
import EndNew1 from "../../assets/images/endnew1.png";
import { Avatar, Button, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import cardData from "./data";

export const EndNews = () => {
  const [noOfElements, setnoOfElements] = useState(20);
  const slice = cardData.slice(0, noOfElements);
  const loadMore = () => {
    setnoOfElements(noOfElements + cardData.length);
  };
  return (
    <div className="container ">
      <div className="tops">
        <p>So'ngi yangiliklar</p>
      </div>

      <div className="four-card">
        {slice.map((el) => {
          return (
            <Link to="/article" style={{ textDecoration: "none" }}>
              <Card
                hoverable
                style={{
                  width: 415,
                  height: 410,
                  background: "var(--table-grey)",
                  paddingTop: 10,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 15,
                  border:"1px solid var(--table-grey)"
                }}
                cover={
                  <img
                    alt="example"
                    src={el.img}
                    style={
                      {
                        // width: 385,
                        // height: 231,
                      }
                    }
                  />
                }
              >
                <Title
                  level={4}
                  style={{
                    color: "var(--text)",
                    width: "375px",
                    height: 54,
                    marginTop: "-15px",
                  }}
                >
                  {el.title}
                </Title>
              
                <Title
                  level={5}
                  style={{
                    color: "var(--text)",
                    marginTop: "-25px",
                    marginLeft: "-20px",
                  }}
                >
                  {el.p}
                </Title>
                <Title
                  level={5}
                  style={{
                    color: "var(--text)",

                    marginTop: "-30px",
                    marginLeft: "-20px",
                  }}
                >
                  {el.time}
                </Title>
              </Card>
            </Link>
          );
        })}
      </div>
      <button className="btn" onClick={() => loadMore()}>
        Barchasi ko’rish
      </button>
    </div>
  );
};
