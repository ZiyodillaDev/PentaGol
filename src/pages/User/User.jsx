import { EndNews } from "../../components/EndNews/EndNews";
import { AllNews } from "../../components/AllNews/AllNews";
import { News } from "../../components/News/News";
import { Article } from "../../pages/Article/Article";
import { Header } from "../../components/Header/Header";
import { FirstWeek } from "../../components/FirstWeek/FirstWeek";
import { LastWeek } from "../../components/LastWeek/LastWeek";
import { Footer } from "../../components/Footer/Footer";
import { Route, Routes } from "react-router";

export const User = () => {
  return (
    <div>
      <FirstWeek />
      <LastWeek />
      <News />
      <EndNews />
      <AllNews />
    </div>
  );
};
