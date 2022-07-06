import { useState, useContext, createContext } from 'react'

export const useFetchITContext = () => useContext(allFetchITContext)
export const allFetchITContext = createContext({})

export const FetchITContextProvider = ({ children }) => {
    const data = [
      {id: 1, name: "AVIMark"},
      {id: 2, name: "Cornerstone"},
      {id: 3, name: "CovetrusConnect"},
      {id: 4, name: "eVetPractice"},
      {id: 5, name: "ezyVet"},
      {id: 6, name: "Impromed"},
      {id: 7, name: "Vetspire"}
    ]
    const [search, setSearch] = useState(data)
    const [open, setOpen] = useState(false)
    const [currentPIM, setCurrentPIM] = useState(null)

    const handleSearch = (e) => setSearch(e.target.value)


    const allFetchITValues = {
      data,
      search,
      setSearch,
      open,
      setOpen,
      currentPIM,
      setCurrentPIM,
      handleSearch
    }

    return (
        <allFetchITContext.Provider value={allFetchITValues}>{children}</allFetchITContext.Provider>
    )
}