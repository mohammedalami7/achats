
import './home.css'
import { savingZoneData } from '../../data/data'
export default function SavingZone() {
  return (
    <section className='saving'>
        <div>
        <h1 className='title'>big saving zone</h1>
        </div>
        <div className="zone">
            {savingZoneData.map((item)=>(
                <div className="element" key={item.id}>
                    <div className="information">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <h3>UPTO {item.discount} OFF</h3>
                        <span className='icon-chevron-thin-down'/>
                        <a href="#">shop now</a>
                    </div>
                    <img src={item.imgSource} alt={item.title}  />
                </div> 
            ))}
        </div>
    </section>
  )
}
