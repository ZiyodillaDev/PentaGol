import "./endNews.scss";
import { Card, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
const { Meta } = Card;
import EndNew1 from "../../assets/images/endnew1.png";
import { Avatar, Button, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
const count = 3;
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
            <a href="#" style={{ textDecoration: "none" }}>
              <Card
                hoverable
                style={{
                  width: 415,
                  height: 410,
                  background: "#F4F5F7",
                  paddingTop: 10,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 15,
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
                  style={{ width: "375px", height: 54, marginTop: "-15px" }}
                >
                  {el.title}
                </Title>
                <Meta
                  description={el.p}
                  style={{
                    paddingBottom: 15,
                  }}
                />
                <Title
                  level={5}
                  style={{
                    color: "#898989",
                  }}
                >
                  {el.time}
                </Title>
              </Card>
            </a>
          );
        })}
      </div>
      <button className="btn" onClick={() => loadMore()}>
        Barchasi ko’rish
      </button>
    </div>
  );
};
