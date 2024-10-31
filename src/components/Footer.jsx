import gitIcon from '../assets/images/github.svg'

const Footer = () => {
  return (
    <div className='w-full h-10 text-white bg-black flex items-center justify-center text-[1.5rem]'>
      <p className='px-10'>PROJECT BY GOPI</p>
      <a href='https://github.com/GopiWebDev/react_memory_card'>
        <img src={gitIcon} alt='github icon' className='w-8' />
      </a>
    </div>
  )
}

export default Footer
