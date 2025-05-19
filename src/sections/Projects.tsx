import cokolendMonitor from "@/assets/images/asdasd.png"
import mhra from "@/assets/images/mhra.png";
import library from "@/assets/images/libraryMonitor.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import {SectionHeader} from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Cokolend",
    year: "2024",
    title: "Shop-to-Production System",
    results: [
      { title: "Cut delivery scheduling delays by 50%" },
      { title: "Increased order accuracy by 35%" },
      { title: "Streamlined order processing by 40%" },
    ],
    link: "https://github.com/andrejjovanovski/cokolend-app",
    image: cokolendMonitor,
  },
  {
    company: "MHRA",
    year: "2024",
    title: "Content Management System",
    results: [
      { title: "Dynamic website content" },
      { title: "Simplified event scheduling by 30%" },
      { title: "Easier content management" },
    ],
    link: "https://git.brainster.co/Andrej.Jovanovski-FS15/brainsterprojects_andrejjovanovskifs15/-/tree/project03",
    image: mhra,
  },
  {
    company: "Brasinter",
    year: "2024",
    title: "Brainster Library",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/andrejjovanovski/brainster-library",
    image: library,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow={"Real-World Results"} title={"Featured Projects"} description={"A curated collection of web development projects demonstrating responsive design, clean code, and real-world functionality."} />

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
