import "./styles.scss";

export function Login() {
  return (
    <div className="formWrapper">
      <form className="loginForm">
        <span className="loginTitle">Login</span>
        <div className="inputContainer">
          <label htmlFor="femail">Email</label>
          <input type="text" name="femail" id="femail" />
          <label htmlFor="fpassword">Password </label>
          <input type="text" name="fpassword" id="fpassword" />
        </div>
        <div className="rememberContainer">
          <div>
            <input type="checkbox" name="fremember" id="fremember" />
            <label htmlFor="fremember">Remember me</label>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="submitButton" value="submit">
          Login
        </button>
        <span>
          Don't have an account? <a href="#">Sign up</a>
        </span>
      </form>
    </div>
  );
}
