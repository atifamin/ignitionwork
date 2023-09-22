import React from 'react'

import Header from '../pages/Components/header'
import Hero   from '../pages/Components/hero'
import About  from '../pages/Components/about'
import Work  from './Components/Work'
import Services from '../pages/Components/services'
import Features from '../pages/Components/features'
import Portfolio from '../pages/Components/portfolio'
import Team    from '../pages/Components/team'
import Pricing from '../pages/Components/pricing'
import Contact from '../pages/Components/contact'
import Footer from '../pages/Components/footer'

export default function index() {
  return (<>
    <Header></Header>
    <Hero></Hero>
    <main id="main">
      <About></About>
      <Work></Work>
      <Services></Services>
      <Features></Features>
      <Pricing></Pricing>
      <Contact></Contact>
    </main>
    <Footer></Footer>
    </>
  )
}
