import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsingupContainer">
        <h1>Sign Up</h1>
        <div className="loginSignUpFields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginSignUp">
          Already have an account? <span>Login here</span>
          <div className="loginSignUpAgree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
