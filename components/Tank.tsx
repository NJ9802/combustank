import React from "react";

type Props = {};

export default function Tank({}: Props) {
  const percent = (64 / 100) * 100;

  const color =
    percent < 30
      ? "error"
      : percent > 30 && percent <= 65
      ? "warning"
      : "accent";

  return (
    <div className="bg-base-200 text-base-content text-sm py-5 px-5 rounded-lg">
      <div className="flex justify-around items-center">
        <div>
          <h4 className="text-lg font-bold">Villa Cuba</h4>
          <p>
            Capacidad: <span className="font-semibold">21</span> m3
          </p>
          <p>
            Existencia: <span className="font-semibold">12354</span> lts
          </p>
          <p>
            Medicion: <span className="font-semibold">96.41</span> cm
          </p>
        </div>
        <div
          className={`radial-progress text-${color}`}
          style={{ "--value": percent } as React.CSSProperties}
        >
          {`${percent}%`}
        </div>
      </div>
    </div>
  );
}
