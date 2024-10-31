import logo from '../assets/images/logo.png'

// eslint-disable-next-line react/prop-types
const Header = ({ score, bestScore }) => {
  return (
    <header className='bg-header bg-center bg-cover max-h-[12rem] h-32 sm:h-48 lg:h-64'>
      <div className='wrapper flex items-center justify-between h-full w-full'>
        <img
          src={logo}
          alt=''
          className='h-auto w-[7rem] aspect-[16/10] lg:w-[12rem] md:w-[10rem] sm:w-[10rem]'
        />
        <p className='score'>
          SCORE: <span className='text-gray-600'>{score}</span>
        </p>
        <p className='score'>
          BEST SCORE: <span>{bestScore}</span>
        </p>
      </div>
    </header>
  )
}

export default Header
