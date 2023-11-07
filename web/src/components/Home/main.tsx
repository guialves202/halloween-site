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
    spider.className = 'absolute top-0 left-[50%] h-[100%] translate-x-[-50%]'

    root.appendChild(spider)

    const audio = new Audio(jumpscare)
    audio.play()

    setTimeout(() => {
      root.removeChild(spider)
      navigate('/products/vassouras')
    }, 4000)
  }

  return (
    <main className='h-[90vh] grid min-[1000px]:grid-cols-2 min-[1000px]:grid-rows-1 relative grid-cols-1 grid-rows-2 overflow-x-hidden'>
      <div className='flex items-center min-[1000px]:pt-[20vh] pt-[5vh] flex-col gap-10 z-10'>
        <h1 className='creepy-font text-secondary sm:text-2xl min-[793px]:text-3xl lg:text-4xl xl:text-5xl'>HAPPY HALLOWEEN</h1>
        <p className='text-white text-center w-[80%] max-[639px]:text-sm md:text-sm lg:text-base xl:text-lg'>O Halloween chegou e o terror está no ar! Aproveite e adquira todos os itens necessários para aterrorizar suas vítimas nessa data única.</p>
        <button className='btn-primary' onClick={activeSpider}>Descobrir mais</button>
      </div>

      <div className='overflow-hidden min-[1000px]:relative'>
        <img src={Castelo} className='absolute bottom-0 right-0 max-h-[90vh] h-auto max-[1000px]:w-[50%] max-[1000px]:right-[50%] max-[1000px]:transform max-[1000px]:translate-x-[50%]' />
      </div>

      <img src={Aboboras} className='absolute bottom-0 left-10 h-[30%] max-[1000px]:h-[20%]' />
    </main>
  )
}
