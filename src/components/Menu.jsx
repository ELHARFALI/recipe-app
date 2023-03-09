import { food } from "../data"
import Row from "./Row"


const Menu = () => { 
  const burgers = food.burgers
  const pizzas = food.pizza
  const snacks = food.snacks
  
  

  return (
      <div className='px-4 mb-20 mt-10 md:mb-6  '>
        
      <Row rowId='1' title='Burgers' data={burgers} />
      <Row rowId='2' title='Pizzas' data={pizzas} />
      <Row rowId='3' title='Snacks' data={snacks} />
     
    </div>
  )
}

export default Menu
