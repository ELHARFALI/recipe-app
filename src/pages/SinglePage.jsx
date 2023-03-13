
import { food } from "../data"
import { useParams } from "react-router-dom"

const burgers = food.burgers
const pizzas = food.pizza
const snacks = food.snacks





const SinglePage = () => {
    const { id } = useParams()
    console.log(id);

    const allFood = [...burgers, ...pizzas, ...snacks]

    const { name, price, description, image, ingredients } = allFood[id - 1]
    


  return (
      <div className=' w-full px-4 py-2 md:pl-24 md:py-4 md:pr-2 flex justify-center items-center min-h-[calc(100vh-70px)] md:min-h-[100vh]'>
          <div className="w-full h-full px-2 py-4 grid gap-5 grid-cols-1 md:grid-cols-3">
              <img src={image} alt={name} className='w-full rounded-xl object-contain'  />
              <div className="md:col-span-2 flex flex-col justify-center">
                  <h1 className="text-xl md:text-2xl font-semibold mb-2">{name}</h1>
                  <h3 className="text-lg md:text-xl font-medium text-[#F99417] mb-2">${price}</h3>
                  <p className="text-lg text-gray-600 mb-2">{description}</p>
                  {ingredients && <p className="text-lg text-stone-800 capitalize">
                      <span className="block font-semibold text-lg md:text-xl border-b-[1px] border-black max-w-[110px] md:max-w-[120px] pb-1 mb-2 text-black">Ingredients:</span>
                      {ingredients.join(' - ')}
                  </p>}
                  <hr className="my-3 bg-black " />
                  
              </div>
        </div>
    </div>
  )
}

export default SinglePage