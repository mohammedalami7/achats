import './auth.css'
import { staticImages } from '../../utils/images'
export default function CheckMailScreen() {
  return (
    <div className='changepass'>
        <div className='img'>
            <img src={staticImages.form_img4} alt="" />
        </div>
        <div className="change">
            <div>
                <h3>Create New Password</h3>
                <p>
                    Your new password mst be different from previous  <dd/> used 
                    passwords.
                </p>
            </div>
            <form>
                <span>
                <label htmlFor="">password</label>
                <input  name="password" type='password' />
                </span>
                <span>
                <label htmlFor="">confirm password</label>
                <input type='passworf' name="confirm_password" />
                </span>
                <input type="submit"  value={' Reset Password'} className='submit'/>
            </form>
            </div>
    </div>
  )
}
