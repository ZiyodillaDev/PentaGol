import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { User } from "./pages/User/User";

function App() {
  const localdata = localStorage.getItem("token");
  if (localdata) {
    return (
      <div>
        <User />
      </div>
    );
  }
  return <Register />;
}

export default App;
