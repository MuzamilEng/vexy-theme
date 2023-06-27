import Header from '../../Compoment/Header'
import Navbar from './Navbar'
import Main from './Main'
import Footer from '../../Compoment/Footer'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const Hotel1 = () => {
  return (
    <div className='hotel1'>
      <div className='hotel1_container'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
  )
}
Hotel1.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Hotel1
