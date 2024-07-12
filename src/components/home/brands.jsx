import './home.css'
import { brandsData } from '../../data/data'
export default function Brands() {
  return (
    <div className='brands'>
        <div>
            <h1>Top Brands Deal</h1>
            <p>Up to 60% off on brands.</p>
        </div>
        <div className="brand">
        {brandsData.map((brn)=>(
            <img src={brn.imgSource} alt={brn.id} key={brn.id} />
        ))}
        </div>
    </div>
    )
}
