import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-30" id="contact">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{
            backgroundImage: `url(${grainImage})`,
          }}></div>
          <div className="flex flex-col items-center lg:justify-between md:flex-row gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let's create something amaezing together</h2>
              <p className="text-sm md:text-base mt-2">"Your dream project won’t build itself — let’s make it happen!"</p>
            </div>
            <div>
              <a className="text-white bg-gray-900 border border-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max" href={`mailto:andrejjovanovki17@gmail.com}`}>
                <span className="font-semibold">Contact me</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
