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
    <footer className="footer fixed bottom-0 items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <Image className="rounded-lg" src="/brand2.jpeg" alt="logo" width={36} height={36} />{" "}
        <p>CombusTank © 2023</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
