import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { GrFavorite } from 'react-icons/gr'
import { BiCategory } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const SideBarMobile = () => {
  return (
      <nav className='md:hidden  flex justify-between items-center w-full h-[70px] bg-white shadow-lg shadow-black fixed bottom-0 rounded-tl-xl rounded-tr-xl z-[100] px-4 py-2'>
          <Link to='/' className='p-2 rounded-full text-white flex justify-center items-center bg-[#F99417] shadow-md shadow-[#F99417]' >
                <AiOutlineHome className='text-2xl' />
          </Link>
          <Link to='/' className='p-2  rounded-full text-black flex justify-center items-center ' >
                  <AiOutlineMessage className='text-2xl' />
              </Link>
              <Link to='/' className='p-2  rounded-full text-black flex justify-center items-center ' >
                  <BiCategory className='text-2xl' />
              </Link>
              <Link to='/' className='p-2  rounded-full text-black flex justify-center items-center ' >
                  <GrFavorite className='text-2xl' />
              </Link>
              <Link to='/' className='p-2  rounded-full text-black flex justify-center items-center ' >
                  <AiOutlineSetting className='text-2xl' />
          </Link>
          <Link to='/' className='p-2  rounded-full text-black flex justify-center items-center ' >
                  <AiOutlineLogout className='text-2xl' />
            </Link>
    </nav>
  )
}

export default SideBarMobile