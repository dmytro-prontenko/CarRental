import { ContainerStyles } from "../../General.styled";
import { StyledSpan } from "../../components/ModalCard/ModalCard.styled";
import {
  HomePageWrapper,
  StyledBlock,
  StyledBlockWrapper,
  StyledMainHeader,
  StyledMainSubSubheader,
  StyledMainSubheader,
  StyledStartButton,
  StyledStartLink,
} from "./Homepage.styled";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 1,
    },
  },
  exit: {
    transition: { ease: "linear" },
  },
};

const Homepage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ContainerStyles>
        <HomePageWrapper>
          <StyledMainHeader>
            <span>
              Car<StyledSpan>Rentify</StyledSpan>
            </span>
          </StyledMainHeader>
          <StyledMainSubheader>
            Drive into Adventure, Where Every Journey is an Expedition
          </StyledMainSubheader>
          <StyledBlockWrapper>
            <StyledBlock>
              <StyledMainSubSubheader>
                Welcome to Car<StyledSpan>Rentify</StyledSpan>
              </StyledMainSubSubheader>
              <h4>Discover the Freedom of Travel</h4>
              <div>
                At CarRentify, we believe in providing more than just cars; we
                offer a gateway to freedom. Our commitment to excellence ensures
                an unparalleled rental experience, empowering you to explore the
                world on your terms.
              </div>
            </StyledBlock>
            <StyledBlock>
              <StyledMainSubSubheader>About Us</StyledMainSubSubheader>
              <h4>Reliable Excellence Since 2008</h4>
              <div>
                Established with a vision to redefine car rental services,
                CarRentify has been a trusted name since 2008. Our unwavering
                dedication to customer satisfaction and a fleet of meticulously
                maintained vehicles have made us a preferred choice for
                countless travelers.
              </div>
            </StyledBlock>
            <StyledBlock>
              <StyledMainSubSubheader>Explore Our Fleet</StyledMainSubSubheader>
              <h4>Time-Tested and Reliable</h4>
              <div>
                Embark on your journey with confidence, knowing that our fleet
                comprises not just cars but a collection of memories waiting to
                be made. Our vehicles, though seasoned, are meticulously
                inspected, ensuring a safe and enjoyable ride every time. From
                compact cars to spacious SUVs, find the perfect match for your
                travel needs.
              </div>
            </StyledBlock>
            <StyledBlock>
              <StyledMainSubSubheader>
                Why Choose Car<StyledSpan>Rentify</StyledSpan>?
              </StyledMainSubSubheader>
              <h4>Unmatched Advantages for Your Journey</h4>
              <ul>
                <li>
                  Quality Assurance: Our vehicles undergo rigorous inspections,
                  guaranteeing reliability and safety.
                </li>
                <li>
                  Flexible Rental Plans: Tailor your rental experience with our
                  flexible plans, accommodating both short and extended
                  journeys.
                </li>
                <li>
                  24/7 Support: Have peace of mind with our round-the-clock
                  customer support, ready to assist you anytime, anywhere.
                </li>
                <li>
                  Transparent Pricing: No hidden fees – our transparent pricing
                  ensures you get what you see, with no surprises.
                </li>
              </ul>
            </StyledBlock>
          </StyledBlockWrapper>
          <StyledStartButton name="go-to-catalog">
            <StyledStartLink to="/catalog">Let`s start</StyledStartLink>
          </StyledStartButton>
        </HomePageWrapper>
      </ContainerStyles>
    </motion.div>
  );
};

export default Homepage;
