// Write your code here
import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item

  return (
    <li className="place-card">
      <img src={imgUrl} alt={name} className="img" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
