import "./article.scss";
import AricleImg from "../../assets/images/stadium.png";
import cardData from "../../components/EndNews/data";
import { Card, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

import Meta from "antd/es/card/Meta";
import { useState } from "react";
import { useParams } from "react-router";

export const Article = () => {
  const { name } = useParams();
  const [noOfElements, setnoOfElements] = useState(12);
  const slice = cardData.slice(0, noOfElements);
  return (
    <div className="container">
      <div className="all-news">
        <div className="left">
          <p className="times">2 soat oldin</p>
          <h1 className="h1">
            Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga olib
            boradi: bo'g'inlar oldidagi barcha maketlar
          </h1>
          <img className="img-news" src={AricleImg} alt="newsImg" />
          <p className="news-txt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            dignissimos. Porro accusantium, cupiditate aliquid officia magni,
            soluta natus vel iste voluptatem sapiente vero tempore eligendi qui.
            Dolore fuga nihil, dolorem autem harum recusandae itaque
            consequuntur. Ratione quam labore aut nulla id doloremque numquam
            aliquam ipsam alias sed magni quis optio repudiandae animi
            perspiciatis iste ducimus itaque minus soluta ea, vero pariatur nisi
            cum? Iure similique quos facilis ipsa, porro voluptas sed cumque
            deleniti eaque sint modi praesentium enim dignissimos exercitationem
            cum magnam autem sequi eveniet explicabo delectus. Quas voluptatem,
            temporibus unde, aperiam dicta cumque sapiente, possimus
            perspiciatis molestiae eius magnam! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Aliquam, corrupti accusantium aut vero
            laboriosam dolorem sed, molestias recusandae minus atque vitae error
            hic maxime deleniti quis harum perferendis, numquam quam cumque
            autem fugiat! Pariatur vel recusandae error eum a iusto fugiat
            molestias laudantium. Harum magni earum ex labore. Nihil tempore
            necessitatibus aliquam autem nam repudiandae, doloremque ex velit
            aspernatur ratione iusto beatae aut! Error minima pariatur quia
            reprehenderit sint dolores necessitatibus ipsum quas unde in esse
            iure a sit tenetur est molestias quis, iusto adipisci quibusdam!
            Similique fugit saepe in, obcaecati repellat, inventore quis,
            laborum rerum alias quaerat dolorem sunt.
          </p>
        </div>
        <div className="right">
          <div className="right_tables">
            <h5>Asosiy</h5>
            <p className="text_card">
              Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
            </p>
            <p className="time_cards">12.05.2021 12:54</p>
            <p className="line"></p>
            <p className="text_card">
              Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
            </p>
            <p className="time_cards">12.05.2021 12:54</p>
            <p className="line"></p>
            <p className="text_card">
              Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
            </p>
            <p className="time_cards">12.05.2021 12:54</p>
            <p className="line"></p>
            <p className="text_card">
              Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
            </p>
            <p className="time_cards">12.05.2021 12:54</p>
          </div>
          <div className="right_tables end_table">
            <h5>Asosiy</h5>
            <p className="text_card">
              Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
            </p>
            <p className="time_cards">12.05.2021 12:54</p>
            <p className="line"></p>
            <p className="text_card">
              Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
            </p>
            <p className="time_cards">12.05.2021 12:54</p>
            <p className="line"></p>
            <p className="text_card">
              Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
            </p>
            <p className="time_cards">12.05.2021 12:54</p>
            <p className="line"></p>
            <p className="text_card">
              Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
            </p>
            <p className="time_cards">12.05.2021 12:54</p>
          </div>
        </div>
      </div>
      <div className="news_ends_all">
        <div className="head_line">So'ngi yangiliklar</div>
        <Link to="/article" style={{ textDecoration: "none" }}>
          <div className="end_news">
            {slice.map((el) => {
              return (
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
                    border: "1px solid var(--table-grey)",
                  }}
                  cover={<img alt="example" src={el.img} />}
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
              );
            })}
          </div>
        </Link>
      </div>
    </div>
  );
};
