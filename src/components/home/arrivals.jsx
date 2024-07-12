import { NewArrivalData } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import './home.css'
export default function App() {
  return (
    <section className='arrivals'>
      <div>
        <h1 className='title'>new arrival</h1>
      </div>
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        // loop={true}
        modules={[Pagination]}
        className="swiping"
        breakpoints={{
          // when window width is <= 640px
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is <= 768px
          641: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is <= 1024px
          769: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
       {NewArrivalData.map(function(product){
        return(
           <SwiperSlide key={product.id} className='swiperslide'>
            <img src={product.imgSource} alt=""  />
            <h1>{product.title}</h1>
           </SwiperSlide>)
       })} 
      </Swiper>
    </>
    </section>
  );
}