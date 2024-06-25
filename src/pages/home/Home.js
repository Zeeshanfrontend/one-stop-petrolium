import React from 'react'
import AutoSwiper from '../../components/swiper/Swiper'
import { PageContainer } from '../PageStyles'
import OurServices from '../../components/ourServices/OurServices'
import WhoWeAre from '../../components/whoWeAre/WhoWeAre'
import ServiceArea from '../../components/serviceArea/ServiceArea'
import FeaturedWork from '../../components/featuredWork/FeaturedWork'
import ClientsReviews from '../../components/clientsreviews/ClientsReviews'
import FAQ from '../../components/faq/Faq'
import ContactUsSection from '../../components/contactUs/ContactUsSection'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <PageContainer>
      <AutoSwiper />
      <OurServices 
        title="Our Services"
      />
      <WhoWeAre />
      <ServiceArea />
      <FeaturedWork />
      <ClientsReviews />
      <FAQ />
      <ContactUsSection />
      <Footer />
    </PageContainer>
  )
}

export default Home
