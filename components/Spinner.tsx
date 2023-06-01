import React from "react";

type Props = {};

export default function Spinner({}: Props) {
  return (
    <div className="pt-0 flex flex-1 justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>{" "}
    </div>
  );
}
