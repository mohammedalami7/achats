import './header.css'
import { Link } from 'react-router-dom'
import { staticImages } from '../../utils/images'
export default function Autheader() {
  return (
    <div className="autheader" id="up">
      <div className="logo">
        <img src={staticImages.logo} alt="" />
        <Link to={"/"}><h1>achats.</h1></Link>
      </div>
      <div className="register">
        <Link to={'sign_in'} className='linkk'>
        <input type="button" value="login" />
        </Link>
        <Link to={'sign_up'}>
        <input type="button" value="sign up" />
        </Link>
      </div>
    </div>
  )
}
