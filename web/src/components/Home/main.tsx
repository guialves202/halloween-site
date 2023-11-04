import Castelo from '../../assets/images/castelo.svg'
import Aboboras from '../../assets/gifs/aboboras.gif'
import AranhaAndando from '../../assets/gifs/aranha-andando.gif'
import { useNavigate } from 'react-router-dom'
import jumpscare from '../../assets/sounds/halloween-impact-05-93808.mp3'

export function Main() {
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
    <main className='bg-primary max-h-[90vh] grid grid-cols-2 grid-rows-1 relative'>
      <div className='flex items-center pt-[20vh] flex-col gap-10'>
        <h1 className='creepy-font text-5xl text-secondary'>HAPPY HALLOWEEN</h1>
        <p className='text-white text-lg text-center w-[80%]'>O Halloween chegou e o terror está no ar! Aproveite e adquira todos os itens necessários para aterrorizar suas vítimas nessa data única.</p>
        <button className='btn-primary' onClick={activeSpider}>Descobrir mais</button>
      </div>

      <div className='overflow-hidden'>
        <img src={Castelo} />
      </div>

      <img src={Aboboras} className='absolute bottom-0 left-10 h-[30%]' />
    </main>
  )
}
