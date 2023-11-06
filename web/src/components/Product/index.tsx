import { Header } from '../Products/header'
import { IoHeartOutline, IoStar, IoStarOutline } from 'react-icons/io5'
import Teia from '../../assets/images/teia-aranha.png'
import AranhaPendurando from '../../assets/gifs/aranha-pendurando.gif'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ProductModel } from '../../utils/types'
import axios from 'axios'
import Fantasma from '../../assets/gifs/fantasma-flutuando.gif'
import JumpscareSound from '../../assets/sounds/boo.mp3'

export function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState<ProductModel>()
  const [image, setImage] = useState()
  const [audioPlayed, setAudioPlayed] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProduct = await axios.get(`http://localhost:3333/products/${productId}`)
        setProduct(fetchedProduct.data)

        const response = await import(`../../assets/images/${fetchedProduct.data.imageFilename}`)
        setImage(response.default)
      } catch (err) {
        console.log(err)
      }
    }

    getProducts()
  }, [])

  function jumpscare() {
    const ghost = document.getElementById('ghost-jumpscare') as HTMLElement
    ghost.style.animation = 'fantasma-passando 5s ease'

    if (!audioPlayed) {
      const audio = new Audio(JumpscareSound)
      audio.play()
      setAudioPlayed(true)
    }
  }

  return (
    <>
      <Header />
      <main className='grid grid-cols-[60%,30%] p-10 justify-center gap-10 items-center h-[90vh] bg-[#DAE4C3] relative overflow-x-hidden'>
        <img src={Fantasma} id='ghost-jumpscare' className='absolute transform translate-x-[-100%] h-auto w-[20%]' />
        <img src={Teia} className='absolute top-0 left-0 h-auto w-[20%]' />
        <img src={AranhaPendurando} className='absolute top-0 right-0 scale-x-[-1]' />
        <div className='flex bg-primary rounded-xl p-8 gap-6 text-white 2xl:h-[75%] xl:h-[70%] lg:h-[60%]'>
          <div className='w-[100%]'>
            <img src={image} className='max-h-full max-w-full rounded-xl' />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-secondary 2xl:text-6xl xl:text-5xl lg:text-4xl'>{product?.name}</h1>
            <div className='flex mb-10'>
              <IoStar className='text-secondary text-xl' />
              <IoStar className='text-secondary text-xl' />
              <IoStar className='text-secondary text-xl' />
              <IoStar className='text-secondary text-xl' />
              <IoStarOutline className='text-secondary text-xl' />

              <p className='ml-4'>(247 avaliações)</p>
            </div>
            <p className='2xl:text-xl xl:text-lg lg:text-lg'>{product?.description}</p>
          </div>
        </div>

        <div className='bg-primary flex flex-col rounded-xl p-8 text-white justify-between 2xl:h-[75%] xl:h-[70%] lg:h-[60%]'>
          <div className='flex flex-col gap-6'>
            <span className='text-secondary 2xl:text-6xl xl:text-5xl lg:text-4xl'>R$ {product?.price.toString().includes('.') ? product.price : product?.price.toString() + '.00'}</span>
            <span>À vista no PIX com até <span className='text-secondary'>10% OFF</span></span>
            <span className='underline cursor-pointer'>Mais opções de pagamento</span>
          </div>
          <div className='grid grid-cols-[80%,20%] grid-rows-2 items-center justify-center w-full xl:gap-4 lg:gap-2'>
            <button className='btn-primary' onClick={jumpscare}>Comprar</button>
            <button className='btn-primary flex items-center justify-center' onClick={jumpscare}><IoHeartOutline className='text-4xl' /></button>
            <button className='xl:text-2xl col-span-2 rounded-xl border border-secondary xl:py-[8px] xl:px-[15px] lg:text-xl lg:py-[5px] px-[12px] transition-all duration-300  hover:bg-secondary hover:text-terceary' onClick={jumpscare}>+ Adicionar ao carrinho</button>
          </div>
        </div>
      </main>
    </>
  )
}
