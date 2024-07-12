import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import AuthLayout from "./components/Layouts/AuthLayout";
import BaseLayout from "./components/Layouts/BaseLayout";
// components
import CategoMen from "./components/home/categoMen";
import CategoWomen from "./components/home/categoWomen";
// screens
import Homescreen from "./screens/homeSc/homeScreen";
import Products from "./screens/productsScr/products";
import Wishlist from './screens/wishlistScr/wishlistScre';
// authentication
import SignInScreen from "./screens/auth/signInScreen";
import SignUpScreen from "./screens/auth/signUpScreen";
import ResetScreen from "./screens/auth/resetScreen";
import CheckMailScreen from "./screens/auth/CheckMailScreen";

import './index.css'

export default function App() {

    return(
     <>
     <Router>
        <Routes>
            {/* main screens */}
            <Route path="/" element={<BaseLayout/>}>
                <Route index element={<Homescreen/>}/>
                <Route  path="/products" element={<Products/>}/>
                <Route path="/wishlist" element={<Wishlist/>} />
                <Route path="/men" element={<CategoMen/>} />
                <Route path="/women" element={<CategoWomen/>} />
            </Route>
            {/* auth screens */}
            <Route path="/" element={<AuthLayout/>}>
                <Route path="sign_in" element={<SignInScreen/>} />
                <Route path="sign_up" element={<SignUpScreen/>}/>
                <Route path="reset" element={<ResetScreen/>}/>
                <Route path="change_password" element={<CheckMailScreen/>}/>
            </Route>
        </Routes>
    </Router>
      </>
    )
}


