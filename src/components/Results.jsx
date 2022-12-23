import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../context/ResultContextProvider'
import Loading from './Loading'
import { Link } from 'react-router-dom'


const Results = () => {

const { result, isLoading, getResults, searchTerm, setSearchTerm } = useResultContext() 
// const location = useLocation()
const location = useLocation()

useEffect(() => {
    // console.log(searchval)
        setSearchTerm(location.state.typedTerm)
        if(searchTerm !== '')
        {
            console.log(location.pathname, location.state.typedTerm)
            getResults(`${location.pathname}/q=${location.state.typedTerm}`)   

        }
        
    
    
},[location.pathname, searchTerm])

// const onSubmit = (value) => {
//     console.log(value)
// }

if(isLoading) return <Loading />

switch (location.pathname) {
    case '/search':
        return (

            <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
            
                {console.log(result)}
                {result?.results?.map(({link, title}, index) => (
                    <div key={index} className="md:w-2/5 w-full">
                        <a href={link} target="_blank" rel="noreferrer">
                            <p className='text-sm'>
                                {link.length > 30 ? link.substring(0,30) : link}
                            </p>
                            <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                {title}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        )
    case '/video':
        return (

            <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
            {searchTerm === '' ? (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                Nothing yet.
            </div>
            ) : result?.results.map(({title, link, description}) => (
                <div className='py-2'>
                    
                </div>
            ))}
            
            </div>
        )
    case '/news':
        return (
            <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                Nothing yet.
            </div>
        )
    case '/image':
        return (
            <section className="overflow-hidden text-gray-700 ">
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
              <div className="flex flex-wrap -m-1 md:-m-2 "> 
                {result?.image_results?.map(({link, image}) => (
                       
                            <div class="flex flex-wrap w-1/3">
                                 
                                    <div class="w-full p-1 md:p-2">
                                        <a href={`//${link.href}`} target="_blank" rel="noopener noreferrer">
                                            <img alt="gallery" class="block object-cover object-center object-fit: contain rounded-lg"
                                                src={image.src} />
                                        </a>
                                    </div>

                                    
                                <p>{link.title.length > 30 ? link.title.substring(0,30) : link.title}</p>
                            </div>
                    
                    ))}
              </div>
            </div>
            </section>        
            
        )
        

    default:
        return 'Error!'
}
}

export default Results
