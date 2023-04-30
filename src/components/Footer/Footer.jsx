import "./footer.scss";
import logo from "../../assets/images2/logo.svg";
import twitter from "../../assets/images2/twitter.svg";
import youtube from "../../assets/images2/youtube.svg";
import vk from "../../assets/images2/Vkontakte.svg";
import skype from "../../assets/images2/skype.svg";
import instagram from "../../assets/images2/instagram.svg";
import facebook from "../../assets/images2/facebook.svg";
import telegram from "../../assets/images2/telegram.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_left">
            <div className="social-medias">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="pages">
              <div className="menu">
                <a href="#">Main</a>
                <a href="#">Mach center</a>
                <a href="#">Football</a>
                <a href="#">Tennis</a>
                <a href="#">Cybersport</a>
              </div>
            </div>
            <div className="contact">
              <div className="menu">
                <a href="#">Main</a>
                <a href="#">Mach center</a>
                <a href="#">Football</a>
                <a href="#">Tennis</a>
                <a href="#">Cybersport</a>
              </div>
            </div>
            <div className="contact">
              <div className="menu">
                <a href="#">Main</a>
                <a href="#">Mach center</a>
                <a href="#">Football</a>
                <a href="#">Tennis</a>
                <a href="#">Cybersport</a>
              </div>
            </div>
          </div>
          <div class="social">
            <div class="icons">
              <div className="icontop">
                <div class="icon twitter">
                  <div class="tooltip"> Twitter </div>
                  <a href="#">
                    <img src={twitter} />
                  </a>
                </div>

                <div class="icon youtube">
                  <div class="tooltip"> Youtube </div>
                  <a href="#">
                    <img src={youtube} />
                  </a>
                </div>

                <div class="icon vk">
                  <div class="tooltip"> Vkontakte </div>
                  <a href="#">
                    <img src={vk} />
                  </a>
                </div>
              </div>

              <div className="iconbottom">
                <div class="icon skype">
                  <div class="tooltip"> Skype </div>
                  <a href="#">
                    <img src={skype} />
                  </a>
                </div>
                <div class="icon instagram">
                  <div class="tooltip"> Instagram </div>
                  <a href="#">
                    <img src={instagram} />
                  </a>
                </div>
                <div class="icon facebook">
                  <div class="tooltip"> Facebook </div>
                  <a href="#">
                    <img src={facebook} />
                  </a>
                </div>
                <div class="icon skype">
                  <div class="tooltip"> Telegram </div>
                  <a href="#">
                    <img src={telegram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
