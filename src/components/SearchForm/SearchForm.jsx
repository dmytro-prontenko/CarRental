import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  StyledForm,
  StyledInputWrapper,
  StyledMileageFromInput,
  StyledMileageToInput,
  StyledSearchButton,
  StyledSpan,
} from "./SearchForm.styled";
import { makeStyles, priceStyles } from "./Select.styles";

const price = [];
for (let index = 1; index <= 15; index++) {
  price.push({ value: `${index * 10}`, label: `${index * 10}` });
}

const makes = [
  { value: "Buick", label: "Buick" },
  { value: "Volvo", label: "Volvo" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Mercedes", label: "Mercedes" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Kia", label: "Kia" },
  { value: "Land", label: "Land" },
];

makes.sort((a, b) => {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
});

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ make, price, mileageFrom, mileageTo }) => {
    if (make || price || mileageFrom || mileageTo) {
      console.log(make?.value, price.value);
    } else {
      toast.info("You must choose at least one filed for filtering");
    }
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          <StyledSpan>Car brand</StyledSpan>
          <Controller
            name="make"
            control={control}
            render={({ field }) => (
              <Select
                styles={makeStyles}
                {...field}
                options={makes}
                isClearable={true}
                isSearchable={true}
                placeholder="Choose a brand"
              />
            )}
          />
        </label>
        <label>
          <StyledSpan>Price / 1 hour</StyledSpan>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Select
                {...register("price", {})}
                placeholder="To $"
                styles={priceStyles}
                {...field}
                options={price}
                isClearable={true}
                isSearchable={true}
              />
            )}
          />
        </label>
        <label>
          <StyledSpan>Сar mileage / km</StyledSpan>
          <StyledInputWrapper>
            <StyledMileageFromInput
              type="number"
              {...register("mileageFrom")}
              placeholder="From"
            />
            <StyledMileageToInput
              type="number"
              placeholder="To"
              {...register("mileageTo")}
            />
          </StyledInputWrapper>
          {errors.mileageTo && <p>{errors.mileageTo.message}</p>}
        </label>
          <StyledSearchButton>Search</StyledSearchButton>
      </StyledForm>
    </div>
  );
};

export default SearchForm;
