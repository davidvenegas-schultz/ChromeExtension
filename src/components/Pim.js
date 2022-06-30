import { useState } from 'react'
import { useFetchITContext } from '../context.js'
import FullPim from './FullPim'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function Pim({ id, name }) {
  const { setOpen, setCurrentPIM } = useFetchITContext()
  const [dropdown, setDropdown] = useState(false)
  const [localOpen, setLocalOpen] = useState(false)

  function handleClick() {
    setDropdown(!dropdown)
    setLocalOpen(false)
  }

  function handleSelect() {
    const curPIM = {id: id, name: name}
    setOpen(true)
    setCurrentPIM(curPIM)
  }

  return (
    <div className='pim-wrapper' key={id}>
      <h2 className="pim-name">{name}</h2>
      {dropdown ?
        <BsChevronUp className="pim-caret" onClick={handleClick}/>
        : <BsChevronDown className="pim-caret" onClick={handleClick}/>
      }
      {dropdown ?
        <div className="pim-dropdown-wrapper">
          <button onClick={handleSelect}>Select</button>
          <button onClick={handleClick}>Cancel</button>
        </div>
      : null}
      {localOpen ? <FullPim/> : null}
    </div>
  )
}

export default Pim