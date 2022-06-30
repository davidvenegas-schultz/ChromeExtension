import { useFetchITContext } from '../context.js'
import FullPim from './FullPim'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function Pim() {
  const { id, name, dropdown, handleClick, handleSelect, localOpen} = useFetchITContext()

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