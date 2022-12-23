import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBox from './SearchBox'

const Navbar = ({darkTheme, setDarkTheme}) => {

  const [ typedTerm, setTypedTerm ] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ pressedGo, setPressedGo ] = useState(false)
  const [ selectedTab, setSelectedTab ] = useState('tab1')
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(typedTerm)
    // setSearchTerm(typedTerm)
    navigate("/search", { state: {typedTerm}})
  }
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to="/">
            <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
                Search Engine 🎇
            </p>
        </Link>
        {/* Search Box starts  */}

        <div className='flex flex-wrap justify-between space-y-6'>
          <form className="w-full max-w-sm" onSubmit={onSubmit}>
                    <div className="flex items-center border-b border-blue-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={(e) => setTypedTerm(e.target.value)} type="text" placeholder="Search..." aria-label="Search" value={typedTerm}/>
                        <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                            Go!
                        </button>
                    </div>
            </form>
        </div>

        {/* Search ends */}
        <button type='button' onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
            { darkTheme ? 'Light 😃' : 'Dark 😒'}
        </button>
      </div>
      
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2" onClick={() => setSelectedTab('tab1')}>
                  <Link to="/search" state={{ typedTerm }}>
                    <p className={ selectedTab === 'tab1' ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>All</p>
                  </Link>
                </li>
                <li className="mr-2" onClick={() => setSelectedTab('tab2')}>
                    <Link to="/image" state={{ typedTerm }}>
                      <p className={ selectedTab === 'tab2' ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>Images</p>
                    </Link>
                </li>
                <li className="mr-2" onClick={() => setSelectedTab('tab3')}>
                    <Link to="/news" state={{ typedTerm }}>
                    <p className={ selectedTab === 'tab3' ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>News</p>
                    </Link>
                </li>
                <li className="mr-2" onClick={() => setSelectedTab('tab4')}>
                    <Link to="/video" state={{ typedTerm }}>
                      <p className={ selectedTab === 'tab4' ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>Videos</p>
                    </Link>
                </li>
    
            </ul>
        </div>

    </div>
  )
}

export default Navbar
