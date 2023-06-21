import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineProject } from "react-icons/ai";
import { RiToolsFill } from "react-icons/ri";
import { MdOutlineContactMail } from "react-icons/md";

export default function Header() {
  return (
    <div>
      <div className=" fixed z-10 flex p-3 w-full bottom-0 justify-center gap-5
        md:p-5 md:justify-evenly lg:justify-center
      ">
        <Link to={"/"}>
          <BiHomeAlt className="text-[2.3em] text-[#000000] font-bold bg-[rgb(255,255,255)] block p-1 rounded-lg
            md:text-[4rem]
            lg:text-[2rem]
            xl:text-[2.5rem]
          "/>
        </Link>
        <Link to={"/about"}>
          <CgProfile className="text-[2.3em] text-[#000000] font-bold bg-[rgb(255,255,255)] block p-1 rounded-lg
            md:text-[4rem]
            lg:text-[2rem]
            xl:text-[2.5rem]
          "/>
        </Link>
        <Link to={"/project"}>
          <AiOutlineProject className="text-[2.3em] text-[#000000] font-bold bg-[rgb(255,255,255)] block p-1 rounded-lg
            md:text-[4rem]
            lg:text-[2rem]
            xl:text-[2.5rem]
          "/>
        </Link>
        <Link to={"/skills"}>
          <RiToolsFill className="text-[2.3em] text-[#000000] font-bold bg-[rgb(255,255,255)] block p-1 rounded-lg
            md:text-[4rem]
            lg:text-[2rem]
            xl:text-[2.5rem]
          "/>
        </Link>
        <Link to={"/contact"}>
          <MdOutlineContactMail className="text-[2.3em] text-[#000000] font-bold bg-[rgb(255,255,255)] block p-1 rounded-lg
            md:text-[4rem]
            lg:text-[2rem]
            xl:text-[2.5rem]
          "/>
        </Link>
      </div>
    </div>
  );
}
