const Object = props => {
  const {details} = props
  const {imageUrl, name, genre, duration} = details
  return (
    <div>
      <li>
        <img src={imageUrl} alt="track" />
        <p>{name}</p>
        <p>{genre}</p>
        <p>{duration}</p>
      </li>
    </div>
  )
}
export default Object
