import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import {SectionHeader} from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow={"Real-World Results"} title={"Featured Projects"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing dolor sit amet\n" +
          "consectetur elit. Vel, tenetur."} />

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden after:content=[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20  after:pointer-events-none sticky" style={{
                top: `calc(64px + ${projectIndex * 40}px`
            }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg: gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 text-transparent bg-clip-text text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5  md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex items-center gap-2 text-sm md:text-base  text-white/50">
                        <CheckIcon className="size-5 md:size-6 " />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a>
                    <button className="bg-white text-gray-950 h-12 px-6 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Code</span>
                      <ArrowUpIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  ></Image>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
