import React, { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import tankConstructor from "@/lib/tankConstructor";
import { Tank, db } from "@/lib/db";

type Props = {
  tank: Tank;
};

export default function StockCalculator({ tank }: Props) {
  const [currentStock, setCurrentStock] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [measurement, setMeasurement] = useState(0);
  const [decimals, setDecimals] = useState(0);
  const router = useRouter();

  const tankObject = tankConstructor(tank);

  useEffect(
    () =>
      setConsumption(currentStock === 0 ? 0 : tankObject.stock - currentStock),
    [currentStock, tankObject]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      const volume = tankObject.calculateVolume(value, decimals);
      setCurrentStock(volume);
      setMeasurement(value);
    } else {
      setCurrentStock(0);
      setMeasurement(0);
    }
  };

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const decimals = parseInt(e.target.value);
    setDecimals(decimals);
    setCurrentStock(tankObject.calculateVolume(measurement, decimals));
  };

  const maxLengthCheck = (
    object: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, maxLength } = object.target;
    if (value.length > maxLength) {
      object.target.value = value.slice(0, maxLength);
    }
  };

  const handleClick = async () => {
    await db.tanks.update(tank.id as number, {
      stock: currentStock,
      measurement,
    });
    router.push("/");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-5 py-2 w-full text-center bg-secondary/10">
        <label className="underline decoration-secondary" htmlFor="measurement">
          Introduzca la nueva Medición
        </label>

        <div className="flex mt-3 justify-center">
          <input
            onChange={(e) => handleChange(e)}
            onInput={maxLengthCheck}
            className="w-20 mr-1 px-1 text-center outline-none border-b bg-transparent border-accent
            transition-all focus:border-primary focus:border-b-2"
            id="measurement"
            type="number"
            step="0.001"
            placeholder="45.5"
            maxLength={8}
          />
          <span className="font-semibold">cm</span>
        </div>
      </div>

      <div className="flex flex-col rounded-md bg-secondary/10 py-2 mt-5 space-y-1 items-center w-full">
        <label>Lugares Decimales</label>
        <div className="flex justify-evenly w-full">
          <div className="flex items-center justify-center space-x-1">
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary"
              onChange={(e) => handleInputsChange(e)}
              id="0"
              value={0}
              checked={decimals === 0}
            />
            <label htmlFor="0">0</label>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary"
              onChange={(e) => handleInputsChange(e)}
              id="0.0"
              value={1}
            />
            <label htmlFor="0.0">0.0</label>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary"
              onChange={(e) => handleInputsChange(e)}
              id="0.00"
              value={2}
            />
            <label htmlFor="0.00">0.00</label>
          </div>
        </div>
      </div>

      <div className="flex mt-8">
        <p>
          Existencia Actual:{" "}
          <span className="font-semibold">
            {isNaN(currentStock) ? "Error" : `${currentStock} lts`}
          </span>
        </p>
      </div>
      <div className="mt-3 flex">
        <p>
          Consumo:{" "}
          <span className="font-semibold">
            {consumption === tankObject.stock
              ? 0
              : isNaN(consumption)
              ? "Error"
              : `${consumption} lts`}
          </span>
        </p>
      </div>
      <div className="mt-8 w-full text-center">
        <button
          onClick={handleClick}
          className="btn w-full gap-2 btn-accent"
          disabled={measurement === 0 || isNaN(currentStock)}
        >
          <CheckIcon className="h-6 w-6" />
          Confirmar
        </button>
      </div>
    </div>
  );
}
