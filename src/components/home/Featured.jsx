import './home.css'
import { staticImages } from '../../utils/images'
export default function Featured() {
  return (
    <div className="featured">
        <div className="box">
            <div className="details">
                <span>Low Price</span>
                <span>
                    <h1>High Coziness</h1>
                    <p>UPTO 50% OFF</p>
                </span>
                <a href="">Explore Items</a>
            </div>
            <img src={staticImages.img1} alt="" />
        </div>
        <div className="box">
        <div className="details">
                <span>Beyoung Presents</span>
                <span>
                    <h1>Breezy Summer Style</h1>
                    <p>UPTO 30% OFF</p>
                </span>
                <a href="">Explore Items</a>
            </div>
            <img src={staticImages.img2} alt="" />
        </div>
    </div>
  )
}
