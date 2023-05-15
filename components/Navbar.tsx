import React from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="navbar sticky top-0 bg-primary text-primary-content z-50">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          CombusTank
        </Link>
      </div>
      <div className="flex-none">
        <DropdownMenu />
      </div>
    </header>
  );
}
