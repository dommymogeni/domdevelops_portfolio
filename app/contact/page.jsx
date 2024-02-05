
import ContactForm from "@/components/ContactForm";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";


export default function ContactHome() {
  return (
    <section>
      <div className="container mx-auto">
        {/**  contact information section  */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="  w-[30px] h-[2px] bg-primary "></span>
              Say hello
            </div>

            <h1 className="h1 max-w-md mb-8">Let’s work together</h1>
            <p className="subtitle max-w-[480px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur reprehenderit ab veritatis labore nam ipsam
              exercitationem nesciunt. Ipsam, ab quo!
            </p>
          </div>

          <div className="hidden xl:flex w-full bg-contact_img bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/**  contact form section  */}
        <div className="grid  xl:grid-cols-2 mb-24 xl:mb-32 ">
          {/** contact details information */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon className="text-primary" size={18} />
              <div>dominicmogeni19998@gmail.com</div>
            </div>

            <div className="flex items-center gap-x-8">
              <HomeIcon className="text-primary" size={18} />
              <div>dominicmogeni19998@gmail.com</div>
            </div>

            <div className="flex items-center gap-x-8">
              <PhoneCall className="text-primary" size={18} />
              <div>+254796951136</div>
            </div>

          </div>

          {/** contact form to be filled */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
