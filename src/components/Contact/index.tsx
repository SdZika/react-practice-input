import { useState, FC, ChangeEvent } from "react";
import { Input } from "../Input";

interface MyPops {
  year: number;
  make: string;
  model: string;
}

export const Contact: FC = () => {
  const [state, setState] = useState<MyPops>({
    year: 2011,
    make: "Ford",
    model: "Kuga",
  });

  const updateYear = (event: ChangeEvent<HTMLInputElement>) => {
    setState((previousState) => ({
      ...previousState,
      year: Number(event.target.value),
    }));
  };

  const updateMake = (event: ChangeEvent<HTMLInputElement>) => {
    setState((previousState) => ({
      ...previousState,
      make: event.target.value,
    }));
  };

  const updateModel = (event: ChangeEvent<HTMLInputElement>) => {
    setState((previousState) => ({
      ...previousState,
      model: event.target.value,
    }));
  };

  const myCars: string[] = ["ford", "toyota", "hyndai"];

  const [car, setCar] = useState("");

  const updateCar = (e: ChangeEvent<HTMLInputElement>) => {
    setCar(e.target.value);
  };

  return (
    <div>
      <p>
        My favorite car is {state.year} {state.make} {state.model}{" "}
      </p>
      <input type="number" value={state.year} onChange={updateYear}></input>
      <input type="text" value={state.make} onChange={updateMake}></input>
      <input type="text" value={state.model} onChange={updateModel}></input>
      <p>My favorite brand</p>
      {myCars.map((carBrand) => (
        <Input
          name="favoriteCar"
          value={carBrand}
          type="radio"
          onChange={updateCar}
          checked={carBrand === car}
        />
      ))}
    </div>
  );
};
