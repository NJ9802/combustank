import React from "react";
import Link from "next/link";
import ActionsButtons from "./ActionsButtons";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="navbar shadow-lg bg-primary text-primary-content z-50">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          CombusTank
        </Link>
      </div>
      <div className="flex-none">
        <ActionsButtons />
      </div>
    </header>
  );
}
