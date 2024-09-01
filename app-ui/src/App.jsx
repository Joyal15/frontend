import Courses from "./pages/Courses/Courses";
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Faq from "./components/Faqs/Faq";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import "./App.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function App() {
  
   gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
      gsap.to('.uuiii', {
        scrollTrigger: {
          trigger: ".home",
          scrub: 0.1,
          start: "10% top",
          end: "bottom bottom",
      },
      height:70+"%"
      });
      gsap.to('#contvid', {
        scrollTrigger: {
          trigger: ".viddabba",
          scrub: 0.1,
          start: "-30% top",
          end: "bottom bottom",
      },
      backgroundColor:"#1B1212"
      });
      gsap.to('.vds', {
        scrollTrigger: {
          trigger: ".viddabba",
          scrub: 0.1,
          start: "-40% top",
          end: "bottom bottom",
      },
      position:"absolute",
      top:20+"%",
      left:20+"%",
      border:"2px solid rgb(58 16 120)",
      width:"60%"
      });
      gsap.to('#traitextMaincont  ', {
        scrollTrigger: {
          trigger: ".viddabba",
          scrub: 0.1,
          start: "-20% top",
          end: "bottom 95%",
          
      },
      opacity:1
      });
      gsap.to('#mainslider', {
        scrollTrigger: {
          trigger: ".viddabba",
          scrub: 0.1,
          start: "10%  top ",
          end: "60% top",
          
      },
      y:280,
      ease: "steps(2)",
    });
    gsap.to('#carouselname', {
      scrollTrigger: {
        trigger: ".viddabba",
        scrub: 0.1,
        start: "102% top",
        end: "120% top",
      },
      opacity:1,
      y:0
    });
    gsap.from('.faqtrans', {
      scrollTrigger: {
        trigger: "#faq",
        scrub: 0.1,
        start: "0% 50%",
        end: "30% 50%"
      },
      stagger:0.1+"s",
      opacity:0
    });
    gsap.from('.gallery-item', {
      y:100,
      duration:1,
      opacity:0
    });
        
    },[])

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Faq",
          element: <Faq />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/Courses",
          element: <Courses />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
