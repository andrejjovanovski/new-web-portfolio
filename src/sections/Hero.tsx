import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* Orbit green rings */}
        <div className="hero-circles size-[620px]"></div>
        <div className="hero-circles size-[820px]"></div>
        <div className="hero-circles size-[1020px]"></div>
        <div className="hero-circles size-[1220px]"></div>

        {/* StarIcons */}
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300 " />
        </HeroOrbit>

        {/* orbit sparkle icons */}
        <HeroOrbit size={430} rotation={178} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/25 " />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={-10} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/35 " />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={80} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/35 " />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={178} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/35 " />
        </HeroOrbit>

        {/* orbit circle icons */}
        <HeroOrbit size={725} rotation={90} shouldOrbit orbitDuration="44s">
          <div className="size-3 bg-emerald-300/10 rounded-full " />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={10} shouldOrbit orbitDuration="42s">
          <div className="size-3 bg-emerald-300/10 rounded-full " />
        </HeroOrbit>
        <HeroOrbit size={675} rotation={5} shouldOrbit orbitDuration="40s">
          <div className="size-2 bg-emerald-300/10 rounded-full " />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-35} shouldOrbit orbitDuration="36s">
          <div className="size-2 bg-emerald-300/10 rounded-full " />
        </HeroOrbit>
      </div>

      {/* Hero content */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="boy peaking behind laptop"
          ></Image>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 inset-0 absolute rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-center text-3xl md:text-5xl mt-8 tracking-wide">
            Building Scalable & Efficient Software Solutions
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I build high-performance, scalable, and user-focused applications
            that drive business growth and innovation. With expertise in modern
            web technologies and a problem-solving mindset, I create efficient,
            reliable, and impactful software solutions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 h-12 px-6 rounded-xl">
            <ArrowDown className="size-4" />
            <span className="font-semibold">Explore my work</span>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 font-semibold h-12 px-6 rounded-xl">
            <span>👋</span>
            <span>Let's connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
