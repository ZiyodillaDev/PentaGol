import news from "./news.scss";
import Stadium from "../../assets/images/stadium.png";
import New1 from "../../assets/images/new1.png";
import New2 from "../../assets/images/new2.png";
import New3 from "../../assets/images/new3.png";
import New4 from "../../assets/images/new4.png";
import New5 from "../../assets/images/new55.png";
import New6 from "../../assets/images/new6.png";
import LogoBarcelona from "../../assets/images/barcelona.png";
import { Link } from "react-router-dom";
import { Register } from "../../pages/Register/Register";

export const News = () => {
  return (
    <div className="container news">
      <Link to={<Register/>}>admin page</Link>
      <div className="cards">
        <div className="card_portfolio">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="link_portfolio"
          >
            <img className="img-card" src={Stadium} alt="card-img" />

            <div className="active_div" id="active_card"></div>
            <div className="card_content ">
              <h1 className="p">
                Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga
                olib boradi: bo'g'inlar oldidagi barcha maketlar
              </h1>
              <p className="time">2 soat oldin</p>
            </div>
          </a>
        </div>

        <div>
          <div className="little_img">
            <div className="card_portfolio3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link_portfolio"
              >
                <img className="img-card" src={New1} alt="card-img" />
                <div className="active_div" id="active_card"></div>
                <div className="card_content ">
                  <p className="p3">
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </p>
                  <p className="time3">3 soat oldin</p>
                </div>
              </a>
            </div>
            <div className="card_portfolio3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link_portfolio"
              >
                <img className="img-card" src={New2} alt="card-img" />
                <div className="active_div" id="active_card"></div>
                <div className="card_content ">
                  <p className="p3">
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </p>
                  <p className="time3">3 soat oldin</p>
                </div>
              </a>
            </div>
            <div className="card_portfolio3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link_portfolio"
              >
                <img className="img-card" src={New3} alt="card-img" />
                <div className="active_div" id="active_card"></div>
                <div className="card_content ">
                  <p className="p3">
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </p>
                  <p className="time3">3 soat oldin</p>
                </div>
              </a>
            </div>
          </div>
          <div className="little_img">
            <div className="card_portfolio3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link_portfolio"
              >
                <img className="img-card" src={New4} alt="card-img" />
                <div className="active_div" id="active_card"></div>
                <div className="card_content ">
                  <p className="p3">
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </p>
                  <p className="time3">3 soat oldin</p>
                </div>
              </a>
            </div>
            <div className="card_portfolio3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link_portfolio"
              >
                <img className="img-card" src={New5} alt="card-img" />
                <div className="active_div" id="active_card"></div>
                <div className="card_content ">
                  <p className="p3">
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </p>
                  <p className="time3">3 soat oldin</p>
                </div>
              </a>
            </div>
            <div className="card_portfolio3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link_portfolio"
              >
                <img className="img-card" src={New6} alt="card-img" />
                <div className="active_div" id="active_card"></div>
                <div className="card_content ">
                  <p className="p3">
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </p>
                  <p className="time3">3 soat oldin</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* table  */}
      <div className="tables">
        <h3>Jadval</h3>
        <select name="text" id="text">
          <option value="">Italiya. A seriya</option>
          <option value="">Italiya. A seriya</option>
          <option value="">Italiya. A seriya</option>
          <option value="">Italiya. A seriya</option>
        </select>
        <div className="top">
          <div className="top-all">№</div>
          <div className="top-all comanda">Команда</div>
          <div className="top-all i">И</div>
          <div className="top-all o">О</div>
        </div>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
        <ul>
          <li>1</li>
          <li><img src={LogoBarcelona} alt="" /></li>
          <li>Barcelona</li>
          <li className="num1">15</li>
          <li className="num2">14</li>
        </ul>
      </div>
    </div>
  );
};
