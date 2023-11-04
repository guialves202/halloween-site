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
    spider.className = 'absolute top-0 left-[40%] h-[100%]'

    root.appendChild(spider)

    const audio = new Audio(jumpscare)
    audio.play()

    setTimeout(() => {
      root.removeChild(spider)
      navigate('/products')
    }, 4000)
  }

  return (
    <header className='flex justify-between py-4 px-8 bg-primary items-center text-white max-h-[10vh]'>
      <div>
        <Link to='/'>
          <GiPumpkinMask className='text-6xl text-secondary' />
        </Link>
      </div>

      <div>
        <button className='btn-primary' onClick={activeSpider}>Comprar</button>
      </div>
    </header>
  )
}
