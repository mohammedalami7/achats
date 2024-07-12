import { Link } from "react-router-dom"
import './auth.css'

import { staticImages } from "../../utils/images";
export default function SignInScreen() {
  
  return (
    <div className="signIn">
      <div className="img">
      {/* <img src="src\assets\images\form_img1.png"  /> */}
      <img src={staticImages.form_img2} alt="" />
      </div>
      <div className="login">
        <h2>sign in</h2>
        <div className="links">
        <Link to="/" className="link" >
        <span >
          <img src={staticImages.google} />
        </span>
        <span >Continue With Google</span>
        </Link>
        <Link to="/" className="link">
          <span >
          <img src={staticImages.twitter} />
        </span>
        <span >Continue With Twitter</span>
        </Link>
        </div>
         <div className="or">
          or
         </div>
      <form action="">
        <div className="email">
          <label htmlFor="" >email address</label>
          <input type="email" name="email" id=""  placeholder="Your email" required/>
        </div>
        <div className="pass">
          <label htmlFor="">password</label>
          <input type='password' name="password" id="" placeholder="Your password" required/>
          <Link to="/reset">Forgot your password?</Link>
        </div>
        <button type="submit" className="sign">Sign In</button>
      </form>
      <p >
        Don&apos;t have a account?
        <Link to="/sign_up" > Sign Up</Link>
        </p>
      </div>
    </div>
  )
}
