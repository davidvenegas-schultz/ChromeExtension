import './FullPim.css'
import { useState } from 'react'
import { useFetchITContext } from '../context.js'
import { FaArrowLeft } from 'react-icons/fa'
import { BsPower } from 'react-icons/bs'
import { BiPowerOff } from 'react-icons/bi'

function FullPim() {
  const { setOpen, currentPIM, setCurrentPIM } = useFetchITContext()
  const [localOpen, setLocalOpen] = useState(false)

  function handleClose() {
    setCurrentPIM(null)
    setOpen(false)
  }

  console.log(currentPIM)

  return (
    <div className={"full-pim-wrapper"}>
      <div className="full-pim-top">
        {localOpen ? null : <FaArrowLeft id="full-pim-back" onClick={handleClose}/>}
        <h2 className="full-pim-title">{currentPIM.name}</h2>
      </div>
      <div className={`full-pim-bottom ${localOpen ? "power-inactive" : "power-active"}`}>
        <h3 className="full-pim-connected">{localOpen ? "Connected" : "Disconnected"}</h3>
        <div className="power-button-wrapper">
          {localOpen ?
          <BsPower id="full-pim-power" onClick={() => setLocalOpen(!localOpen)}/>
          : <BiPowerOff id="full-pim-power" onClick={() => setLocalOpen(!localOpen)}/>
          }
        </div>
      </div>
    </div>
  )
}

export default FullPim