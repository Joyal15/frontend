import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
// import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import Faq from "../../components/Faqs/Faq";


function Home() {
  
    const videoref = useRef()
    const circ = useRef()

  const handlemute = () => {
    videoref.current.muted =!videoref.current.muted;
    setadio(adio => !adio)
  }
  const handlecout = (dets) => {
    circ.current.style.opacity = 1
    circ.current.style.left = dets.screenX+"px"
    circ.current.style.top = dets.screenY-400+"px"
  }
  const hidctoun = () => {
    circ.current.style.opacity = 0
  }

 
  const [textx,settextx] = useState("Click to unmute")

  const[adio,setadio] =  useState(false) 
  useEffect(() => {
    setadio(!videoref.current.muted)

    adio?settextx(""):settextx("Click to unmute")

  },[handlemute])


  
  return (
    <div className="home relative">
      <Featured />
      {/* <TrustedBy /> */}
      {/* <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide> */}
      <div id="contvid" className="w-screen h-[200vh]">
      <div className="features sticky top-[50px] w-[100vw] h-screen  overflow-hidden viddabba">
        <div className="container w-full h-full relative ">
          <div className="item  w-full h-full relative">
            <div id="traitextcont" className="absolute  h-[150px]  translate-y-[0px] text-[#1B1212] tte right-0 top-[25%] translate-x-[100px]">
              <div id="traitextMaincont" className=" relative opacity-0 overflow-hidden translate-y-[0px]  flex flex-col items-end font-[fantasy] font-extrabold tte right-0   text-4xl">
                <div id="mainslider" className=" absolute h-[150px] w-[55vw] py-[20px] bg-green-500 "></div>
              <div id="traitext1" className="w-[68%] py-[20px] flex items-center z-50 opi  justify-center my-3 mx-[40px]">Browse and Select Freelancers Based on Ratings and Portfolios.</div>
             <div id="traitext1" className="w-[68%] py-[20px] flex items-center  z-50 opi justify-center my-3 mx-[40px]">Acess Courses to Enhance Freelancer's Skills and Knowledge.</div>
             <div id="traitext1" className="w-[68%] py-[20px] flex items-center  z-50 opi justify-center my-3 mx-[40px]">Secure Payments Through Escrow Account for Safe Transactions.</div>
              </div>
            </div>

            <div id="vidmain" className="relative top-[20%] ">
            <video ref={videoref} onMouseMove={handlecout} onClick={handlemute} onMouseLeave={hidctoun} className="vds absolute w-[75vw] rounded-3xl" autoPlay muted loop>
              <source  src="./img/videoss.mp4" type="video/mp4" />
            </video>
            <div id="ctoun" ref={circ} className={`left-0 top-0 w-fit h-fit min-h-[20px] opacity-0  translate-x-[-250px] min-w-[20px] ${adio ? "p":"px-[5px] py-[2px]"}  text-center  rounded-full bg-green-500 absolute`}>{textx}</div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
        <div id="carouselname" className="w-full h-[400px] overflow-hidden  flex items-start font-[fantasy] text-[200px] p-0 justify-center  text-white  absolute  top-[250vh] ">
          COURSES
        </div>
      <div className="explore w-screen  relative flex items-center justify-center h-[200px] ">
        <div className=" w-full  overflow-hidden text-white relative h-full flex">
          <div className="items anims  flex w-full items-center h-full justify-around">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
          <div className="items anims2 left-[100%]  absolute flex w-full items-center h-full justify-around">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item flex items-center justify-center flex-col">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <Faq/>    
    </div>
  );
}

export default Home;
