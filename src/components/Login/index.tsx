import { Lock, Envelope } from "@phosphor-icons/react";

import { Input } from "../Input";
import "./styles.scss";

export function Login() {
  return (
    <div className="formWrapper">
      <form className="loginForm">
        <h1 className="loginTitle">Login</h1>
        <Input type="email" label="Email" icon={<Envelope size={20} />} required />
        <Input type="password" label="Password" icon={<Lock size={20} />} required />
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
