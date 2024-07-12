import ProductsList from "../../components/products/productsList"
import Clothes from "../../components/products/clothes"
import ClothesOnline from "../../components/products/ClothesOnline"
import { Link } from "react-router-dom"
import './productScre.css'
export default function Products() {
  return (
    <div className="products">
        <div className="title">
            <Link to={'/'}><p>home</p></Link>
            <span className="icon-chevron-right"/>
            <span>products </span>
        </div>
        <div className="theShow">
           <div > <ProductsList /></div>
            <div ><Clothes /></div>
        </div>
        <ClothesOnline/>
    </div>
  )
}
