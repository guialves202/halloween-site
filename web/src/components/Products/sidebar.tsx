import { Link } from "react-router-dom";
import Gato from '../../assets/gifs/gato-preto.gif'
import MeowSound from '../../assets/sounds/miau.mp3'

export function Sidebar() {
  function Meow() {
    const miau = new Audio(MeowSound)
    miau.play()
  }

  return (
    <aside className="bg-primary flex flex-col justify-between">
      <ul className="text-white text-2xl mt-6">
        <li>
          <Link to='/products/vassouras' className="category-item">
            Vassouras
          </Link>
        </li>
        <li>
          <Link to='/products/caldeiroes' className="category-item">
            Caldeirões
          </Link>
        </li>
        <li>
          <Link to='/products/chapeus' className="category-item">
            Chapéus
          </Link>
        </li>
        <li>
          <Link to='/products/aboboras' className="category-item">
            Abóboras
          </Link>
        </li>
      </ul>

      <img src={Gato} className="h-auto w-[60%] cursor-pointer" onClick={Meow} />
    </aside>
  )
}
