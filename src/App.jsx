import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { User } from "./pages/User/User";
import { Route, Routes } from "react-router";
import { Article } from "./pages/Article/Article";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  // const localdata = localStorage.getItem("token");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/article" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
