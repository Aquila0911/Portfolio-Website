"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";
import { IoDownloadOutline } from "react-icons/io5";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const handleDownload = () => {
    window.open("/Resume-Siddharth.pdf", "_blank");
  };

  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl dark:shadow-none border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4, 7, 29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)",
      }}
    >
      <div className={`${id === 6 && `flex justify-center`} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={128} height={128}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && `w-full opacity-80`
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={192} height={192}
              className={"object-cover, object-center, w-full, h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold " /> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "TypeScript"].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {["Node.js", "MongoDB", "Express"].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={"Download Resume"}
                icon={<IoDownloadOutline />}
                position="left"
                otherClasses="!bg-[#161A31]"
                handleClick={handleDownload}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
