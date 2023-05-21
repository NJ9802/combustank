import React from "react";

type Props = {
  tank: {
    id: string;
    name: string;
    capacity: number;
    stock: number;
    measurement: number;
  };
};

export default function Tank({ tank }: Props) {
  const percent = Math.round((tank.stock / (tank.capacity * 1000)) * 100);

  return (
    <div className="bg-base-200 text-base-content text-sm py-5 px-5 rounded-lg">
      <div className="flex justify-around items-center">
        <div>
          <h4 className="text-lg font-bold">{tank.name}</h4>
          <p>
            Capacidad: <span className="font-semibold">{tank.capacity}</span> m3
          </p>
          <p>
            Existencia: <span className="font-semibold">{tank.stock}</span> lts
          </p>
          <p>
            Medicion: <span className="font-semibold">{tank.measurement}</span>{" "}
            cm
          </p>
        </div>
        <div
          className="radial-progress"
          style={{ "--value": percent } as React.CSSProperties}
        >
          {`${percent}%`}
        </div>
      </div>
    </div>
  );
}
