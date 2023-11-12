import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import { Content, StyledButtonClose, Wrapper } from "./Modal.styled";

const Modal = ({ onCloseModal, children }) => {


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
    <Wrapper onClick={onBackDropClick}>
      <Content>
        <StyledButtonClose name={'close-modal'} onClick={onCloseModal}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-close`} />
          </svg>
        </StyledButtonClose>
        {children}
      </Content>
    </Wrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};

export default Modal;
