import { Link, useNavigate } from 'react-router-dom'
import { GiPumpkinMask } from 'react-icons/gi'
import AranhaAndando from '../../assets/gifs/aranha-andando.gif'
import jumpscare from '../../assets/sounds/halloween-impact-05-93808.mp3'

export function Header() {
  const navigate = useNavigate()

  function activeSpider() {

    const root = document.getElementById('root')
    if (!root) return

    if (document.getElementById('walking-spider')) return

    const spider = document.createElement('img')
    spider.src = AranhaAndando
    spider.id = 'walking-spider'
    spider.className = 'absolute top-0 left-[50%] h-[100%] transform translate-x-[-50%]'

    root.appendChild(spider)

    const audio = new Audio(jumpscare)
    audio.play()

    setTimeout(() => {
      root.removeChild(spider)
      navigate('/products/vassouras')
    }, 4000)
  }

  return (
    <header className='flex justify-between py-6 px-8 items-center text-white h-[10vh]'>
      <div>
        <Link to='/'>
          <GiPumpkinMask className='2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-secondary' />
        </Link>
      </div>

      <div>
        <button className='btn-primary text-xl' onClick={activeSpider}>Explorar</button>
      </div>
    </header>
  )
}
