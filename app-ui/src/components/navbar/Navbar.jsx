import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  useEffect(()=>{
    let inputtt = document.querySelector(".inputt")
    let btun = document.querySelector(".btun")
    inputtt.addEventListener("focus",()=>{btun.style.height = "50px";btun.style.top ="-2px";btun.style.width ="125px";})
    inputtt.addEventListener("blur",()=>{btun.style.height = "37px";btun.style.top ="0px";btun.style.width ="100px";})

  },[])
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 700 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Aman",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container relative">
        <div id="searchcont" className="absolute left-[50%] h-fit translate-x-[-50%]">
        <input type="text" className="inputt w-[300px] z-50 px-5 py-3 h-[35px] rounded-xl relative text-black" placeholder="Search Gig"></input>
        <button className="px-5 btun py-1 h-[37px] w-[100px] translate-x-[-20px] rounded-xl relative z-[100] bg-[#8256bc]">Search</button>

        </div>
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Gigमित्र</span>
          </Link>
          <span className="dot ">.</span>
        </div>
        <div className="links">
          <span>Courses</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
        </>
      )}
    </div>
  );
}

export default Navbar;
