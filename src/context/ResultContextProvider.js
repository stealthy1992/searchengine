import React, { useContext, useState, createContext } from 'react'

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({children}) => {

    const [searchTerm, setSearchTerm ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ result, setResult ] = useState([])

    const getResults = async (type) => {

        console.log(type)
        setIsLoading(true)
        const response = await fetch(`${baseUrl}${type}` , {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': 'd2f0d66c2dmshc841025c94cfa9bp16c747jsnd920a4c65066',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })

        await response.json().then((data) => {
            setResult(data)
            setIsLoading(false)
            console.log(data)
        })
        
        // setResult(data)
        // setIsLoading(false)

    }

  return (
    <ResultContext.Provider value={{result, getResults, searchTerm, setSearchTerm, isLoading}}>
        {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
