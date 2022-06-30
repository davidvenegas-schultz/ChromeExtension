import { useState, useContext, createContext } from 'react'

export const useFetchITContext = () => useContext(allFetchITContext)
export const allFetchITContext = createContext({})

export const FetchITContextProvider = ({ children }) => {
    const [search, setSearch] = useState([{id: 1, name: "ezVet"}, {id: 2, name: "ezVet2"}, {id: 3, name: "ezVet3"}])
    const [open, setOpen] = useState(false)
    const [currentPIM, setCurrentPIM] = useState(null)

    const handleSearch = (e) => setSearch(e.target.value)


    const allFetchITValues = {
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