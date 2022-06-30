import { Fragment, useEffect, useState } from 'react'
import { useFetchITContext } from '../context.js'
import Pim from './Pim.js'
import fetchitLogo from '../images/fetchitLogo.png'
import FullPim from './FullPim.js'

function Main() {
  const { search, open } = useFetchITContext()
  const [filteredSearch, setFilteredSearch] = useState(search)
  const [filteredSearchTerm, setFilteredSearchTerm] = useState('')

  const handleChange = (e) => setFilteredSearchTerm(e)

  useEffect(() => setFilteredSearch(search.filter(i => i.name.toLowerCase().includes(filteredSearchTerm.toLowerCase()))), [filteredSearchTerm, search])

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="main-header">
          <img src={fetchitLogo} alt="FetchIT" className="main-logo" />
          <h2 className="main-title">FetchIT Chrome Extension</h2>
        </div>
        <div className="main-content">
          {open ?
          <FullPim/>
          : <Fragment>
          <form className='income-search-form'>
            <input onChange={(e) => handleChange(e.target.value)} type="text" placeholder='Search PIMs...' className='main-searchbar' />
          </form>
          {filteredSearch.length === 0 ?
          <p className="no-results">No results for those search terms</p>
          : filteredSearch.map(pim => (
            <Pim key={pim.id} id={pim.id} name={pim.name} />
          ))}
          </Fragment>
          }
        </div>
        <div className="main-footer">
          <p>For help or development requests contact Schultz Technology at <i>someone@schultztechnolgy.com</i></p>
        </div>
      </div>
    </div>
  )
}

export default Main