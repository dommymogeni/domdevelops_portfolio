"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

//import { } from fs


export default async function ProjectstHome() {
  //const file = await fs.readFile(process.cwd()+'/data/projects.json','utf8')
  return (
    <main>
      <section className="sm:mt-14 pb-4 container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200">
            Projects worked on
          </h1>

          <p>
            I've developed diverse software solutions that ranges from intuitive
            mobile applications to robust web applications, emphasizing
            innovation, user experience, and overally considering efficient
            functionality. These projects showcase my versatility and expertise
            in different technological stacks.
          </p>

          <div className="relative max-w-3xl px-4 mx-auto mt-10 sm:px-6"></div>
        </div>
      </section>

      <section className="sm:mt-14 pb-4 container mx-auto">
        <div className="flex flex-row flex-wrap items-center justify-between">
          <div className="lg:w-1/3 sm:w-1/2">
            <div className="sm:w-52">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex justify-between w-full py-4"
                    variant="outline"
                  >
                    Open
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="min-w-[13rem]">
                  <DropdownMenuItem>Popular</DropdownMenuItem>
                  <DropdownMenuItem>Newest</DropdownMenuItem>
                  <DropdownMenuItem>Oldest</DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>Free</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="w-full pt-4 lg:pt-0 mt-4 lg:mt-0 border-t lg:border-none border-gray-200  lg:w-1/3 order-last lg:order-none">
            {/** front end, back end and full stack */}
          </div>

          <div className="lg:w-1/3 sm:w-1/2">
            <div className="sm:w-52 ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex justify-between w-full py-4"
                    variant="outline"
                  >
                    Open
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="min-w-[13rem]">
                  <DropdownMenuItem>Popular</DropdownMenuItem>
                  <DropdownMenuItem>Newest</DropdownMenuItem>
                  <DropdownMenuItem>Oldest</DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>Free</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20">
        <div></div>
        <div></div>
      </section>
    </main>
  );
}
