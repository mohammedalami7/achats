import Footer from '../footer/footer';
import Autheader from '../header/Autheader';
import { Outlet } from 'react-router-dom';


export default function AuthLayout() {
  return (
    <div className="page-wrapper"> 
      <Autheader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
