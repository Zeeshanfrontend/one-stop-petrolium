import React from 'react'
import { OurServicesCard, OurServicesCards, OurServicesContainer } from './OurServicesStyles'
import { CardsData } from './OurServicesCardsData'

const OurServices = () => {
  return (
    <OurServicesContainer>
      <h2>Our Services</h2>
      <p>We at Buraq Services are dedicated to providing reliable and efficient assistance to truck drivers and fleet operators in need of roadside support</p>
      <OurServicesCards>        
        {CardsData.map((cardData) => (
                <OurServicesCard key={cardData.id}>
                    <img src={cardData.image} alt='service-img' />
                    <h3>{cardData.title}</h3>
                    <p>{cardData.heading}</p>
                </OurServicesCard>
            ))}
      </OurServicesCards>
    </OurServicesContainer>
  )
}

export default OurServices
