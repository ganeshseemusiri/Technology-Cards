import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} list-card-container`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img className="img-size" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
