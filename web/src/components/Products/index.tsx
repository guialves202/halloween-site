import { Sidebar } from './sidebar';
import { Header } from './header'
import { MainProducts } from './products';
import Abobora from '../../assets/images/scary-pumpkin.png'
import { Categories } from '../../utils/types';

export function Products(category: Categories) {

  return (
    <div className='relative overflow-hidden'>
      <img src={Abobora} className='abobora' />
      <Header />

      <main className="grid grid-cols-[15%,85%] grid-rows-1 h-[90vh]">
        <Sidebar />
        <MainProducts category={category} />

      </main>
    </div>

  )
}
