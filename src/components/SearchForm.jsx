import { AiOutlineSearch } from 'react-icons/ai'

const SearchForm = () => {
  return (
    <form className='relative' >
        <input type="text" name='search' className='mt-4 md:mt-0 h-9 md:h-10 rounded-xl focus:outline-none border border-gray-300 pr-2 pl-3 text-lg md:text-xl ' placeholder='search by food name...' />
        <button type="submit" className='absolute top-5 right-2 md:right-3 md:top-1'>
            <AiOutlineSearch className='text-gray-400 text-2xl md:text-3xl' />
        </button>
    </form>
  )
}

export default SearchForm