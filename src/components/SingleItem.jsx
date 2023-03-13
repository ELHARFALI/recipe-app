import { Link } from "react-router-dom"

const SingleItem = ({ id, image, name, price }) => {
    
  return (
      <Link to={`/items/${id}`} className='bg-white rounded-xl py-2 px-4'>
          <img src={image} alt={name} className=' max-w-[130px] md:max-w-[150px] lg:max-w-[170px] xl:max-w-[180px] rounded-xl' />
          <div className='mt-2'>
              <h1 className=' font-medium md:text-lg mb-1 flex max-w-[130px] md:max-w-[165px] overflow-hidden'>{name}</h1>
              <p className='font-medium md:text-lg text-[#F99417]'>${price}</p>
          </div>
    </Link>
  )
}

export default SingleItem