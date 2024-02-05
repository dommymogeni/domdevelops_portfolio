import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustifyIcon } from "lucide-react";
import Nav from "./Nav";
import Socials from "./Socials";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <Sheet>
      {/** trigger for opening and closing the dialog */}
      <SheetTrigger asChild>
        <AlignJustifyIcon className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent>
        <div className="">
          <div className="">
            <Logo />
            <Nav containerStyles='flex flex-col gap-y-6' linkedStyles='text-xl capitalize' />
            <Socials />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
