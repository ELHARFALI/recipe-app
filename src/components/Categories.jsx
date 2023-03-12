import { categories } from "../data";



const Categories = ({ gridView, isActive }) => {
    
  return (
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 px-4 my-6 overflow-hidden">
          {categories.map((category, index) => (
              <button type="button" key={index} className={`
              ${isActive[index] === true ? 'bg-[#F99417] text-white' : 'bg-white'}
              flex flex-col items-center   rounded-xl py-6 px-8 w-full
                  `} onClick={() => gridView(category.title)}>
                  <p className={`
                    ${isActive[index] === true ? 'text-white' : 'text-[#F99417]'}
                    text-3xl md:text-4xl  mb-4
                    `}>{category.icon}</p>
                  <h1 className="text-xl md:text-2xl font-medium capitalize leading-none">{category.title}</h1>
                  {index === 0 && (
                      <p>show all items</p>
                  )}
                  </button>
          )
              )}
    </div>
  )
}

export default Categories