import { AllNews } from "./components/AllNews/AllNews";
import { FirstWeek } from "./components/FirstWeek/FirstWeek";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { LastWeek } from "./components/LastWeek/LastWeek";

function App() {
  return (
    <div>
      <Header/>
      <FirstWeek/>
      <LastWeek/>
      <Footer/>
      {/* <AllNews /> */}
    </div>
  );
}

export default App;
