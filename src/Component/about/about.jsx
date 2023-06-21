import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai' ;   
import { FaFacebookF } from 'react-icons/fa' ;   
import ganteng from './../../../images/profile.webp'


export default function About(){
    return(
        <section>
            <div className=" px-5 pt-1 h-screen bg-[#e7e7e7c9] ">
            <p className='font-bold
                md:text-[3rem]
                lg:text-[1.4rem]
            '>about me</p>
                <div className=" mb-3 flex justify-start py-3">
                    <img className=" w-[200px] rounded-lg h-[200px]
                        md:w-[400px] md:h-[350px]
                        lg:w-[200px] lg:h-[170px]
                    " src={ganteng} alt="profil about" />
                </div>
                <div className=" font-hebo ">
                    <h1 className=" text-xl 
                        md:text-[3rem] md:my-4
                        lg:text-[1.4rem] lg:my-1
                        xl:text-[2.5rem] xl:my-3
                    ">My name's farid anang s</h1>
                    <h2 className=" text-lg mb-1
                        md:text-[2.5rem] md:mb-4
                        lg:text-[1.3rem] lg:mb-0
                        xl:text-[2rem] xl:mb-2
                    ">I'm a <span>Frontend developer</span></h2>
                    <p className='overflow-auto h-[10rem]
                        md:text-3xl md:w-[35rem] md:h-[15rem]
                        lg:text-lg lg:w-[35rem] lg:h-[9rem]
                        xl:text-2xl xl:w-[40rem] xl:h-full xl:overflow-hidden
                    '>
                        Hallo nama saya farid anang s.. saya lahir pada bulan mei 2006
                        saya tertarik belajar it pada saat saya melihat banyak berita yang
                        menyiarkan tentang it sehingga saya penasaran dan mulai mempelajarinya pada
                        bulan oktober 2022 dengan mempelajari bahasa python.
                        Saya mulai fokus mempelajari aplikasi web pada bulan maret 2023 dengan
                        mempelajar html css dan javascript.
                    </p>
                    <button className=" border-[#adadad] border rounded-lg p-1 my-3 hover:scale-[1.02]
                        md:text-3xl md:p-3 md:mt-4
                        lg:text-lg lg:px-1 lg:py-0 lg:mt-2
                        xl:text-3xl xl:px-3 xl:py-2 xl:mt-6
                    ">Download Cv</button>
                    <div className=" flex gap-3 md:gap-6 lg:gap-5 ">
                        <a href='https://instagram.com' className=" border-[#adadad] border p-1 text-[1rem] rounded-lg  
                            md:text-[2.5rem]
                            lg:text-[1rem]
                            xl:text-[2rem]
                        "><AiFillInstagram /></a>
                        <a href='https://instagram.com' className=" border-[#adadad] border p-1 text-[1rem] rounded-lg 
                            md:text-[2.5rem]
                            lg:text-[1rem]
                            xl:text-[2rem]
                        "><FaFacebookF /></a>
                        <a href='https://instagram.com' className=" border-[#adadad] border p-1 text-[1rem] rounded-lg  
                            md:text-[2.5rem]
                            lg:text-[1rem]
                            xl:text-[2rem]
                        "><AiOutlineTwitter /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}