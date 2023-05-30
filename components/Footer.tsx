import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Footer({}: Props) {
  const socials = [
    "https://twitter.com/nj9802",
    "https://t.me/nelsonjavier9802",
    "https://github.com/nj9802",
    "mailto:nelson.javier.aldazabal@gmail.com",
  ];
  return (
    <footer className="footer gap-y-3 items-center p-4 bg-neutral text-neutral-content">
      <div className="grid-flow-col gap-4">
        {socials.map((social) => (
          <SocialIcon
            className="w-1"
            key={social}
            url={social}
            fgColor="white"
            bgColor="transparent"
          />
        ))}
      </div>
    </footer>
  );
}
