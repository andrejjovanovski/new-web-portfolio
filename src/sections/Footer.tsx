import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/andrej-jovanovski-20b7231ab/ß",
  }, {
    title: "Github ",
    href: "https://github.com/andrejjovanovski",
  },{
    title: "Resume ",
    href: "https://drive.google.com/file/d/1IPxbSNQWFLTwhrBjJ46nilJS2jGCvDDJ/view?usp=sharing",
  },
]

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 "></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between  items-center ga`p-8">
          <div className="text-white/40">&copy; 2025 All rights reserved</div>
          <nav className="flex items-center flex-col md:flex-row gap-8 z-10">
            {footerLinks.map((link) => (
              <a href={link.href} target="_blank" key={link.title} className="inline-flex items-center gap-1.5 z-50">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
