"use client";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png"
import {
  PhpOriginal,
  Html5Original,
  Css3OriginalWordmark,
  LaravelOriginal,
  MysqlOriginal,
  JavascriptOriginal,
  JqueryOriginal,
  TailwindcssOriginal,
  ReactOriginal,
  GitOriginal,
  AlpinejsOriginal,

} from 'devicons-react';
import mapImage from "@/assets/images/map.png"
import memoji from "@/assets/images/memoji-smile.png"
import {CardHeader} from "@/components/CardHeader";
import {ToolboxItems} from "@/components/ToolboxItems";
import {motion} from "framer-motion";
import {useRef} from "react";


const toolboxItems = [
  {
    title: "PHP",
    iconType: PhpOriginal,
  },
  {
    title: "Laravel",
    iconType: LaravelOriginal,
  },
  {
    title: "SQL",
    iconType: MysqlOriginal,
  },
  {
    title: "JavaScript",
    iconType: JavascriptOriginal,
  },
  {
    title: "React",
    iconType: ReactOriginal,
  },
  {
    title: "jQuery",
    iconType: JqueryOriginal,
  },
  {
    title: "Alpinejs",
    iconType: AlpinejsOriginal,
  },
  {
    title: "GIT",
    iconType: GitOriginal,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindcssOriginal,
  },
  {
    title: "CSS3",
    iconType: Css3OriginalWordmark,
  },
  {
    title: "HTML5",
    iconType: Html5Original,
  },
]

const hobbies = [
  {
    title: "Photograpgy",
    emoji: "📷",
    left: "5%",
    top: "5%",
  },
  {
    title: "Ping Pong",
    emoji: "🏓",
    left: "50%",
    top: "5%",
  },
  {
    title: "Camping",
    emoji: "🏕️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fishing",
    emoji: "🎣",
    left: "10%",
    top: "35%",
  },
  {
    title: "Guitar",
    emoji: "🎸",
    left: "55%",
    top: "70%",
  },
  {
    title: "Swimming",
    emoji: "🏊",
    left: "3%",
    top: "70%",
  },
]

export const AboutSection = () => {
  const contraintRef = useRef(null);
  return (
    <div className="py-20" id="about">
      <div className="container">
        <SectionHeader title={"A Glimps Into My World"} eyebrow={"About Me"}
                       description={"Get to know my story, the passions that drive me, and the values that guide everything I do."}/>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title={"My reads"} descrpiton={"The books that fuel my perspective and passion."}/>
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover"/>
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader title={"My Toolbox"}
                          descrpiton={"Explore the tools and technologies I use to craft exeptional user experiences"}
                          className=""/>
              <ToolboxItems items={toolboxItems} className=""
                            itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <ToolboxItems items={toolboxItems} className="mt-6 md:mt-4"
                            itemsWrapperClassName={"-translate-x-1/2 animate-move-right [animation-duration:15s]"}/>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px]   flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title={"Beyond the Code"}
                          descrpiton={"Explore my intrests and hobbies beyond the digital ralm"}
                          className="px-6 py-6 md:px-10 md:py-8"/>
              <div className="relative flex-1" ref={contraintRef}>
                {hobbies.map((item) => (
                  <motion.div key={item.title}
                              className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                              style={{
                                left: item.left, top: item.top
                              }}
                              drag
                              dragConstraints={contraintRef}
                  >
                    <span className="font-medium text-gray-950">{item.title}</span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <div className={"h-[320px]"}>
                <Image src={mapImage} alt="Map cover" className="h-full w-full object-cover object-left-top"/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-fullafter:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full
              after:outline-gray-950/30">
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={memoji} alt="Memoji" className="size-20"/>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};
