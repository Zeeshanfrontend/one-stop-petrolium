import styled from 'styled-components';

export const ContactUsSectionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #229B7D;
padding: 50px 20px;
`;

export const ContactUsSectionContent = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
display: flex;
justify-content: space-between;
gap: 50px;
padding: 35px;
border-radius: 5px;
width: 100%;
max-width: 1140px;
`;

export const ContactUsSectionContentLeft = styled.div`
display: flex;
flex-direction: column;
gap: 15px;

h1{
    color: #000000;
    font-size: 35px;
    font-weight: 600;
}

h2{
    color: #000000;
    font-size: 30px;
    font-weight: 400;
}

p{
    color: #000000;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    max-width: 500px;
}

h3{
    color: #000000;
    font-size: 26px;
    font-weight: 500;
    margin: 15px 0 0 0;
}
`;

export const ContactUsIcons = styled.div`
display: flex;
align-items: center;
gap: 10px;

p{
    font-size: 17px;
    font-weight: 500;
}
`;

export const ContactUsFormContainer = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
`;

export const CombinedFields = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

export const FormField = styled.div`
display: flex;
flex-direction: column;
gap: 5px;

label{
    font-size: 16px;
    font-weight: 600;
    color: #000000;
}
input{
    color: #000000;
    font-size: 16px;
    border: 1px solid #69727d;
    padding: 8px 10px;
    border-radius: 3px;
}
`;

export const Message = styled.textarea`
border: 1px solid #69727d;
padding: 15px;
height: 200px;
border-radius: 3px;
`;

export const FormButton = styled.button`
font-family: "Open Sans", Sans-serif;
font-size: 16px;
font-weight: 600;
border-radius: 36px;
background-color: #229B7D;
color: #FFFFFF;
width: 200px;
padding: 15px 20px;
font-size: 16px;
font-weight: 600;
margin-top: 10px;
`;