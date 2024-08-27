import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
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
          scrub: true,
          start: "10% top",
          end: "bottom bottom",
      },
      height:70+"%"
      });
      gsap.to('#contvid', {
        scrollTrigger: {
          trigger: ".viddabba",
          scrub: true,
          start: "-30% top",
          end: "bottom bottom",
      },
      backgroundColor:"rgb(58 16 120)"
      });
      gsap.to('.vds', {
        scrollTrigger: {
          trigger: ".viddabba",
          scrub: true,
          start: "-40% top",
          end: "bottom bottom",
      },
      position:"absolute",
      top:0+"%",
      border:"1px solid black",
      width:"75vw"
      });
        
    },[])

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
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
