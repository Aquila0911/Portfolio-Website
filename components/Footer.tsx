"use client";

import React from "react";
import "@/public/footer-grid.svg";
import MagicButton from "./ui/MagicButton";
import { FaEnvelope } from "react-icons/fa";
import { socialMedia } from "@/data";
import animationData from "@/data/confetti.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const Footer = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("siddharth.ghosh9@gmail.com");
    setCopied(true);
  };

  return (
    <footer id="contact" className="w-full mb-[100px] md:mb-5 pb-10">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className={`absolute -bottom-5 right-5`}>
          <Lottie
            options={{
              loop: copied,
              autoplay: copied,
              animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYmid slice",
              },
            }}
          />
        </div>
        <MagicButton
          title={copied ? "Copied!" : "Copy my email"}
          icon={<FaEnvelope />}
          position="right"
          handleClick={handleCopy}
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-around items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Siddharth
        </p>

        <div className="flex items-center md:gap-3 gap-6 pt-2">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="ww-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={profile.img}
                  alt={profile.title}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
