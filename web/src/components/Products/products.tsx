import { IoCartOutline, IoCart, IoHeart, IoHeartOutline } from 'react-icons/io5'
import Vassoura from '../../assets/images/vassoura.jpg'
import { MouseEvent, useEffect, useState } from 'react'
import Morcegos from '../../assets/gifs/morcegos2.gif'
import Teia from '../../assets/images/teia-aranha.png'
import jumpscareSound from '../../assets/sounds/voando.mp3'
import axios from 'axios'
import { ProductModel } from '../../utils/types'

export function MainProducts() {
  const [products, setProducts] = useState<ProductModel[]>([])

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
        const fetchedProducts = await axios.get('http://localhost:3333/products/category/VASSOURA')
        setProducts(fetchedProducts.data)
      } catch (err) {
        console.log(err)
      }
    }

    getProducts()
  }, [])

  return (
    <section className="relative overflow-x-hidden overflow-y-auto">
      <img src={Teia} className='absolute top-0 right-0 z-50 h-auto w-[20%] transform scale-x-[-1]' />
      <div className="p-6">
        <h1 className="text-6xl">Vassouras</h1>
      </div>

      <div className="grid grid-cols-4 p-6 gap-6">

        {
          products.length > 0 ? products.map((product, index) => {
            return (
              <div className="card relative bg-primary flex flex-col rounded-xl p-4 h-fit w-[300px] gap-4 items-center" key={index}>
                <div className='product-jumpscare' onClick={jumpscare}></div>
                <IoCartOutline className='cart absolute text-secondary text-4xl top-2 left-2 hidden cursor-pointer' />
                <IoHeartOutline className='heart absolute text-secondary text-4xl top-2 right-2 hidden cursor-pointer' />

                <img src={Vassoura} className="h-auto w-full rounded-xl" />
                <span className="text-2xl text-white">{product.name}</span>
                <span className="text-2xl text-secondary">R$ {product.price.toString().includes('.') ? product.price : product.price.toString() + '.00'}</span>
                <button className="btn-primary w-full">Comprar</button>
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
