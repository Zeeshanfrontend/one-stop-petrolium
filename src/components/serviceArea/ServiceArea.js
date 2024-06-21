import React from 'react'
import { ServiceAreaContainer } from './ServiceAreaStyles'
import GoogleMapComponent from './GoogleMap'

const ServiceArea = () => {
  return (
    <ServiceAreaContainer>
      <h2>Service Areas</h2>
      <p>We proudly serve a wide range of areas, ensuring that our exceptional services are accessible to customers like you.</p>
      <GoogleMapComponent />
    </ServiceAreaContainer>
  )
}

export default ServiceArea
