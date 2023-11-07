import { IoStar, IoStarOutline } from 'react-icons/io5'
import { ProductModel } from '../../utils/types'

export function ProductCard({ product, image }: { product: ProductModel | undefined, image: string | undefined }) {

  return (
    <div className='flex bg-primary rounded-xl p-8 gap-6 text-white 2xl:h-[75%] xl:h-[70%] lg:h-[60%] md:h-[50%] max-[768px]:w-[60%]'>
    <div className='w-[100%]'>
      <img src={image} className='max-h-full max-w-full rounded-xl' />
    </div>
    <div className='flex flex-col gap-4'>
      <h1 className='text-secondary 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl'>{product?.name}</h1>
      <div className='flex mb-10'>
        <IoStar className='text-secondary text-xl' />
        <IoStar className='text-secondary text-xl' />
        <IoStar className='text-secondary text-xl' />
        <IoStar className='text-secondary text-xl' />
        <IoStarOutline className='text-secondary text-xl' />

        <p className='ml-4'>(247 avaliações)</p>
      </div>
      <p className='2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs'>{product?.description}</p>
    </div>
  </div>
  )
}
