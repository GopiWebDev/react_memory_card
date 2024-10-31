/* eslint-disable react/prop-types */
const Card = ({ name, image, click }) => {
  return (
    <div className='card' onClick={() => click(name)}>
      <img src={image} alt={`image of ${name}`} />
      <p>{name}</p>
    </div>
  )
}

export default Card
