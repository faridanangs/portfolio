// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import backProject from "./../../../images/background.webp";
import profilProject from "./../../../images/profile.webp";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

export default function Project() {
  return (
    <section className="px-5 pt-5 bg-[#eeeeeec9] w-full h-screen overflow-auto
    lg:flex
    
    ">
      <h1 className="font-bold font-hebo
        md:text-[3rem]
        lg:text-[1.5rem]
        xl:text-[2rem]
      ">Project</h1>
      <div className="mt-5 flex justify-center mx-auto
        md:gap-6
        lg:h-[18.2rem]
        lg:mt-[7rem]
        xl:h-[24rem]
        ">
        <ProjectWeb />
      </div>
      <div className="mt-8 flex flex-col justify-center items-center
        md:mt-10
        lg:justify-start

      ">
        <h1 className="font-bold font-hebo text-center text-2xl mb-1
          md:text-[3rem] md:mb-6 md:mt-[4rem]
          lg:text-[2rem] lg:mb-6 lg:mt-4
          xl:text-[2.4rem]
        ">Response My Client</h1>
        <div className=" border-4 rounded-lg w-[17rem]
          md:w-[30rem]
          lg:w-[20rem]
          xl:w-[27rem]
          
        ">
          <Response />
        </div>
      </div>
    </section>
  );
}

function ProjectWeb() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      loop={true}
      scrollbar={{draggable: true}}
      className="md:w-[40rem] lg:w-[35rem]"
    >
      <SwiperSlide>
        <Content img={profilProject} />
      </SwiperSlide>
      <SwiperSlide>
        <Content img={backProject} />
      </SwiperSlide>
      <SwiperSlide>
        <Content img={profilProject} />
      </SwiperSlide>
      <SwiperSlide>
        <Content img={backProject} />
      </SwiperSlide>
      <SwiperSlide>
        <Content img={profilProject} />
      </SwiperSlide>
      <SwiperSlide>
        <Content img={backProject} />
      </SwiperSlide>
      <SwiperSlide>
        <Content img={profilProject} />
      </SwiperSlide>
      <SwiperSlide>
        <Content img={backProject} />
      </SwiperSlide>
    </Swiper>
  );
}

function Content({ img }) {
  return (
    <section>
      <div className="rounded-md border-[5px] border-[#929292] mb-1 overflow-hidden 
        
      ">
        <div id="content" className="relative">
          <img className="h-[13rem] w-full bg-cover bg-center bg-no-repeat
            md:h-[20rem]
            lg:h-[17rem]
            xl:h-[23rem]
          " src={img} alt="" />

          <div id="text" className="absolute flex text-[#ebebeb] justify-between items-center w-full font-mono font-bold bottom-2 px-5

          ">
            <button className="border-2 border-[#cececede] py-1 px-3 rounded-lg bg-[#686868]
              md:text-3xl
              lg:text-sm
              xl:text-2xl
              ">Detail</button>
            <button
            className="border-2 before:bg-[red] bg-[#686868] border-[#cececede] py-1 px-3 rounded-lg
            md:text-3xl
            lg:text-sm
            xl:text-2xl
            ">Show More</button>
          </div>
        </div>
      </div>
    </section>
  );
}


function Response() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{clickable: true}}
      className="lg:h-[10rem] xl:h-[15rem]"
    >
      <SwiperSlide>
        <ContentRespone img={profilProject} name='Farid anang' star={<AiOutlineStar/>}/>
      </SwiperSlide>
      <SwiperSlide>
        <ContentRespone img={profilProject} name='Diana milda' star={<AiFillStar/>}/>
      </SwiperSlide>
      <SwiperSlide>
        <ContentRespone img={profilProject} name='Diana milda' star={<AiFillStar/>}/>
      </SwiperSlide>
      <SwiperSlide>
        <ContentRespone img={profilProject} name='Diana milda' star={<AiFillStar/>}/>
      </SwiperSlide>
    </Swiper>
  );
}

function ContentRespone({img, name, star}){
  return(
    <section>
      <div className=" m-1 
        flex items-center relative mb-2

      ">
        <img src={img} className=" w-[9rem] 
          md:w-[15rem]
          lg:w-[8rem]
          xl:w-[13rem]
        " alt="" />
        <div className="absolute top-0 right-0 w-[8rem] p-2
          md:w-[15rem] md:h-full md:flex md:flex-col
          md:items-start md:justify-center
          lg:w-[12rem]
          xl:w-[16rem]
        ">
          <h2 className="text-xl
            md:text-[2.5rem] md:mb-3
            lg:text-[1.3rem] lg:mb-0
            xl:text-[2rem] xl:mb-0
          ">{name}</h2>
          <div className="flex my-1
            md:my-2 md:text-3xl
            lg:my-1 lg:text-sm
            xl:my-2 xl:text-xl
          ">
            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />{star}
          </div>
          <h2 className="flex items-center
            md:text-3xl md:mb-1
            lg:text-sm lg:mb-1
            xl:text-2xl xl:mb-1
          ">Project: <a href="#" className="ml-1"><CgWebsite /></a></h2>
          <a href="#" className=" flex justify-center bg-[#686868] text-white border-2 border-[#a0a0a0d8] px-2 rounded-lg mt-2 
           md:text-4xl md:p-2
           lg:text-sm lg:px-1 lg:py-0
           xl:text-3xl xl:px-2 xl:py-1
          ">contact</a>
        </div>
      </div>
    </section>
  )
}