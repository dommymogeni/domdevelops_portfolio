"use client"
import { Button } from "./ui/button"
import { Form } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User,MailIcon,ArrowRightIcon,MessageSquare } from "lucide-react"



const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="your name" />
        <User className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="your email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Textarea id="mailMessage" placeholder="type your message in here" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <Button className='flex items-center max-w-[166px] gap-x-1'>
        Let's talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}

export default ContactForm