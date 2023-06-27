import Footer from '../../Compoment/Footer'
import Main4 from './Main4'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Navbar3 from 'src/Compoment/Navbar3'

const Hotel4 = () => {
  return (
    <div className='hotel4'>
      <div className='hoter4_body'>
        <Navbar3 />
        <Main4 />
        <Footer />
      </div>
    </div>
  )
}
Hotel4.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Hotel4
