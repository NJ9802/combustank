"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

type Props = {};

export default function DropdownMenu({}: Props) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <div className="flex items-center">
        {pathname !== "/" ? (
          <Link role="button" href="/" className="text-sm btn btn-ghost">
            <HomeIcon className="h-6 w-6" />
          </Link>
        ) : (
          <nav className="flex items-center">
            <Link role="button" href="/new" className="text-sm btn btn-ghost">
              <PlusIcon className="h-6 w-6" />
            </Link>
            <Link
              role="button"
              href="/delete"
              className="text-sm btn btn-ghost"
            >
              <TrashIcon className="h-6 w-6" />
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}
