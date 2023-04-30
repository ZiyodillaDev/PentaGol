import "./endNews.scss";
import { Card, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
const { Meta } = Card;
import EndNew1 from "../../assets/images/endnew1.png";
import { Avatar, Button, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import cardData from "./data";
import axios from "axios";

export const EndNews = () => {
  const [noOfElements, setnoOfElements] = useState(8);
  const [data, setData] = useState([]);
  const slice = data.slice(0, noOfElements);
  const loadMore = () => {
    setnoOfElements(noOfElements + 4);
  };
 useEffect(()=>{
  const EndNews = async () => {
    const data = await axios.get(
      "http://127.0.0.1:8000/article/list_last/"
    );
    // console.log(data.data);
    setData(data.data)

  }
  EndNews()

 },[])
 

  // console.log(data);
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
                  height: 500,
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
                    src={el.image}
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
                  {el.description}
                </Title>
                <Title
                  level={5}
                  style={{
                    color: "var(--text)",

                    marginTop: "-30px",
                    marginLeft: "-20px",
                  }}
                >
                  {el.created_date}
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
