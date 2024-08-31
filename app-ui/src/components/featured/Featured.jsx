import React from "react";
import "./Featured.scss";

function Featured() {

  // let sld1 = document.querySelector("#slidess1").style.display="none";

  let sld1, sld2,sld3
  setTimeout(function () {
    sld1 = document.querySelector("#slidess1")
    sld2 = document.querySelector("#sld2main")
    sld3 = document.querySelector("#sld3main")
  },100)

  setInterval(function () {
    setTimeout(function () { 
      
      sld1.style.left = "-100%";
      sld2.style.left = "0";
    },4000) 
    setTimeout(function () { 
      
      sld1.style.top = "1000%";
      sld2.style.left = "-100%";


      sld3.style.left = "0";
      
    },9000) 
    setTimeout(function () { 
      sld1.style.left = "100%";
      
    },9500) 
    setTimeout(function () { 
      sld1.style.top = "0%";
      sld2.style.top = "1000%";
      sld2.style.left = "100%";
      
    },10000) 
    setTimeout(function () { 
      
      sld3.style.left = "-100%";

      sld1.style.left = "0";
      sld2.style.top = "0%";

      
    },14000) 
    setTimeout(function () { 
      sld3.style.top = "1000%";
    },15000) 
    setTimeout(function () { 
      sld3.style.left = "100%"; 
    },16000) 
    setTimeout(function () { 
      sld3.style.top = "0";      
   
    },17000) 
    

  },14000)

  function fncn(){



    setTimeout(function () { 
      
      sld1.style.left = "-100%";
      sld2.style.left = "0";
    },5000) 
    setTimeout(function () { 
      
      sld1.style.top = "100%";
      sld1.style.left = "100%";
      sld2.style.left = "-100%";
      sld3.style.left = "0";
      
    },9000) 
    setTimeout(function () { 
      sld1.style.top = "0%";
      sld2.style.top = "100%";
      sld2.style.left = "100%";
      
    },10000) 
    setTimeout(function () { 
      
      sld3.style.left = "-100%";
      sld1.style.left = "0";
      sld2.style.top = "0%";
      
    },14000) 
    setTimeout(function () { 
      sld3.style.top = "100%";
      sld3.style.left = "100%"; 
    },15000) 
    setTimeout(function () { 
      sld3.style.top = "0";      
    },16000) 
  
  }
  fncn()
    
  return (
    <div className="featured  flex items-start justify-center bg-[#3A1078] w-[100vw] p-0 m-0 h-[70vh]" >
      <div className="container uuiii z-50 relative  overflow-hidden  h-full w-full  flex ">
        <div id="slidess1"  className=" slds  left-0 h-full w-full relative ">
        <div className="left-[8%] left top-1/2 translate-y-[-50%] text-7xl absolute w-1/2">
          <h1>
            Find the perfect <span>freelance</span> services for your <span>Business</span>
          </h1>
        </div>
        <div className="absolute right-0 w-1/2">
          <img className="w-[1200px] iioo" src="./img/newman.png" alt="" />
        </div>
        </div>
        <div id="sld2main" className="slds absolute w-full h-full left-[100%]">
        <div id="slidess2" className="h-full w-full relative ">
        <div className="left-[8%] left top-1/2 translate-y-[-50%] text-7xl absolute w-1/2">
          <h1>
            Save Time by <span>Rating</span> Based <span>Freelance</span> Recommendations
          </h1>
        </div>
        <div className="absolute right-0 w-1/2">
          <img className="w-[2000px] iioo " src="./img/redman.png" alt="" />
        </div>
        </div>
        </div>
        <div id="sld3main" className="slds   absolute w-full h-full left-[100%]">
        <div id="slidess3" className="h-full w-full relative ">
        <div className="left-[8%] left top-1/2 translate-y-[-50%] text-7xl absolute w-1/2">
          <h1>
            Fills the Gap Between <span>Freelancer</span> and <span>Client</span>
          </h1>
        </div>
        <div className="absolute right-0 w-1/2">
          <img className="w-[1200px] iioo" src="./img/greyman.png" alt="" />
        </div>
        </div>
        </div>



      </div>
    </div>
  );
}

export default Featured;
