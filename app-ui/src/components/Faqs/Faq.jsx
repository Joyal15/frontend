import React from 'react'
import "./faq.css"

export default function () {
  return (
    <div id="faq" className='w-[100vw] text-white relative h-[92vh] gap-5 bg-[#1B1212] nnn flex-col'>  
       <h2 className=' font-[fantasy] text-[30vw] opacity-40 faqtext absolute bottom-0'> <span className='faqtrans'>F</span><span className='faqtrans'>A</span><span className='faqtrans'>Q</span><span className='faqtrans'>s</span> </h2>
              <div className="qn">What is Gigमित्र ?
              <img width="48" height="48" className='absolute top-[20%] right-[2%] h-[20px] w-[20px]'  src="./img/add.png" alt="plus-math"/>
              <p className ="answer">Gigमित्र is a freelancing platform designed to facilitate seamless interactions between freelancers and clients. by providing a decentralized approach, Gigमित्र enhances the efficiency and professionalism of service transactions. It simplifies the process for clients by offering a structured environment for managing tasks and payments, ensuring a user-friendly experience for both parties.</p>
              </div>
              <div className="qn">How do I get started on Gigमित्र ?
              <img width="48" height="48" className='absolute top-[20%] right-[2%] h-[20px] w-[20px]'  src="./img/add.png" alt="plus-math"/>
              <p className ="answer">Gigमित्र is readily accessible via our website, where users can register as either clients or freelancers. Freelancers have the opportunity to showcase their portfolios and specify their areas of expertise. Whereas Clients can post tasks detailing the requirements and necessary skill sets to achieve their objectives.
              </p>
              </div>
              <div className="qn">Why to Choose Gigमित्र ?
              <img width="48" height="48" className='absolute top-[20%] right-[2%] h-[20px] w-[20px]'  src="./img/add.png" alt="plus-math"/>
              <p className ="answer">Gigमित्र offers a user-centric approach,ensuring safety in monetary transactions and maintaining transparency between the clients and freelancers. Additionally , it provides skill enhancement coourses for Freelancers and leverages Ai-powered sorting systems to ensure quality.</p>
              </div>
              <div className="qn">How do I create a gig or service listing ?
              <img width="48" height="48" className='absolute top-[20%] right-[2%] h-[20px] w-[20px]'  src="./img/add.png" alt="plus-math"/>
              <p className ="answer">Gigमित्र offers a diverse range of services, including editing, writing, and more, ensuring that the 
                if the possessed skills and objectives of freelancers align seamlessly with the needs and vision of clients.</p>
              </div>
              <div className="qn">How to access courses through Gigमित्र ?
              <img width="48" height="48" className='absolute top-[20%] right-[2%] h-[20px] w-[20px]'  src="./img/add.png" alt="plus-math"/>
              <p className ="answer">Users can conveniently access courses by selecting the "Courses" tab or by scrolling through the home screen and choosing their desired courses with a single click.</p>
              </div>
              <div className='qn'>How are payments handled on Gigमित्र ?
              <img width="48" height="48" className='absolute top-[20%] right-[2%] h-[20px] w-[20px]'  src="./img/add.png" alt="plus-math"/>
              <p className ="answer">In Gigमित्र, payments are securely processed through a payment gateway. Upon completion of the client's payment, the funds are held in an Escrow account. Once the freelancer completes the work and delivers it to the client, the payment is promptly released to the freelancer, ensuring a seamless and secure transaction process.
              </p>
              </div>
              <div className="qn">How is rating system based on Gigमित्र ?
              <img width="48" height="48" className='absolute top-[20%] right-[2%] h-[20px] w-[20px]'  src="./img/add.png" alt="plus-math"/>
              <p className ="answer">The rating system in Gigमित्र is a critical feature, allowing both clients and freelancers to provide feedback and reviews. These ratings and reviews are displayed on their profiles, offering transparency and insights. Additionally, the platform utilizes AI-based algorithms to prioritize freelancer profiles based on their ratings, enhancing visibility to clients, and similarly, optimizing client profiles for freelancers.
              </p>
              </div>
        </div>
  )
}
