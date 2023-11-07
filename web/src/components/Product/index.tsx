import { Header } from '../Products/header'
import Teia from '../../assets/images/teia-aranha.png'
import AranhaPendurando from '../../assets/gifs/aranha-pendurando.gif'
import { useParams } from 'react-router-dom'
import Fantasma from '../../assets/gifs/fantasma-flutuando.gif'
import { ProductCard } from './product'
import { useEffect, useState } from 'react'
import { ProductModel } from '../../utils/types'
import axios from 'axios'
import { Payment } from './payment'

export function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState<ProductModel>()
  const [image, setImage] = useState()

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


  return (
    <>
      <Header />
      <main className='grid grid-cols-[60%,30%] p-10 justify-center gap-10 items-center h-[90vh] bg-[#DAE4C3] relative overflow-x-hidden max-[768px]:flex max-[768px]:flex-col'>
        <img src={Fantasma} id='ghost-jumpscare' className='absolute transform translate-x-[-100%] h-auto w-[20%] max-[768px]:translate-x-[-300%]' />
        <img src={Teia} className='absolute top-0 left-0 h-auto w-[20%]' />
        <img src={AranhaPendurando} className='absolute top-0 right-0 scale-x-[-1]' />

        <ProductCard product={product} image={image} />
        <Payment product={product} />

      </main>
    </>
  )
}
