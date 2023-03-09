
import { GetStarted, SearchForm } from '../components'
import {Categories, Menu} from '../components'


const Home = () => {
  return (
      <main className="min-h-[100vh] w-full bg-[#ECF2FF]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className=' col-span-1 md:col-span-2 lg:col-span-3 w-full px-4 py-2 md:pl-24 md:py-4 md:pr-2'>
              <div className='w-full flex flex-col md:flex-row items-center justify-between px-4'>
                  <h1 className='font-bold text-xl md:text-2xl flex-1'>Today Menu</h1>
                  <SearchForm />
              </div>

              <GetStarted />

              <div className='w-full flex items-center justify-between px-4'>
                  <h1 className='font-bold text-xl md:text-2xl flex-1'>Menu category</h1>
                  <button type='button' className='text-lg md:text-xl font-medium bg-[#F99417] text-white px-4 py-1 rounded-lg transition-all ease-in-out duration-200 hover:text-[#F99417] hover:bg-white'>
                      View All
                  </button>
              </div>

              <Categories />

              <Menu />
              
          </div>
          <div className='bg-white h-full w-full px-4 py-2 md:pl-24 md:py-4 md:pr-2 hidden lg:grid'>
              
          </div>
    </main>
  )
}

export default Home