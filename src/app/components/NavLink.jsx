import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] dark:text-[#6B7280] sm:text-xl rounded md:p-0 hover:text-black dark:hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;