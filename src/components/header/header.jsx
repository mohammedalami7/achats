import './header.css'
import  { useContext } from 'react';
import { SidebarContext } from '../slidebare/sidbarecontext'; 
import { Link } from 'react-router-dom';
import { staticImages } from '../../utils/images';
export default function Header() {

  // eslint-disable-next-line no-unused-vars
  const { sidebar, setSidebar } = useContext(SidebarContext);
  
  return (
    <div className='header' id="up">
      <div className="logo">
      <span className='icon-menu' onClick={()=>{setSidebar(true)}} />
      {/* <img src="src\assets\images\logo.png" alt="" /> */}
      <img src={staticImages.logo}/>
        <Link to={"/"}>
      
          <h1>achats.</h1>
        </Link>
      </div>
      <div className="shearch">
        <ul>
          <Link to={"/wishlist"}><li>shop</li></Link>
          <Link to={"/men"}><li>men</li></Link>
          <Link to={"/women"}><li>women</li></Link>
          <Link to={"/products"}> <li>fashion</li></Link>
          {/* <li>combos</li> */}
        </ul>
        <span className='span'>
          <span className='icon-search'/>
          <input type="search" name="" id="" placeholder='search...'/>
        </span>
      </div>
      <div className="user">
      <Link to={"/wishlist"}><span className='icon-heart'/></Link>
      <Link to={"/sign_up"}><span className='icon-user-circle-o'/></Link>
      {/* <linK><span className='icon-cart'/></linK> */}
      </div>
    </div>
  )
}


