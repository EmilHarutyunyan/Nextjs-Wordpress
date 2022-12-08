import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = ({children}) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}


export default Layout