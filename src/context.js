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
    const [topOpen, setTopOpen] = useState(true)

    const handleSearch = (e) => setSearch(e.target.value)

    const allFetchITValues = {
      search,
      setSearch,
      open,
      setOpen,
      currentPIM,
      setCurrentPIM,
      handleSearch,
      topOpen,
      setTopOpen
    }

    return (
        <allFetchITContext.Provider value={allFetchITValues}>{children}</allFetchITContext.Provider>
    )
}