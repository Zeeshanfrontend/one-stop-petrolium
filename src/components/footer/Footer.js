import React from 'react'
import { Facebook, FooterContainer, FooterIcon, FooterIcons, FooterLeft, FooterRight, FooterSection, Instagram, Linkedin } from './FooterStyles'
import logo from '../../assets/images/logo.jpg'

const Footer = () => {
  return (
    <FooterSection>
        <FooterContainer>
        <FooterLeft>
            <img src={logo} alt='logo' />
            <p>We at Buraq Services are dedicated to providing reliable and efficient assistance to truck drivers and fleet operators in need of roadside support</p>
        </FooterLeft>
        <FooterRight>
            <FooterIcons>
                <FooterIcon>
                    <Facebook />
                </FooterIcon>
                <FooterIcon>
                    <Linkedin />
                </FooterIcon>
                <FooterIcon>
                    <Instagram />
                </FooterIcon>
            </FooterIcons>
                <h3>onestoppetroleum@gmail.com</h3>
                <h2>+1 516-826-5903</h2>
        </FooterRight>
        </FooterContainer>
    </FooterSection>
  )
}

export default Footer
