"use client";
import React, { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Tank from "@/models/Tank";

type Props = {};

export default function StockCalculator({}: Props) {
  const [currentStock, setCurrentStock] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [measurement, setMeasurement] = useState(0);
  const router = useRouter();

  const tank = new Tank("VC", 7.558, 1.897, 21.359, 153, 18460);

  useEffect(
    () => setConsumption(currentStock === 0 ? 0 : tank.stock - currentStock),
    [currentStock]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      const volume = tank.calculateVolume(value);
      setCurrentStock(volume);
      setMeasurement(value);
    } else {
      setCurrentStock(0);
      setMeasurement(0);
    }
  };

  const maxLengthCheck = (
    object: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, maxLength } = object.target;
    if (value.length > maxLength) {
      object.target.value = value.slice(0, maxLength);
    }
  };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="mt-10">
        <label className="underline decoration-accent" htmlFor="measurement">
          Introduzca la nueva Medición
        </label>
        <div className="flex mt-5 justify-center">
          <input
            onChange={(e) => handleChange(e)}
            onInput={maxLengthCheck}
            className="w-20 mr-1 px-1 text-right outline-none rounded-sm border border-secondary
            transition-all focus:border-accent"
            id="measurement"
            type="number"
            step="0.001"
            placeholder="45.5"
            maxLength={6}
          />
          <span className="font-semibold">cm</span>
        </div>
      </div>
      <div className="flex mt-10">
        <p>
          Existencia Actual:{" "}
          <span className="font-semibold">
            {isNaN(currentStock) ? "Error" : `${currentStock} lts`}
          </span>
        </p>
      </div>
      <div className="mt-5 flex">
        <p>
          Consumo:{" "}
          <span className="font-semibold">
            {consumption === tank.stock
              ? 0
              : isNaN(consumption)
              ? "Error"
              : `${consumption} lts`}
          </span>
        </p>
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={handleClick}
          className="btn gap-2 btn-primary"
          disabled={measurement === 0 || isNaN(currentStock)}
        >
          <CheckIcon className="h-6 w-6" />
          Confirmar
        </button>
      </div>
    </div>
  );
}
