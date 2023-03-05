import { Link } from 'react-router-dom'

import delivery_truck from '../utils/delivery_truck.svg'

const GetStarted = () => {
  return (
    <div className='w-[95%] mx-auto my-6 rounded-3xl bg-[#F5CBA7] py-3 px-2 flex flex-col md:flex-row text-center'>
        <div className='flex justify-center items-center mb-4 md:mb-0'>
            <img src={delivery_truck} alt="drone delivery" className='w-[200px] md:w-[300px] lg:w-[350px]' />
        </div>
        <div className='flex flex-1 flex-col justify-center items-center px-2'>
            <h1 className='font-semibold text-lg md:text-xl mb-2'>Hello, Youssef</h1>
            <p className='md:text-lg font-medium text-gray-500 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link className='px-4 py-2 bg-[#F99417] rounded-lg font-medium text-white'>
            Get Started
            </Link>
        </div>
    </div>
  )
}

export default GetStarted