import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const HomePage = ({persona,grupo}) => {
  return (
    <div>
      <Header />
      <Main persona={persona} grupo= {grupo}/>
      <Footer />
    </div>
  )
}

export default HomePage
