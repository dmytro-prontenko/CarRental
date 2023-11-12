import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import { Content, StyledButtonClose, Wrapper } from "./ModalMenu.styled";
import {
  StyledNavLink,
  StyledNavigationLinksModal,
} from "../Header/Header.styled";
import { useDispatch } from "react-redux";
import { toggleModalMenu } from "../../redux/carsReducer";

const ModalMenu = () => {
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
        <StyledNavigationLinksModal>
          <StyledNavLink to="/" onClick={onCloseModal}>
            Home
          </StyledNavLink>
          <StyledNavLink to="/catalog" onClick={onCloseModal}>
            Catalog
          </StyledNavLink>
          <StyledNavLink to="/favorites" onClick={onCloseModal}>
            Favorites
          </StyledNavLink>
        </StyledNavigationLinksModal>
        <StyledButtonClose id="close-modal" title="Close modal window" onClick={onCloseModal}>
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
