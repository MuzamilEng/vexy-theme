import React from 'react'
import Main3 from './Main3'
import Footer from '../../Compoment/Footer'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Navbar2 from 'src/Compoment/Navbar2'

const Hotel3 = () => {
  return (
    <div className='hotel3'>
      <Navbar2 />
      <Main3 />
      <Footer />
    </div>
  )
}
Hotel3.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Hotel3
