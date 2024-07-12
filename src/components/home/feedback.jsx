import './home.css'
import { feedbackData } from '../../data/data'
export default function Feedback() {
  return (
    <section className='feedback'>
        <div className="title">
          <h1>feedback</h1>
        </div>
        <div className="feeds">
          {feedbackData.map((feed)=>(
            <div className="feed" key={feed.id}>
                <div className="profile">
                  <span className='span'>
                    <img src={feed.imgSource} alt={feed.name} />
                    <span>
                      <h4>{feed.name}</h4>
                      <p>{feed.designation}</p>
                    </span>
                  </span>
                  <div className="rating">
                  {Array.from({ length:feed.rating }).map((_, i) => (
                                <span className='icon-star' key={i} />
                            ))}
                  </div>
                </div>
                <div className="description">
                  <p>{feed.feedbackText}</p>
                </div>
            </div>
          ))}
        </div>
    </section>
  )
}
