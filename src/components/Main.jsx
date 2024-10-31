/* eslint-disable react/prop-types */
import runningGif from '../assets/images/running.gif'
import catGif from '../assets/images/cat.gif'
import Card from './Card'

const Main = ({ click, characters }) => {
  return (
    <div className='bg-[#FB9427] w-full mt-10'>
      <div className='wrapper relative p-10'>
        <img
          src={runningGif}
          alt='naruto running'
          className='animate absolute w-[5rem] -top-[3.8rem] sm:w-[6rem] md:w-[8rem] md:-top-[6.2rem] lg:w-[10rem] lg:-top-[7.8rem]'
        />
        <img
          src={catGif}
          alt='cat running'
          className='animate-cat absolute w-[9rem] -top-[5.8rem] sm:w-[6rem] md:w-[12rem] md:-top-[7.7rem] lg:w-[15rem] lg:-top-[9.7rem]'
          style={{ transform: 'translateX(-50vw)' }}
        />
        <div className='grid-section'>
          {characters.map((character) => {
            return (
              <Card
                key={character.name}
                name={character.name}
                image={character.image}
                click={click}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Main
