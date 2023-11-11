import { ContainerStyles } from "../../General.styled";
import { StyledSpan } from "../../components/ModalCard/ModalCard.styled";
import { HomePageWrapper, StyledBlock, StyledBlockWrapper, StyledHeaderSpan, StyledMainHeader } from "./Homepage.styled";

const Homepage = () => {
  return (
    <ContainerStyles>
      <HomePageWrapper>
        <StyledMainHeader>
          <span>
            Car<StyledSpan>Rentify</StyledSpan>
          </span>
          <StyledHeaderSpan>Drive into Adventure, Where Every Journey is an Expedition</StyledHeaderSpan>
        </StyledMainHeader>
        <StyledBlockWrapper>
          <StyledBlock>
            <h2>Welcome to Car<StyledSpan>Rentify</StyledSpan></h2>
            <h3>Discover the Freedom of Travel</h3>
            <div>
              At CarRental, we believe in providing more than just cars; we offer a
              gateway to freedom. Our commitment to excellence ensures an
              unparalleled rental experience, empowering you to explore the world on
              your terms.
            </div>
          </StyledBlock>
          <StyledBlock>
            <h2>About Us</h2>
            <h3>Reliable Excellence Since 2008</h3>
            <div>
              Established with a vision to redefine car rental services, CarRental
              has been a trusted name since 2008. Our unwavering dedication to
              customer satisfaction and a fleet of meticulously maintained vehicles
              have made us a preferred choice for countless travelers.
            </div>
          </StyledBlock>
          <StyledBlock>
            <h2>Explore Our Fleet</h2>
            <h3>Time-Tested and Reliable</h3>
            <div>
              Embark on your journey with confidence, knowing that our fleet
              comprises not just cars but a collection of memories waiting to be
              made. Our vehicles, though seasoned, are meticulously inspected,
              ensuring a safe and enjoyable ride every time. From compact cars to
              spacious SUVs, find the perfect match for your travel needs.
            </div>
          </StyledBlock>
          <StyledBlock>
            <h2>Why Choose Car<StyledSpan>Rentify</StyledSpan>?</h2>
            <h3>Unmatched Advantages for Your Journey</h3>
            <ul>
              <li>
                Quality Assurance: Our vehicles undergo rigorous inspections,
                guaranteeing reliability and safety.
              </li>
              <li>
                Flexible Rental Plans: Tailor your rental experience with our
                flexible plans, accommodating both short and extended journeys.
              </li>
              <li>
                24/7 Support: Have peace of mind with our round-the-clock customer
                support, ready to assist you anytime, anywhere.
              </li>
              <li>
                Transparent Pricing: No hidden fees – our transparent pricing
                ensures you get what you see, with no surprises.
              </li>
            </ul>
          </StyledBlock>
        </StyledBlockWrapper>
      </HomePageWrapper>
    </ContainerStyles>
  );
};

export default Homepage;
