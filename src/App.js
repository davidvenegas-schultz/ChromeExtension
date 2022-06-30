import { useState } from 'react'
import Main from './components/Main'

function App() {
  const [search, setSearch] = useState([{id: 1, name: "ezVet"}, {id: 2, name: "ezVet2"}, {id: 3, name: "ezVet3"}])
  const [open, setOpen] = useState(false)
  const handleSearch = (e) => setSearch(e.target.value)

  return (
    <Main search={search} handleSearch={handleSearch} open={open} setOpen={setOpen} />
  )
}

export default App