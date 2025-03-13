import { useRef, useState, useEffect } from "react"; // Adding React Hooks
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../Redux/loginSlice";
import styles from "../../styles/forms.css"
import axios from "../../utils/axios";

const Register = () => {
  const dispatch = useDispatch(); // Using `useDispatch` to get the dispatch function
  const userRef = useRef(); // userRef set focus on first input when component loads
  const navigate = useNavigate(); // Initialize useNavigate

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  // Set focus on Username when page load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleGoHomeClick = () => {
    navigate("/intro");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default behavior of the page, which is to reload upon submit

    // debugger; // Remove when you want to use
    await axios.post(
      "api/user/register",
      { name: user, password: pwd },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    dispatch(loginSuccess({ name: user })); //Add username to Redux
    setSuccess(true); // Conditional rendering based on registration
  };

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
        <div>
          <h1>Register for an account</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className="form-row">

              <div className="user-col">
                <label htmlFor="username" className="label">Username:</label>
                <input
                  required
                  type="text"
                  id="username"
                  className="input"
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
                  required
                  type="password"
                  id="password"
                  className="input"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd} //Crucial for clearing inputs upon submission
                />
              </div>
            </div>
          <div className="row">
            <button className="pointer">Register</button>
          </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
