import Hero from '../../components/home/hero'
import Featured from '../../components/home/Featured'
import Arrivals from '../../components/home/arrivals'
import SavingZone from '../../components/home/savingZone'
import CategoMen from '../../components/home/categoMen'
import CategoWomen from '../../components/home/categoWomen'
import Brands from '../../components/home/brands'
import Feedback from '../../components/home/feedback'
export default function Homescreen() {
  return (
    <div className='home'>
        <Hero/>
        <Featured/>
        <Arrivals/>
        <SavingZone/>
        <CategoMen/>
        <CategoWomen/>
        <Brands/>
        <Feedback/>
    </div>
  )
}
