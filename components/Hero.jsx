import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import DevImage from "./DevImage";
import Badge from "./Badge";
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "@remixicon/react";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:pt-28 xl:h-[88vh]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col max-w-[600px]  justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase mb-4 font-semibold text-primary tracking-[4px]">
              web / mobile developer
            </div>
            <h1 className="h1">Hello, My name is Dominic.</h1>
            <p className="subtitle text-muted max-w-[490px] mx-auto xl:mx-0">
              I am passionate Full Stack Software Developer having experience in
              building Web and Mobile applications with JavaScript / Reactjs /
              Nodejs / React Native and some other cool libraries and
              frameworks.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/Contact">
                <Button className="gap-x-3">
                  Contact me <Send size={18} />
                </Button>
              </Link>

              <Button variant="secondary" className="gap-x-3">
                Download CV <Download size={18} />
              </Button>
            </div>
          </div>

          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[10%] -left-[18%]"
              icon={<RiBriefcase4Fill />}
              endCountUpNum={5}
              badgeText="Years Of Experience"
            />

            <Badge
              containerStyles="absolute top-[45%] -left-[36%]"
              icon={<RiTeamFill />}
              endCountUpNum={5}
              endCountUpTxt="K"
              badgeText="Happy Clients"
            />

            <Badge
              containerStyles="absolute top-[80%] -left-[25%]"
              icon={<RiBriefcase4Fill />}
              endCountUpNum={9}
              badgeText="Launched services"
            />

            <Badge
              containerStyles="absolute top-[55%] left-[65%]"
              icon={<RiTodoFill />}
              endCountUpNum={20}
              badgeText="Finished Projects"
            />

            <div className="bg-hero_shape4 w-[700px] h-[700px] absolute -top-[26%] -right-[2.25rem]"></div>
            <DevImage
              containerStyles={
                "w-[500px] h-[480px] bg-no-repeat relative bg-center"
              }
              imgSrc="/images/transparent.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
