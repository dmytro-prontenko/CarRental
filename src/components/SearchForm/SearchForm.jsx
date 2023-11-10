import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";
import { getCarsByFilterThunk, getCarsThunk } from "../../redux/thunks";
import {
  StyledForm,
  StyledInputWrapper,
  StyledMileageFromInput,
  StyledMileageToInput,
  StyledSearchButton,
  StyledSpan,
} from "./SearchForm.styled";
import { makeStyles, priceStyles } from "./Select.styles";
import { setEmptyCarsList } from "../../redux/carsReducer";

const price = [];

const defaultValues = {
  make: null,
  price: null,
  mileageFrom: null,
  mileageTo: null,
};

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
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const filteredList = useSelector((state) => state.cars.filteredCars);
  const limit = useSelector((state) => state.cars.limit);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const dataToDispatch = { ...data };
    dataToDispatch.make = data.make?.value || null;
    dataToDispatch.price = +data.price?.value || null;
    dataToDispatch.mileageFrom = +data.mileageFrom;
    dataToDispatch.mileageTo = +data.mileageTo;
    const { make, price, mileageFrom, mileageTo } = dataToDispatch;

    if (make || price || mileageFrom || mileageTo) {
      dispatch(getCarsByFilterThunk({ make, price, mileageFrom, mileageTo }))
        .unwrap()
        .then(() => {
          toast.success(`We found ${filteredList.length} cars`);
        });
      reset(defaultValues);
    } else {
      toast.info("You must choose at least one filed for filtering");
    }
  };

  const handleClearResults = () => {
    dispatch(setEmptyCarsList())
    dispatch(getCarsThunk({ page: 1, limit }));
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
                {...register("price")}
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
                // {...register("price")}
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
        {filteredList.length ? (
          <StyledSearchButton type="button" onClick={handleClearResults}>
            Clear results
          </StyledSearchButton>
        ) : null}
      </StyledForm>
    </div>
  );
};

export default SearchForm;
