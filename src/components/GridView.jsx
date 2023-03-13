
const GridView = ({food, title}) => {

  return (
      <div className="mt-8 mb-24 md:mb-10 px-4">
          <h1 className="text-xl md:text-2xl font-semibold capitalize text-center pb-1">{title} :</h1>
          <hr className="h-1 w-24 mx-auto bg-black" />
          <div className="mt-4 mb-2 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {food.map((item) => {
                  const { id, name, image, price } = item
                  return (
                      <div key={id} className='bg-orange-300 rounded-2xl overflow-hidden max-h-[310px] '>
                          <img src={image} alt={name} className='mx-auto pb-2 rounded-2xl w-full object-cover max-h-[200px]' />
                          <div className="flex flex-col sm:flex-row justify-between sm:items-center px-2">
                              <h3 className="mb-2 text-lg font-medium ">{name}</h3>
                              <p className="mb-2 text-xl font-semibold ">${price}</p>
                              
                          </div>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default GridView