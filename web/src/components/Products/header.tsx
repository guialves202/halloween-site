import { GiPumpkinMask } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoCartOutline, IoCart, IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useState } from "react";

export function Header() {
  const [isCartHovered, setIsCartHovered] = useState(false)
  const [isHeartHovered, setIsHeartHovered] = useState(false)

  function toggleCartHover() {
    setIsCartHovered(!isCartHovered)
  }

  function toggleHeartHover() {
    setIsHeartHovered(!isHeartHovered)
  }

  return (
    <header className='flex justify-between py-4 px-8 items-center bg-primary text-white h-[10vh]'>
      <div>
        <Link to='/'>
          <GiPumpkinMask className='text-6xl text-secondary' />
        </Link>
      </div>

      <div className="flex gap-8">
        <Link to='/' onMouseEnter={toggleHeartHover} onMouseLeave={toggleHeartHover}>
          {
            isHeartHovered ?
            <IoHeart className='text-4xl text-secondary' /> :
            <IoHeartOutline className='text-4xl text-secondary' />
          }
        </Link>

        <Link to='/' onMouseEnter={toggleCartHover} onMouseLeave={toggleCartHover}>
        {
            isCartHovered ?
            <IoCart className='text-4xl text-secondary' /> :
            <IoCartOutline className='text-4xl text-secondary' />
          }
        </Link>
      </div>
    </header>
  )
}
