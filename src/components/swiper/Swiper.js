import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import heroHome from '../../assets/images/heroHome.jpg'


// import required modules
import { Autoplay } from 'swiper/modules';

const AutoSwiper = () => {
  const slides = [
    {
      id: 1,
      imageUrl: heroHome,
      title: 'One-Stop Petrolium',
      heading: 'We are dedicated to providing reliable and efficient assistance to truck drivers and fleet operators in need of roadside support',
    },
    // {
    //   id: 2,
    //   imageUrl: 'https://via.placeholder.com/800x400',
    //   title: 'Title 2',
    //   heading: 'Heading 2',
    // },
    // {
    //   id: 3,
    //   imageUrl: 'https://via.placeholder.com/800x400',
    //   title: 'Title 3',
    //   heading: 'Heading 3',
    // },
  ];

  return (
    <StyledSwiper
      modules={[Autoplay]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slide imageUrl={slide.imageUrl}>
            <CenteredText>
                <h2>{slide.title}</h2>
                <p>{slide.heading}</p>
            </CenteredText>
          </Slide>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 530px;
`;

const Slide = styled.div`
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CenteredText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: rgba(0,0,0, 0.7);

  h2{
    color: #FFFFFF;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
  }
  p{
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 500;
    max-width: 700px;
    text-align: center;
  }
`;

export default AutoSwiper;
