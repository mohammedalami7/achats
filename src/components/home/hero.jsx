import "./home.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { staticImages } from "../../utils/images";
export default function Hero() {
  return (
    <div className="content" >
         <Swiper
        pagination={{dynamicBullets: false,}}
        modules={[Pagination]}
        className="myswiper"
        loop={true}
        >
       
        <SwiperSlide >
          <div className="info">
            <h3>t-shirt / tops</h3>
            <h1>summer value <dd/> pack</h1>
            <p>cool / colorful / comfy</p>
            <a href="">shop now</a>
          </div>
            
            <img src={staticImages.hero_img1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
        <div className="info">
            <h3>quality / branded</h3>
            <h1>season of offers</h1>
            <p>offers/heavy discount/coupons</p>
            <a href="">shop now</a>
        </div>
            <img src={staticImages.hero_img2} alt="" />
        </SwiperSlide>
        <SwiperSlide >
        <div className="info">
            <h3>seasonal attire / collection</h3>
            <h1>new arrivales & <dd/> special</h1>
            <p>stylish/trendy</p>
            <a href="">shop now</a>
        </div>
          
            <img src={staticImages.hero_img3} alt="" />
        </SwiperSlide>
        <SwiperSlide >
        <div className="info">
            <h3>party / wedding dress</h3>
            <h1>fashionable  <dd/> choice for <dd/> occasion</h1>
            <p>offers / discount / coupons</p>
            <a href="">shop now</a>
          </div>
          <img src={staticImages.hero_img4} alt="" />
        </SwiperSlide>
    </Swiper>
    </div>
  )
}
