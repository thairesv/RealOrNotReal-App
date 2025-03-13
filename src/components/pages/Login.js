import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../Redux/loginSlice";
import styles from "../../styles/forms.css"
import axios from "../../utils/axios";

const Login = () => {
  const dispatch = useDispatch(); // Using `useDispatch` to get the dispatch function
  const userRef = useRef(); // userRef set focus on first input when component loads
  const errRef = useRef(); // errRef set focus on the error when if it occurs
  const navigate = useNavigate(); // Initialize useNavigate

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // 4 pieces of state

  // Set focus on USername when page load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Empty error message, if user changes their username or password
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleGoHomeClick = () => {
    navigate("/intro");
  };

  const handleSignUpClick = () => {
    navigate("/register"); // Navigate to the "/register" page when the button is clicked
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default behavior of the page, which is to reload upon submit

    try {
      // debugger; // Remove when you want to use
      await axios.post(
        "api/user/login",
        { name: user, password: pwd },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      dispatch(loginSuccess(user)); //Add username to Redux
      setSuccess(true); // Conditional rendering based on login success or not
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Invalid username or password");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus(); // Set the focus on the error display
    }
  };

  //If successful login, display happy text and hyperlink to Intro page
  return (
    <>
      {success ? (
        <section>
          {" "}
          <h1> You are logged in!</h1> <br />{" "}
          <button className="line pointer" onClick={handleGoHomeClick}>
          <i class="fa-solid fa-house"></i>Go to Home
          </button>
        </section>
      ) : (
        <section>
          <h1>Real or Not Real</h1>
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className="form-row">
              <div className="user-col">
                <label htmlFor="username" className="label">Username:</label>
                <input
                  required
                  type="text"
                  id="username"
                  className="input"
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  ref={userRef} // Set focus on the Username field
                  value={user} //Crucial for clearing inputs upon submission
                />
              </div>
              <div className="pw-col">
                <label htmlFor="password" className="label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="input"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                />
              </div>
            </div>
            <div className="row">
              <button className="login pointer">Login</button>
            </div>
            <div
              ref={errRef}
              className="errorMessage"
              aria-live="assertive"
            >
              {errMsg}
            </div>
          </form>
          <div className="row">
          <button className="deep-fake-button pointer" onClick={handleSignUpClick}>New here? <u>Sign-up for an account</u></button>
        </div>
        </section>
      )}
    </>
  );
};

export default Login;
