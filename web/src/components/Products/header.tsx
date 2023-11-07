import { GiPumpkinMask } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'

export function Header() {

  return (
    <header className='flex justify-between py-4 px-8 items-center bg-primary text-white h-[10vh]'>
      <div>
        <Link to='/'>
          <GiPumpkinMask className='2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-secondary' />
        </Link>
      </div>

      <div className="flex gap-8">
        <Link to='/'>
          <IoHeartOutline className='2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl text-secondary transition-all hover:scale-125' />
        </Link>

        <Link to='/'>
          <IoCartOutline className='2xl:text-64xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl text-secondary transition-all hover:scale-125' />
        </Link>
      </div>
    </header>
  )
}
