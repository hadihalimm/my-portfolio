import React from "react";
import { TbCertificate } from "react-icons/tb";
import { WobbleCard } from "./ui/WobbleCard";
import MagicButton from "./ui/MagicButton";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-24">
      <h1 className="pb-5 text-3xl font-bold">Skills</h1>

      <div className="mx-8 grid grid-cols-1 gap-4 md:mx-28 md:grid-cols-3">
        <WobbleCard
          containerClassName="col-span-1 h-full bg-gradient-to-br from-black from-85% to-white to-50% border-2"
          className="h-full px-4 py-4"
        >
          <h1 className="text-xl font-semibold md:text-2xl">Next.js & React</h1>
          <p className="py-2 text-xs tracking-tighter md:text-base">
            Next.js is a React framework for building full-stack web
            applications.
          </p>
        </WobbleCard>

        <WobbleCard
          containerClassName="col-span-1 h-full bg-gradient-to-br from-black from-85% to-[#68a063] to-50% border-[#68a063] border-2 "
          className="flex h-full flex-col justify-between px-4 py-4"
        >
          <div>
            <h1 className="text-xl font-semibold md:text-2xl">
              Express & Node.js
            </h1>
            <p className="py-2 pb-4 text-xs tracking-tighter md:text-base">
              Express is a minimal and flexible Node.js web application
              framework that provides a robust set of features for web and
              mobile applications.
            </p>
          </div>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/89WMZK9YM6KE"
            target="_blank"
          >
            <MagicButton
              title="Certificate"
              icon={<TbCertificate className="size-5" />}
              position={"left"}
            />
          </a>
        </WobbleCard>

        <WobbleCard
          containerClassName="col-span-1 h-full bg-gradient-to-br from-black from-85% to-[#0b4b33] to-50% border-[#0b4b33] border-2 "
          className="flex h-full flex-col justify-between px-4 py-4"
        >
          <div>
            <h1 className="text-xl font-semibold md:text-2xl">
              Django & Python
            </h1>
            <p className="py-2 pb-4 text-xs tracking-tighter md:text-base">
              Django is a high-level Python web framework that encourages rapid
              development and clean, pragmatic design.
            </p>
          </div>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/HD24W4FQ83AC"
            target="_blank"
          >
            <MagicButton
              title="Certificate"
              icon={<TbCertificate className="size-5" />}
              position={"left"}
            />
          </a>
        </WobbleCard>

        <WobbleCard
          containerClassName="col-span-1 h-full bg-gradient-to-br from-black from-85% to-[#027d9c] to-50% border-[#027d9c] border-2"
          className="flex h-full flex-col justify-between px-4 py-4"
        >
          <div>
            <h1 className="text-xl font-semibold md:text-2xl">Golang</h1>
            <p className="py-2 pb-4 text-xs tracking-tighter md:text-base">
              An open-source programming language supported by Google. Built-in
              concurrency and a robust standard library.
            </p>
          </div>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/MVCKM5GUL3V3"
            target="_blank"
          >
            <MagicButton
              title="Certificate"
              icon={<TbCertificate className="size-5" />}
              position={"left"}
            />
          </a>
        </WobbleCard>

        <WobbleCard
          containerClassName="col-span-1 h-full bg-gradient-to-br from-black from-85% to-[#1c63ed] to-50% border-[#1c63ed] border-2"
          className="flex h-full flex-col justify-between px-4 py-4"
        >
          <div>
            <h1 className="text-xl font-semibold md:text-2xl">
              Docker & Kubernetes
            </h1>
            <p className="py-2 pb-4 text-xs tracking-tighter md:text-base">
              Docker is an open-source platform that enables developers to
              build, deploy, run, update and manage containers.
            </p>
          </div>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/DMB5V3SZNEM9"
            target="_blank"
          >
            <MagicButton
              title="Certificate"
              icon={<TbCertificate className="size-5" />}
              position={"left"}
            />
          </a>
        </WobbleCard>

        <WobbleCard
          containerClassName="col-span-1 h-full bg-gradient-to-br from-black from-85% to-[#d26314] to-50% border-[#d26314] border-2 "
          className="flex h-full flex-col justify-between px-4 py-4"
        >
          <div>
            <h1 className="text-lg font-semibold md:text-xl">
              Microservices & Serverless
            </h1>
            <p className="py-2 pb-4 text-xs tracking-tighter md:text-[15px] md:leading-6">
              Microservices are independent, modular business services.. While
              serverless is a cloud execution that doesn&apos;t need server
              management.
            </p>
          </div>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/6MLY58FH98FH"
            target="_blank"
          >
            <MagicButton
              title="Certificate"
              icon={<TbCertificate className="size-5" />}
              position={"left"}
            />
          </a>
        </WobbleCard>
      </div>
    </div>
  );
};

export default Skills;
