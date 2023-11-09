import { useSelector } from "react-redux";

const GalleryItems = () => {
  const carsList = useSelector((state) => state.cars.cars);

  const carsItems = carsList.map((car) => {
    return (
      <li key={car.id}>
        <img src={car.img} alt={`${car.make} ${car.model}`} width="274px" height="268px"/>
        <div>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{car.rentalPrice}</p>
        </div>
        <div>
          <p>{car.address.split(", ")[1]}</p>
          <p>{car.address.split(", ")[2]}</p>
          <p>{car.rentalCompany}</p>
          <p>{car.type}</p>
          <p>{car.id}</p>
          <p>{car.functionalities[0]}</p>
        </div>
        <button>Learn more</button>
      </li>
    );
  });

  return <ul>{carsItems}</ul>;
};

export default GalleryItems;
