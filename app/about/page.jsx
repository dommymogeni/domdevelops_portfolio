import DevImage from "@/components/DevImage";
import Services from "@/components/Services";
import Image from "next/image";
import bgbrown from '../../public/images/bgbrown.png'
import Cta from "@/components/Cta";

export default function AboutHome() {
  return (
    <main>
      <section className="py-12 xl:py-24 xl:pt-28">
        {/**  div that carries the whole about me page */}
        <div className="container mx-auto">
          <div className="">
            {/** introduction part */}
            <div className="px-11 pb-16 xl:pb-32">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-center font-semibold">
                Helping client brands to thrive in the evolving digital world
              </h1>
            </div>

            {/** picture and text part of the introduction */}
            <div className="flex flex-col md:flex-row gap-y-8 gap-x-12  pb-16 xl:pb-32">
              <div className="w-full lg:w-[35%]">
                <p className="text-base xl:text-lg">
                  I help companies from all over the world with tailor-made
                  solutions. With each project, I push my work to new horizons,
                  always putting quality first.
                </p>
              </div>

              <div className="w-full lg:w-[65%]">
                <div className="relative h-[105vh]">
                  <Image
                    src={bgbrown}
                    alt="developer"
                    fill
                    sizes="(min-width:808px) 50vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            {/** services that i help with */}
            <div>
              <h2 className="h2 mb-8">I can help you with ...</h2>

              <div className="flex flex-col  gap-y-8 gap-x-12 lg:flex-row">
                <div>
                  <h4 className="hidden sm:block text-primary mb-4">01</h4>
                  <div className="hidden sm:block h-[3px] w-full bg-primary/40 mb-4"></div>
                  <h3 className="h3 mb-6">App Design </h3>
                  <p>
                    crafting user-friendly design interfaces, functionality
                    optimization and evaluating experiences for seamless,
                    impactful app interaction and navigation
                  </p>
                </div>

                <div>
                  <h4 className="hidden sm:block text-primary mb-4">02</h4>
                  <div className="h-[3px] w-full bg-primary/40 mb-4"></div>
                  <h3 className="h3 mb-6"> App Development </h3>
                  <p>
                    Building cutting-edge applications that are tailored to
                    client specificaitoins and needs ensuring scalability,
                    security and optimal user experience
                  </p>
                </div>

                <div>
                  <h4 className="hidden sm:block text-primary mb-4">03</h4>
                  <div className="h-[3px] w-full bg-primary/40 mb-4"></div>
                  <h3 className="h3 mb-6"> design </h3>
                  <p>
                    Providing an active support, updates bug fixations and also
                    enhancements for a smooth operation and a quality user
                    satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/** awards that i have recived */}
            <div></div>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
