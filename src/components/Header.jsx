import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header className=' bg-header bg-center bg-cover max-h-[11.4rem] h-32 sm:h-48 lg:h-64'>
      <div className='wrapper flex items-center justify-between h-full w-full'>
        <img
          src={logo}
          alt=''
          className='h-auto w-[7rem] aspect-[16/10] lg:w-[12rem] md:w-[10rem] sm:w-[10rem]'
        />
        <p className='score'>
          SCORE: <span>10</span>
        </p>
        <p className='score'>
          BEST SCORE: <span>10</span>
        </p>
      </div>
    </header>
  )
}

export default Header
