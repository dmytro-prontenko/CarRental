import styled from "styled-components";
import Select from "react-select";

export const StyledForm = styled.form`
  display: flex;
  gap: 18px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
`;

export const StyledMileageFromInput = styled.input`
  height: 48px;
`;
export const StyledMileageToInput = styled.input`
  height: 48px;
`;

export const CustomSelect = styled(Select)`
  .Select-control {
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    padding: 5px;
  }

  .Select-value-label {
    color: #333;
  }

  .Select-menu-outer {
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    color: #333;
  }

  .Select-option {
    padding: 10px;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
