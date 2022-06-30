import { useFetchITContext } from '../context.js'
import { FaArrowLeft } from 'react-icons/fa'
import { BsPower } from 'react-icons/bs'

function FullPim() {
  const { setOpen, currentPIM, setCurrentPIM } = useFetchITContext()

  function handleClose() {
    setCurrentPIM(null)
    setOpen(false)
  }

  console.log(currentPIM)

  return (
    <div className='full-pim-wrapper'>
      <div className="full-pim-top">
        <FaArrowLeft onClick={handleClose}/>
        <h2 className="full-pim-title">{currentPIM.name}</h2>
      </div>
      <div className="full-pim-bottom">
        <h3 className="full-pim-connected">Disconnected</h3>
        <div className="power-button-wrapper">
          <BsPower/>
        </div>
      </div>
    </div>
  )
}

export default FullPim