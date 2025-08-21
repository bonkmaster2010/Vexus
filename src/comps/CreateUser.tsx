import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCreateUser } from "../states/CreateUserState";
import { useMain } from "../states/MainStates";
import "../styles/CreateUser.css";

function CreateUser() {
  const {
    name, setName,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    nameError, setNameError,
    emailError, setEmailError,
    passwordError, setPasswordError,
    confirmPasswordError, setConfirmPasswordError,
  } = useCreateUser();

  const navi = useNavigate();
  const { SignUp, registered } = useMain();

  function handleSignUp() {
    let valid = true;

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!name) {
      setNameError("This field is required");
      valid = false;
    }

    if (!email) {
      setEmailError("This field is required");
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Enter a valid email");
      valid = false;
    }

    if (!password) {
      setPasswordError("This field is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("This field is required");
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    }

    if (valid) {
      SignUp();
      navi("/");
    }
  }

  useEffect(() => {
    if (registered) {
      navi("/");
    }
  }, [registered, navi]);
  
  useEffect(() => {}, [nameError, emailError, passwordError, confirmPasswordError])

  return (
    <div className="main-create-user-cont">
      <h1 className="create-user-logo" onClick={() => navi('/')}>Vexus</h1>

      <div className="create-user-cont-wrapper">
        <p className="create-user-input-cont-title">Create an account with Vexus</p>

        <div className="create-user-input-cont">
          <input
            className={nameError ? "error-input" : ""}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              const val = e.target.value;
              setName(val);
              if (val.trim() !== "") setNameError("");
            }}
          />
          <label className="place-error">
            {nameError || "\u00A0"}
          </label>

          <input
            className={emailError ? "error-input" : ""}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              const val = e.target.value;
              setEmail(val);
              if (/^\S+@\S+\.\S+$/.test(val)) setEmailError("");
            }}
          />
          <label className="place-error">
            {emailError || "\u00A0"}
          </label>

          <input
            className={passwordError ? "error-input" : ""}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              const val = e.target.value;
              setPassword(val);
              if (val.length >= 6) setPasswordError("");
              if (confirmPassword === val) setConfirmPasswordError("");
            }}
          />
          <label className="place-error">
            {passwordError || "\u00A0"}
          </label>

          <input
            className={confirmPasswordError ? "error-input" : ""}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              const val = e.target.value;
              setConfirmPassword(val);
              if (val === password) setConfirmPasswordError("");
            }}
          />
          <label className="place-error">
            {confirmPasswordError || "\u00A0"}
          </label>

          <button className="register-btn" onClick={handleSignUp}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
