import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import SingleItem from "./SingleItem"

const Row = ({rowId, data, title}) => {


    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            <h2 className='font-semibold mb-2 text-lg md:text-xl'>{title} :</h2>
            <div className="relative flex items-center group mb-6">
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-[99] hidden group-hover:block' />
                <div id={'slider' + rowId} className='h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative flex gap-5'>
                {data.map((item) => {
                    const { id, image, name, price } = item
                    return (
                    <SingleItem  key={id} id={id} image={image} name={name} price={price} />
                    )
                })}
            </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute right-0 opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
            </div>
        </>
  )
}

export default Row