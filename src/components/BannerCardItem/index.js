// Write your code here.
import './index.css'

const BannerCardItem = props => {
  // console.log(props)
  const {bannerDetails} = props
  const {className, description, headerText} = bannerDetails
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
