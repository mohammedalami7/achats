
import { Link } from "react-router-dom";
import './auth.css';

import { staticImages } from "../../utils/images";
export default function SignUpScreen() {
  return (
    <div className="signup">
      <div className="img">
        {/* <img src="src/assets/images/form_img2.png" alt="Form" /> */}
        <img src={staticImages.form_img1} alt="" />
      </div>
      <div className="register">
        <h2>Sign Up</h2>
        <p>Sign up for free to access any of our products</p>
        <div className="links">
          <Link to="/" className="link">
            <span>
        
              <img src={staticImages.google} />
            </span>
            <span>Continue With Google</span>
          </Link>
          <Link to="/" className="link">
            <span>
              
              <img src={staticImages.twitter} />
            </span>
            <span>Continue With Twitter</span>
          </Link>
        </div>
        <form action="" method="">
          <div className="email">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Your email" required />
          </div>
          <div className="pass">
            <label>Password</label>
            <input type="password" name="password" placeholder="Your password" required />
            <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
          </div>
          <div className="termes">
            <span>
              <input type="checkbox" name="terms" id="terms" required />
              <label htmlFor="terms">Agree to our Terms of Use and Privacy Policy</label>
            </span>
            <span>
              <input type="checkbox" name="newsletter" id="newsletter" />
              <label htmlFor="newsletter">Subscribe to our monthly newsletter</label>
            </span>
          </div>
          <button type="submit" className="sign">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/sign_in">Log in</Link>
        </p>
      </div>
    </div>
  );
}
