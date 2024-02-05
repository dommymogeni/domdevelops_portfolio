'use client'

{ /** imports required */ }
import { RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "@remixicon/react";
import Link from "next/link"


const icons = [
  {
    path: "https://www.github.com/dommymogeni",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.github.com/dommymogeni",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "https://www.github.com/dommymogeni",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.github.com/dommymogeni",
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((icon , index) => {
          return (
            <Link href={icon.path} key={index}>
              <div className={`${iconStyles}`}>
                {icon.name}
              </div>
            </Link>
          );
        })
      }
    </div>
  )
}

export default Socials