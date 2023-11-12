import { NavLink } from "react-router-dom";
import { StyledNoData } from "./NoDataPage.styled";
import sprite from "../../assets/images/sprite.svg";

const NoDataPage = () => {
  return (
    <StyledNoData>
      <div>
        <svg width="200" height="200">
          <use href={`${sprite}#icon-no-data`} />
        </svg>
      </div>
      <div>There is no data in your favorites</div>
      <div>
        Let`s add them on <NavLink to="/catalog">Catalog page</NavLink>
      </div>
    </StyledNoData>
  );
};

export default NoDataPage;
