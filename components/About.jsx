import Link from "next/link";
import React from "react";

const About = () => {
    return (
        <section className="xl:pt-[clamp(5em,21vh,12em)] xl:pb-[clamp(5em,21vh,12em)] px-12">
            <div className="container mx-auto pl-[calc(clamp(2.5em,2vw,8em)*2)] pr-[calc(clamp(2.5em,2vw,8em)*2)]">
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="w-[100%] md:w-[60%] pr-[clamp(1.5em,4vw,2.5em)]">
                        <h4 className="text-[clamp(1.55em,2.3vw,2.5em)] font-[450px] leading-[1.45] not-italic text-justify">
                            Helping brands to stand out in the digital era. Together we will
                            set the new status quo. No nonsense, always on the cutting edge.
                        </h4>
                    </div>

                    <div className="pt-[6vh] md:pt-0  w-[100%] md:w-[40%] flex flex-col items-end md:block pl-[clamp(1.5em,4vw,2.5em)]">
                        <div className="">
                            <p className="text-justify mb-[4em]">
                                The combination of my passion for design, code & interaction
                                positions me in a unique place in the web design world.
                            </p>
                        </div>

                        <div className="">
                            <Link
                                href='/about'
                                className="
                                    w-[clamp(9em,12vw,11em)]
                                    h-[clamp(9em,12vw,11em)]
                                    flex
                                    items-center
                                    justify-center
                                    bg-primary
                                    text-white
                                    rounded-[50%]
                                    cursor-pointer
                                    font-[1em]
                                    overflow-hidden
                                "
                            >
                                About Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
