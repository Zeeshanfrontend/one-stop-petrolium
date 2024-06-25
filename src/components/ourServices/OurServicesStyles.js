import styled from 'styled-components';

export const OurServicesContainer = styled.div`
 padding: ${props => (props.buttonProp ? '100px 20px' : '20px')};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 20px;
 background: #fff;
 width: 100%;

 h2{
    color: #000000;
    font-size: 42px;
    font-weight: 600;
    text-align: center;
 }

 p{
    color: #111111;
    font-family: "Lato", Sans-serif;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    max-width: 850px;
    text-align: center;
 }

 button{
   display: ${props => (props.buttonProp ? 'flex' : 'none')};
   font-size: 17px;
   font-weight: 600;
   color: #FFFFFF;
   background-color: #229B7D;
   border-radius: 27px;
   padding: 10px 20px;
   font-family: "Lato", Sans-serif;
 }
`;

export const OurServicesCards = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 column-gap: 20px;
 row-gap: 30px;
 max-width: 1140px;
 margin: 20px 0;
`;

export const OurServicesCard = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 20px;
 box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
 border-radius: 7px;

 h3{
    color: #292929;
    font-size: 22px;
    font-weight: 600;
 }

 p{
    color: #000000;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
    text-align: left;
 }

 img{
    height: 220px;
    align-self: flex-start;
 }
`;