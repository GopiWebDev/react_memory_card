/* eslint-disable react/prop-types */
import Tilt from 'react-parallax-tilt'

const Card = ({ name, image, click }) => {
  return (
    <Tilt>
      <div className='card' onClick={() => click(name)}>
        <img src={image} alt={`image of ${name}`} />
        <p>{name}</p>
      </div>
    </Tilt>
  )
}

export default Card
