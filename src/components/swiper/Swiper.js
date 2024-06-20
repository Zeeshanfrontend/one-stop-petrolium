import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper/modules';

const AutoSwiper = () => {
  const slides = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/800x400',
      title: 'Title 1',
      heading: 'Heading 1',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/800x400',
      title: 'Title 2',
      heading: 'Heading 2',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/800x400',
      title: 'Title 3',
      heading: 'Heading 3',
    },
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
  height: 400px;

  .swiper-pagination-bullet {
    background-color: #fff;
  }
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2{
    color: #fff;
  }
  p{
    color: #fff;
  }
`;

export default AutoSwiper;
