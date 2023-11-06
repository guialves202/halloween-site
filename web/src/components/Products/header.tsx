import { GiPumpkinMask } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'

export function Header() {

  return (
    <header className='flex justify-between py-4 px-8 items-center bg-primary text-white h-[10vh]'>
      <div>
        <Link to='/'>
          <GiPumpkinMask className='text-6xl text-secondary' />
        </Link>
      </div>

      <div className="flex gap-8">
        <Link to='/'>
          <IoHeartOutline className='text-4xl text-secondary transition-all hover:scale-125' />
        </Link>

        <Link to='/'>
          <IoCartOutline className='text-4xl text-secondary transition-all hover:scale-125' />
        </Link>
      </div>
    </header>
  )
}
