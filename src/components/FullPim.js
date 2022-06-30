import { FaArrowLeft } from 'react-icons/fa'
import { BsPower } from 'react-icons/bs'

function FullPim({localOpen, setLocalOpen}) {
  return (
    <div className='full-pim-wrapper'>
      <div className="full-pim-top">
        <FaArrowLeft onClick={() => setLocalOpen(!localOpen)}/>
        <h2 className="full-pim-title">ezVet</h2>
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