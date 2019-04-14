import React from 'react'

import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import Hero from '../../organisms/Hero'

const HomePage = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <Hero />
  </PageTemplate>
)

export default HomePage
