import { Link } from "react-router-dom"
import './auth.css'
import { staticImages } from "../../utils/images"
export default function ResetScreen() {
  return (
  <div className="reset">
    <div className="img">
      
      <img src={staticImages.form_img3} alt="" />
    </div>
    <div className="restart">
      <div className="head">
        <h3>Reset Your Password</h3>
        <p>
          Enter your email and we &apos;ll send you a link to reset your
          password.
        </p>
        <p>Please check it.</p>
      </div>

      <form>
        <div>
                <label htmlFor="" >
                  Email
              </label>
              <input
                  type="text"
                  placeholder=""
                  name=""/>
        </div>
        <input type="button" value="send" className="send" />
      </form>
      <p  className="back">
        <Link to="/sign_in" >
          Back to Login
        </Link>
      </p> 
    </div>
  </div>
  )
}
