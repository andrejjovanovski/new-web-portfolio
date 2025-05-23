import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import {Fragment} from "react";

const testimonials = [
  {
    name: "Nenad",
    position: "CEO @ Cokolend",
    text: "Before working with Andrej, our order processing was a mess of spreadsheets and manual follow-ups. Now, our entire workflow is centralized and automated—from shop order to production tracking. We've saved hours each day and reduced errors dramatically.",
    avatar: memojiAvatar1,
  },
  {
    name: "Stefan",
    position: "Marketing agent @ MHRA",
    text: "Working with Andrej was a pleasure. His expertise in frontend and backend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Sara",
    position: "Production Manager @ Cokolend",
    text: "Our custom production requests used to get lost or delayed. Since implementing the system [Your Name] built, every order is tracked, visible, and on schedule. We can’t imagine going back.",
    avatar: memojiAvatar4,
  },
  {
    name: "Denis",
    position: "Instructor @ Brainster",
    text: "Andrej showed excellent communication skills and a keen eye for detail. He was able to understand our needs and provide a solution that was both practical and effective.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader title={"What clients say about me"} eyebrow={"Happy clients"}
                       description={"Real talk from awesome clients—because bragging is better when someone else does it for you!"}/>
        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip [mask:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div
                        className="size-14 bg-gray-700 rounded-full flex-shrink-0  inline-flex items-center justify-center">
                        <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full"/>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
