import { useState } from 'react'
import FullPim from './FullPim'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function Pim({id, name, open, setOpen}) {
  const [dropdown, setDropdown] = useState(false)
  const [localOpen, setLocalOpen] = useState(false)
  const handleClick = () => {
    setDropdown(!dropdown)
    setLocalOpen(false)
  }
  const handleSelect = () => {
    setOpen(!open)
    setLocalOpen(!localOpen)
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
      {localOpen ? <FullPim localOpen={localOpen} setLocalOpen={setLocalOpen} /> : null}
    </div>
  )
}

export default Pim