import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import {
  StyledForm,
  StyledInputWrapper,
  StyledMileageFromInput,
  StyledMileageToInput,
} from "./SearchFormStyles";

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


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          {/* <span>Car brand</span> */}
          <Controller
            name="make"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={makes}
                isClearable={true}
                isSearchable={true}
                placeholder="Brand"
              />
            )}
          />
        </label>
        {/* <label> */}
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              {...register("category", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              placeholder="Price"
              {...field}
              options={price}
            />
          )}
        />
        {/* <span>Price / 1 hour</span> */}
        {/* <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={price}
                isClearable={true}
                isSearchable={true}
                placeholder="To $"
              />
            )}
          />
          {errors.price && <p>{errors.price.message}</p>} */}
        {/* </label> */}
        <label>
          {/* <span>Сar mileage / km</span> */}
          <StyledInputWrapper>
            <StyledMileageFromInput
              type="number"
              {...register("mileageFrom")}
              placeholder="From"
            />
            {errors.mileageFrom && <p>{errors.mileageFrom.message}</p>}
            <StyledMileageToInput
              type="number"
              placeholder="To"
              {...register("mileageTo", {
                required: { value: false, message: "This field is required" },
              })}
            />
          </StyledInputWrapper>
          {errors.mileageTo && <p>{errors.mileageTo.message}</p>}
        </label>

        <button>search</button>
      </StyledForm>
    </div>
  );
};

export default SearchForm;
