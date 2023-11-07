import { useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import JumpscareSound from '../../assets/sounds/boo.mp3'
import { ProductModel } from '../../utils/types'

export function Payment({ product }: { product: ProductModel | undefined }) {
  const [audioPlayed, setAudioPlayed] = useState(false)

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
    <div className='bg-primary flex flex-col rounded-xl p-8 text-white justify-between 2xl:h-[75%] xl:h-[70%] lg:h-[60%] md:h-[50%] max-[768px]:w-[60%]'>
      <div className='flex flex-col gap-6'>
        <span className='text-secondary 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl'>R$ {product?.price.toString().includes('.') ? product.price : product?.price.toString() + '.00'}</span>
        <span className='lg:text-lg md:text-base sm:text-sm'>À vista no PIX com até <span className='text-secondary'>10% OFF</span></span>
        <span className='underline cursor-pointer 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-xs'>Mais opções de pagamento</span>
      </div>
      <div className='grid grid-cols-[80%,20%] grid-rows-2 items-center justify-center xl:gap-4 lg:gap-2'>
        <button className='btn-primary max-[1024px]:text-base' onClick={jumpscare}>Comprar</button>
        <button className='btn-primary flex items-center justify-center' onClick={jumpscare}><IoHeartOutline className='text-4xl' /></button>
        <button className='xl:text-2xl col-span-2 rounded-xl border border-secondary max-[1024px]:text-base xl:py-[8px] xl:px-[15px] lg:text-xl lg:py-[5px] px-[12px] transition-all duration-300  hover:bg-secondary hover:text-terceary' onClick={jumpscare}>+ Adicionar ao carrinho</button>
      </div>
    </div>
  )
}
