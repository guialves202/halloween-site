import { Sidebar } from './sidebar';
import { Header } from './header'
import { MainProducts } from './products';
import Abobora from '../../assets/images/scary-pumpkin.png'
import DarkSound from '../../assets/sounds/dark-ambient.mp3'
import Glitch from '../../assets/sounds/tv-glitch-6245 (mp3cut.net).mp3'
import Static from '../../assets/sounds/radio-static-6382 (mp3cut.net).mp3'

export function Products() {
  const darkSound = new Audio(DarkSound)
  darkSound.volume = 0.3

  const glitch = new Audio(Glitch)
  glitch.volume = 0.5

  const staticAudio = new Audio(Static)

  setTimeout(() => {
    darkSound.play()
  }, 10000)

  const glitchInterval = setInterval(() => {
    glitch.play()
  }, 25000)

  const staticInterval = setInterval(() => {
    staticAudio.play()
  }, 20000)

  setTimeout(() => {
    clearInterval(glitchInterval)
    clearInterval(staticInterval)
    darkSound.pause()
  }, 70000)

  return (
    <div className='relative overflow-hidden'>
      <img src={Abobora} className='abobora' />
      <Header />

      <main className="grid grid-cols-[15%,85%] grid-rows-1 h-[90vh]">
        <Sidebar />
        <MainProducts />

      </main>
    </div>

  )
}
