import { EndNews } from "../../components/EndNews/EndNews";
import { AllNews } from "../../components/AllNews/AllNews";
import { News } from "../../components/News/News";
import { Article } from "../../pages/Article/Article";
export const User = () => {
  return (
    <div>
      <News />
      <EndNews />
      <AllNews />
      <Article />
    </div>
  );
};
