import { FaHtml5, FaPython } from "react-icons/fa";
import { SiJavascript, SiCss3 } from "react-icons/si";

const skilsLol = [
  {
    id: 0,
    skil: <FaHtml5 />,
    judul: "html",
    text: "Saya mulai belajar html pada bulan oktober 2022",
    link: "https://www.w3schools.com/html/default.asp",
  },
  {
    id: 2,
    skil: <SiCss3 />,
    judul: "css",
    text: "Saya mulai belajar css pada bulan november 2022",
    link: "https://www.w3schools.com/css/default.asp",
  },
  {
    id: 4,
    skil: <FaPython />,
    judul: "python",
    text: "Saya mulai belajar python pada bulan desember 2023",
    link: "https://www.w3schools.com/python/default.asp",
  },
  {
    id: 3,
    judul: "javascript",
    skil: <SiJavascript />,
    text: "Saya mulai belajar javascript pada bulan maret 2023",
    link: "https://www.w3schools.com/js/default.asp",
  },
];

export default function Skils() {
  return (
    <section className="px-5 pt-2 font-medium w-full overflow-auto bg-[#eeeeeec9] h-screen md:pt-6">
      <h1
        className="font-hebo font-bold text-xl
        md:text-[3rem]
        lg:text-[1.8rem]
      "
      >
        Skills{" "}
      </h1>
      <div className="mt-2 md:mt-[5rem] lg:mt-[2rem]">
        <h1 className="text-xl md:text-[3rem] lg:text-[1.7rem]">This is my skills</h1>
        <div className="md:flex md:flex-wrap  md:justify-between">
          {skilsLol.map((e) => {
            return (
              <div
                key={e.id}
                className=" border-2 border-[#dadada]  rounded-lg p-2 flex gap-2 m-1 justify-center items-center
                  md:w-[22rem] md:mt-5 md:block
                  lg:w-[17rem]
                  xl:w-[20rem]
              ">
                <div className=" mr-2 flex flex-col items-center
                    
                    ">
                  <div className=" text-[4rem] md:text-[6rem] xl:text-[6rem] lg:text-[4rem]">{e.skil}</div>
                  <p className=" text-[1.1rem] md:text-[2rem] xl:text-[2rem] lg:text-[1.6rem] ">{e.judul}</p>
                </div>

                <div className="px-1 flex flex-col md:text-center md:items-center xl:text-center">
                  <p className="
                    md:text-4xl
                    lg:text-lg
                    xl:text-2xl
                  ">{e.text}</p> 
                  <a href={e.link}
                    className=" border-2 px-2 rounded-lg block text-center mt-2 font-hebo bg-[#c7c5c5] 
                    md:text-4xl md:w-[15rem]
                    lg:text-xl lg:w-[10rem] "
                  >Learn Now</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
