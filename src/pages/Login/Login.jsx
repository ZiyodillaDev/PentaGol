import { useRef } from "react";
import "./login.scss";
import axios from "axios";
export const Login = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleClick = () => {
    axios
      .post("https://reqres.in/api/register", {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.data.token);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="all_page">
      <div className="container ">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="email" ref={emailRef} name required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" ref={passwordRef} name required />
              <label>Password</label>
            </div>
            <a href="#">
              <span />
              <span />
              <span />
              <span />
              Submit
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
