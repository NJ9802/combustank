import React from "react";
import { UseFormRegister } from "react-hook-form";
import { Input } from "./AddTankForm";

type Props = {
  title: string;
  placeholder: string;
  unit: string;
  id: "averageLength" | "averageHeight" | "capacity" | "measurement" | "stock";
  register: UseFormRegister<Input>;
};

export default function AddTankInput({
  title,
  placeholder,
  unit,
  id,
  register,
}: Props) {
  return (
    <div className="flex justify-evenly items-center space-x-2">
      <label htmlFor={id}>{`${title}:`}</label>
      <div>
        <input
          {...register(id, { required: true, min: 0 })}
          id={id}
          className={`${
            id === "stock" ? "w-20" : "w-16"
          } mr-1 px-1 text-right outline-none rounded-sm border border-secondary
    transition-all focus:border-accent`}
          type="number"
          step="0.001"
          placeholder={placeholder}
        />
        <span className="font-semibold">{unit}</span>
      </div>
    </div>
  );
}
