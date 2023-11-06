import { Link } from "react-router-dom";
import Gato from '../../assets/gifs/gato-preto.gif'
import MeowSound from '../../assets/sounds/miau.mp3'
import { useEffect, useState } from "react";
import { GiCauldron, GiPumpkinLantern } from 'react-icons/gi'
import { FaBroom, FaHatWizard } from 'react-icons/fa'

export function Sidebar() {
  const [winSize, setWinSize] = useState(0)

  useEffect(() => {
    setWinSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
  }, [])

  function Meow() {
    const miau = new Audio(MeowSound)
    miau.play()
  }

  function handleResize() {
    setWinSize(window.innerWidth)
  }

  return (
    <aside className="bg-primary flex flex-col justify-between min-w-[80px]">
      <ul className="text-white text-2xl mt-6">
        <li>
          <Link to='/products/vassouras' className="category-item">
            {
              winSize <= 1000 ?
              <FaBroom className='text-4xl' /> :
              'Vassouras'
            }
          </Link>
        </li>
        <li>
          <Link to='/products/caldeiroes' className="category-item">
          {
              winSize <= 1000 ?
              <GiCauldron className='text-4xl' /> :
              'Caldeirões'
            }
          </Link>
        </li>
        <li>
          <Link to='/products/chapeus' className="category-item">
            {
              winSize <= 1000 ?
              <FaHatWizard className='text-4xl' /> :
              'Chapéus'
            }
          </Link>
        </li>
        <li>
          <Link to='/products/aboboras' className="category-item">
            {
              winSize <= 1000 ?
              <GiPumpkinLantern className='text-4xl' /> :
              'Abóboras'
            }
          </Link>
        </li>
      </ul>

      <img src={Gato} className="h-auto w-[60%] cursor-pointer" onClick={Meow} />
    </aside>
  )
}
