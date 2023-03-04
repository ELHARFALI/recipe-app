import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { GrFavorite } from 'react-icons/gr'
import { BiCategory } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
      <aside className='bg-white w-20 h-full fixed top-0 left-0 md:flex flex-col justify-between items-center py-10 shadow-lg hidden rounded-tr-xl rounded-br-xl z-[100] '>
          <div>
              <Link to='/' className='p-2 mb-4 rounded-full text-white flex justify-center items-center bg-[#F99417] shadow-md shadow-[#F99417]' >
                  <AiOutlineHome className='text-3xl' />
              </Link>
              <Link to='/' className='p-2 mb-4 rounded-full text-black flex justify-center items-center ' >
                  <AiOutlineMessage className='text-3xl' />
              </Link>
              <Link to='/' className='p-2 mb-4 rounded-full text-black flex justify-center items-center ' >
                  <BiCategory className='text-3xl' />
              </Link>
              <Link to='/' className='p-2 mb-4 rounded-full text-black flex justify-center items-center ' >
                  <GrFavorite className='text-3xl' />
              </Link>
              <Link to='/' className='p-2 mb-4 rounded-full text-black flex justify-center items-center ' >
                  <AiOutlineSetting className='text-3xl' />
              </Link>
          </div>
          <div>
          <Link to='/' className='p-2 mb-4 rounded-full text-black flex justify-center items-center ' >
                  <AiOutlineLogout className='text-3xl' />
            </Link>
          </div>
    </aside>
  )
}

export default SideBar