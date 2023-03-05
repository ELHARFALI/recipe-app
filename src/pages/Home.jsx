
import { GetStarted, SearchForm } from '../components'


const Home = () => {
  return (
      <main className="min-h-[100vh] w-full bg-[#ECF2FF]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className=' col-span-1 md:col-span-2 lg:col-span-3 w-full px-4 py-2 md:pl-24 md:py-4 md:pr-2'>
              <div className='w-full flex flex-col md:flex-row items-center justify-between px-4'>
                  <h1 className='font-bold text-2xl md:text-3xl flex-1'>Today Menu</h1>
                  <SearchForm />
              </div>

              <GetStarted />
              
          </div>
          <div className='bg-white h-full w-full px-4 py-2 md:pl-24 md:py-4 md:pr-2 hidden lg:grid'>
              
          </div>
    </main>
  )
}

export default Home