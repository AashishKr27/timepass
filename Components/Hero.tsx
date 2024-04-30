import React from "react";
import { useCallback } from "react";
// import Particles from "@tsparticles/react";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadSlim } from "tsparticles-slim";
import TextEffect from "./TextEffect";
import Image from "next/image";
import ashish from "/public/ashish.png";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
const Hero = () => {  
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   console.log(engine);
  //   await loadSlim(engine);
  // }, []);
  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //     await console.log(container);
  //   },
  //   []
  // );
  return (
    <div
      id="hero"
      className="h-[88vh] bg-cover bg-center bg-zinc-950 mt-[3.8rem]"
    >
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 0,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> */}
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
            HI, I`M <span className="text-yellow-400">ASHISH !</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
            I`m a 3rd year undergrad and very skillful front-end developer and
            passionate in problem solving.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:s-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] rounded-xl hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <a target="_blank" href="Resume.pdf">
                Download CV
              </a>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-[430px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[430px]">
          <Image
            priority={true}
            src={ashish}
            alt="ashish"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
