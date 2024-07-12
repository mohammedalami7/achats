import './slidbare.css'
import  { useContext } from 'react';
import { SidebarContext } from '../slidebare/sidbarecontext';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'
import { staticImages } from '../../utils/images';
export default function Slidbare() {
  const { sidebar, setSidebar } = useContext(SidebarContext);
 
  return (
    <>
    <AnimatePresence>
   {sidebar &&
   
    <motion.div className="slidbare"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'keyframes', stiffness: 100, damping: 20 }}
    >
      <div className="logo2">
        <span>
            <img src={staticImages.logo} alt="" />
            <h1>achats.</h1>
        </span>
        <span className="icon-close" onClick={()=>{setSidebar(false)}}/>
      </div>
      <div className="search2">
          <span className="icon-search"/>
          <input type="search" name="" id="" placeholder='search' />
      </div>
      <ul className="pages">
        <Link to={'/'}>
        <li >
          <span className='icon-home-outline'/>
          home
        </li>
        </Link>
        <Link to={'/products'}> 
        <li>
        <span className='icon-grid'/>
          products
        </li>
        </Link>
        <Link to={'/wishlist'}>
        <li>
        <span className='icon-heart'/>
          wishlist
        </li>
        </Link>
        <Link to={'/sign_up'}>
        <li>
        <span className='icon-user'/>
          my account
        </li>
        </Link>
        {/* <Link>
        <li>
        <span className='icon-shopping-cart'/>
          cart
        </li>
        </Link> */}
      </ul>
    </motion.div>
    
   }
   </AnimatePresence>
   </>
  )
}