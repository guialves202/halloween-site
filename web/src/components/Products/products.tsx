import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import Morcegos from '../../assets/gifs/morcegos2.gif'
import Teia from '../../assets/images/teia-aranha.png'
import jumpscareSound from '../../assets/sounds/voando.mp3'
import axios from 'axios'
import { ProductModel } from '../../utils/types'
import { Link } from 'react-router-dom'
import DarkSound from '../../assets/sounds/dark-ambient.mp3'
import Glitch from '../../assets/sounds/tv-glitch-6245 (mp3cut.net).mp3'
import Static from '../../assets/sounds/radio-static-6382 (mp3cut.net).mp3'

export function MainProducts({...props}) {
  const [products, setProducts] = useState<ProductModel[]>([])
  const [image, setImage] = useState()
  const darkSound = useRef<HTMLAudioElement>()
  const glitchSound = useRef<HTMLAudioElement>()
  const staticSound = useRef<HTMLAudioElement>()

  function jumpscare(event: MouseEvent<HTMLDivElement>) {
    const element = event.target as HTMLDivElement
    if (!element) return

    element.style.display = 'none'

    const bats = document.createElement('img')
    bats.src = Morcegos
    bats.className = 'absolute z-30'

    element.parentElement?.appendChild(bats)

    const audio = new Audio(jumpscareSound)
    audio.play()

    setTimeout(() => {
      element.parentElement?.removeChild(bats)
    }, 2000)
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await axios.get(`http://localhost:3333/products/category/${props.category}`)
        setProducts(fetchedProducts.data)

        const response = await import(`../../assets/images/${props.category.toLowerCase()}.jpg`)
        setImage(response.default)
      } catch (err) {
        console.log(err)
      }
    }

    getProducts()
  }, [props.category])

  useEffect(() => {
    darkSound.current = new Audio(DarkSound)
    darkSound.current.volume = 0.5

    glitchSound.current = new Audio(Glitch)
    glitchSound.current.volume = 0.5

    staticSound.current = new Audio(Static)

    const darkSoundTimeout = setTimeout(() => {
      darkSound.current?.play()
    }, 10000);

    const glitchInterval = setInterval(() => {
      glitchSound.current?.play()
    }, 25000)

    const staticInterval = setInterval(() => {
      staticSound.current?.play()
    }, 20000)

    setTimeout(() => {
      clearInterval(glitchInterval)
      clearInterval(staticInterval)
      darkSound.current?.pause()
    }, 70000)

    return () => {
      darkSound.current?.pause()
      glitchSound.current?.pause()
      staticSound.current?.pause()
      clearInterval(glitchInterval)
      clearInterval(staticInterval)
      clearTimeout(darkSoundTimeout)
    }

  }, [])

  function escapeButton(event: MouseEvent<HTMLElement>) {
    const element = event.target as HTMLElement

    if (element.classList.contains('displaced')) {
      element.style.transform = 'translateX(0)'
      element.classList.remove('displaced')
    } else {
      element.style.transform = 'translateX(-100%)'
      element.classList.add('displaced')
    }
  }

  return (
    <section className="relative overflow-x-hidden overflow-y-auto bg-[#DAE4C3]">
      <img src={Teia} className='absolute top-[-10px] right-0 z-50 h-auto w-[20%] transform scale-x-[-1]' />
      <div className="p-6">
        <h1 className="text-primary 2xl:text-6xl md:text-5xl text-4xl">{props.category}</h1>
      </div>

      <div className="grid p-6 gap-6 grid-cols-[repeat(auto-fit,minmax(100px,300px))] justify-around">

        {
          products.length > 0 ? products.map((product, index) => {
            return (
              <div className="card relative bg-primary flex flex-col rounded-xl p-4 h-fit w-[300px] gap-4 items-center" key={index}>
                <div className='product-jumpscare' onClick={jumpscare}></div>
                <IoCartOutline className='cart absolute text-secondary text-4xl top-2 left-2 hidden cursor-pointer transition-all hover:scale-125' />
                <IoHeartOutline className='heart absolute text-secondary text-4xl top-2 right-2 hidden cursor-pointer transition-all hover:scale-125' />

                <img src={image} className="h-auto w-full rounded-xl" />
                <span className="text-2xl text-white">{product.name}</span>
                <span className="text-2xl text-secondary">R$ {product.price.toString().includes('.') ? product.price : product.price.toString() + '.00'}</span>
                <Link className="btn-primary w-full" to={`/product/${product.id}`} onMouseEnter={escapeButton}>Comprar</Link>
              </div>
            )
          }) : (
            <div>Loading...</div>
          )
        }



      </div>
    </section>
  )
}
