import { useDispatch } from "react-redux";
import sprite from "../../assets/images/sprite.svg";
import PropTypes from "prop-types";
import { toggleModalMenu } from "../../redux/carsReducer";
import { Content, StyledButtonClose, Wrapper } from "./ModalMenu.styled";

const ModalMenu = ({children}) => {
  const dispatch = useDispatch();

  const onCloseModal = () => {
    document.body.classList.remove("modal-open");
    dispatch(toggleModalMenu());
  };

  const onBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      cleanup();
    }
  };

  const onEscKeyPress = (e) => {
    if (e.key === "Escape") {
      cleanup();
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
        {children}
        <StyledButtonClose onClick={onCloseModal}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-cross-modal`} />
          </svg>
        </StyledButtonClose>
      </Content>
    </Wrapper>
  );
};

ModalMenu.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};


export default ModalMenu;
