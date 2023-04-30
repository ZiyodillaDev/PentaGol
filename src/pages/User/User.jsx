import { EndNews } from "../../components/EndNews/EndNews";
import { AllNews } from "../../components/AllNews/AllNews";
import { News } from "../../components/News/News";
import { Article } from "../../pages/Article/Article";
import { Header } from "../../components/Header/Header";
import { FirstWeek } from "../../components/FirstWeek/FirstWeek";
import { LastWeek } from "../../components/LastWeek/LastWeek";
import { Footer } from "../../components/Footer/Footer";

export const User = () => {
  return (
    <div>
      <Header/>
      <FirstWeek/>
      <LastWeek/>
      <News />
      <EndNews />
      <AllNews />
      <Footer/>
      {/* <Article /> */}
    </div>
  );
};
