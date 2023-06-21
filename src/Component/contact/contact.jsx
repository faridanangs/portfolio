import { FaUserAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-[#eeeeeec9] h-screen w-full px-5 py-3">
      <h1
        className=" font-hebo text-xl font-bold
                md:text-[2.5rem] md:mt-5
                lg:text-[1.5rem] lg:mt-1
            "
      >
        Contact Me
      </h1>

      <div
        className="w-[20rem] flex mx-auto flex-col items-center mt-5
                md:mt-[7rem] md:w-full
                lg:mt-[1rem] lg:w-full
            "
      >
        <div className="flex flex-col items-center p-4 md:p-8">
          <FaUserAlt className="text-[5rem] md:text-[8rem] lg:text-[4rem]" />
          <h1 className=" text-2xl font-hebo font-bold md:text-4xl lg:text-xl">Anangs</h1>
        </div>
        <div>
          <form
            className=" md:flex flex justify-center flex-col md:flex-col">
              <input
                type="text"
                required
                placeholder="name"
                
                className=" rounded-lg pl-1 outline-none p-1 border-2
                                  md:w-[35rem] md:h-[4rem] md:text-3xl md:py-6
                                  lg:w-[25rem] lg:h-[1rem] lg:text-xl lg:py-5
                                  "
                                  />
              <input
                type="text"
                required
                placeholder="email or phone"
                maxLength={25}
                
                className=" rounded-lg pl-1 outline-none p-1 border-2 my-1
                  md:w-[35rem] md:h-[4rem] md:text-3xl md:py-6
                  lg:w-[25rem] lg:h-[1rem] lg:text-xl lg:py-5
                              "
              />
            <textarea
              required
              placeholder="message"
              rows={5}
              cols={24}
              
              className=" outline-none rounded-lg pl-1 resize-none block
                            md:w-[35rem] md:text-3xl 
                            lg:w-[25rem] lg:text-xl 
                        "
            />
            <button
              type="submit"
              className=" border-2 px-2 rounded-lg mt-2 font-hebo bg-[#c7c5c5] 
                md:text-4xl md:w-[10rem]
                lg:text-xl lg:w-[5rem]
              "
              >Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
