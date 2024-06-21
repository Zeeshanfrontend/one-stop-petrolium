import styled from 'styled-components';

export const WhoWeAreContainer = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  width: 100%;
  max-width: 1140px;
  align-self: center;
`;

export const WhoWeAreLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2{
    color: #000000;
    font-size: 42px;
    font-weight: 600;
  }

  p{
    color: #111111;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    max-width: 550px;
  }

  button{
    background: #229B7D;
    border-radius: 36px;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 600;
    width: 150px;
    padding: 10px 20px;
    margin-top: 20px;
  }
`;


export const WhoWeAreRight = styled.div`
max-width: 500px;
`;