import { useState, useContext, createContext } from 'react'

export const useFetchITContext = () => useContext(allFetchITContext)
export const allFetchITContext = createContext({})

export const FetchITContextProvider = ({ children }) => {
    const [search, setSearch] = useState([{id: 1, name: "ezVet"}, {id: 2, name: "ezVet2"}, {id: 3, name: "ezVet3"}])
    const [open, setOpen] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [localOpen, setLocalOpen] = useState(false)

    const handleSearch = (e) => setSearch(e.target.value)

    const handleClick = () => {
      setDropdown(!dropdown)
      setLocalOpen(false)
    }
    const handleSelect = () => {
      setOpen(!open)
      setLocalOpen(!localOpen)
    }


    const allFetchITValues = {
      search,
      setSearch,
      open,
      setOpen,
      dropdown,
      setDropdown,
      localOpen,
      setLocalOpen,
      handleSearch,
      handleClick,
      handleSelect
    }

    return (
        <allFetchITContext.Provider value={allFetchITValues}>{children}</allFetchITContext.Provider>
    )
}