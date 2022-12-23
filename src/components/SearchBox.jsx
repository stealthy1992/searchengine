import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {

  const [ searchTerm, setSearchTerm ] = useState('')
  let navigate = useNavigate()

const onSubmit = (e) => {
  e.preventDefault()
  console.log(searchTerm)
  navigate('/search', { state: {searchTerm: searchTerm}})
}
  return (
    <div className='flex flex-wrap justify-between space-y-6'>
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
                <div className="flex items-center border-b border-blue-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search..." aria-label="Search" />
                    <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Go!
                    </button>
                </div>
        </form>
    </div>
  )
}

export default SearchBox
