import { WhoWeAreContainer, WhoWeAreLeft, WhoWeAreRight } from "./WhoWeAreStyles";
import whoWeAreImg from '../../assets/images/whoWeAreImg.svg'


const WhoWeAre = () => {
  return (
    <WhoWeAreContainer>
      <WhoWeAreLeft>
        <h2>Who We Are</h2>
        <p>Your Trusted Trucking and Towing Partner. With years of industry experience, we specialize in providing comprehensive solutions for your transportation needs. Our three companies, BGL-I Freight and Repairing, and One-Stop Petroleum, offer reliable trucking, maintenance, and fueling services.</p>
        <p>Our dedicated team is committed to delivering exceptional customer satisfaction, ensuring efficient and professional assistance. Trust us to keep your business moving forward with our expertise and commitment to excellence.</p>
        <button>Get in touch</button>
      </WhoWeAreLeft>
      <WhoWeAreRight>
        <img src={whoWeAreImg} alt="WhoWeAre" />
      </WhoWeAreRight>
    </WhoWeAreContainer>
  );
};

export default WhoWeAre;
