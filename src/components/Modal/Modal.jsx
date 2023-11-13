import { motion } from "framer-motion";
import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import ModalCard from "../ModalCard/ModalCard";
import { Content, StyledButtonClose, Wrapper } from "./Modal.styled";


const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0, duration: 0.5 },
  },
};

const Modal = ({ onCloseModal }) => {
  const onBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      cleanup();
      onCloseModal();
    }
  };

  const onEscKeyPress = (e) => {
    if (e.key === "Escape") {
      cleanup();
      onCloseModal();
    }
  };

  document.addEventListener("keydown", onEscKeyPress);
  document.body.classList.add("modal-open");

  const cleanup = () => {
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", onEscKeyPress);
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Wrapper onClick={onBackDropClick}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Content>
              <StyledButtonClose
                id={"close-modal"}
                title="Close modal window"
                onClick={onCloseModal}
              >
                <svg width="18" height="18">
                  <use href={`${sprite}#icon-close`} />
                </svg>
              </StyledButtonClose>
              {/* {children} */}
              <ModalCard />
            </Content>
          </motion.div>
        </Wrapper>
      </motion.div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};

export default Modal;
