import React from 'react'
import { OurServicesCard, OurServicesCards, OurServicesContainer } from './OurServicesStyles'
import { CardsData } from './OurServicesCardsData'

const OurServices = ({title, buttonProp}) => {
  return (
    <OurServicesContainer buttonProp={buttonProp}>
      <h2>{title}</h2>
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
      <button>Get in touch</button>
    </OurServicesContainer>
  )
}

export default OurServices
