import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";


const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkedStyles, underlineStyles }) => {
  const pathName = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${linkedStyles}`}>
            {link.path === pathName && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underlineStyles"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav