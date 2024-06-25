import styled from 'styled-components';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export const FooterSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 50px 20px;
background: #fff;
`;

export const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 30px;
width: 100%;
max-width: 1020px;
`;

export const FooterLeft = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

p{
    color: #353535;
    font-family: "Lato", Sans-serif;
    font-size: 16px;
    font-weight: 500;
    max-width: 550px;
}

img{
    width: 170px;
}
`;

export const FooterRight = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;

h3{
    text-align: center;
    color: #000000;
    font-family: "Lato", Sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 0.5em;
}

h2{
    text-align: center;
    color: #000000;
    font-family: "Lato", Sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 0.1em;
    margin-top: 15px;
}
`;

export const FooterIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`;

export const FooterIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #967B44;
border-radius: 50%;
width: 35px;
height: 35px;
`;

export const Facebook = styled(FaFacebook)`
color: #fff;
`;

export const Linkedin = styled(FaLinkedin)`
color: #fff;
`;

export const Instagram = styled(FaInstagram)`
color: #fff;
`;