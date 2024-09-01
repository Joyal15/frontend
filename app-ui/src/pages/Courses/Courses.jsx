import React, { useEffect } from 'react'
import "./courses.css"

function Courses() {

    const [abool, setAbool] = React.useState(false);

    useEffect(() => {
        if (abool) {
            document.querySelectorAll(".gallery-item").forEach((q)=>{q.style.filter = "grayscale(1)"})
            document.querySelectorAll(".gallery-item").forEach((q)=>{q.addEventListener("mousemove",()=>{q.style.filter = "grayscale(0)";})})
            document.querySelectorAll(".gallery-item").forEach((q)=>{q.addEventListener("mouseleave",()=>{q.style.filter = "grayscale(1)"})})
        }else{

            document.querySelectorAll(".gallery-item").forEach((q)=>{q.style.filter = "grayscale(0)"})
        }
    }, [abool])
    
    useEffect(()=>{
        document.querySelectorAll(".gallery-item").forEach((q)=>{q.addEventListener("mouseenter",()=>{setAbool(true);})})
        document.querySelectorAll(".gallery-item").forEach((q)=>{q.addEventListener("mouseleave",()=>{setAbool(false);})})
    },[])



  return (
    <div class="coursesmain main w-screen h-[90.8vh]">
    <div class="gallery-item">
      <h3>Digital Marketing</h3>
      <a href="https://www.udemy.com/course/free-digital-marketing-basics-course/">
      <img
        src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?t=st=1724652652~exp=1724656252~hmac=23cdbb69dbef7d37066d5e4d45703a187980baa248109b77dc68870b4d390a77&w=740"
        alt="digital_markewting"
      
      />
      </a>
    </div>
    <div class="gallery-item">
      <h3>Web Development</h3>
      <a href="https://skillsbuild.org/students/course-catalog/web-development">
      <img
        src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1724653406~exp=1724657006~hmac=463a7dfd219057a8876c706cdfec5d0b061797678444da021f4997df9720ea1d&w=900"
        alt="web_development"
      />
      </a>
    </div>
    <div class="gallery-item">
      <h3>Human Resource Management</h3>
      <a href="https://www.upgrad.com/blog/hr-free-online-course-with-certification/">
      <img
        src="https://img.freepik.com/free-photo/woman-selecting-pictures-people_1134-466.jpg?t=st=1724653561~exp=1724657161~hmac=0fa7e687db24a0a34253e64067ef7005ff942c0f3d5ffbbc29497966d1f1fc38&w=900"
        alt="human_resource_management" 
      />
      </a>
    </div>
    <div class="gallery-item">
      <h3>Video Editing</h3>
      <a href="https://www.classcentral.com/subject/video-editing">
      <img
        src="https://img.freepik.com/free-photo/young-content-creator-girl-editing-video-her-laptop-working-from-home_1268-17373.jpg?t=st=1724653630~exp=1724657230~hmac=6449f72fb5213632cd22e1d9acfe49a7f478b0c0918f6da67fde6b4304308d24&w=1060"
        alt="video_editing"
      />
      </a>
    </div>
    <div class="gallery-item">
      <h3>Graphic-Designing</h3>
      <a href="https://www.udemy.com/course/graphic-design-intro/">
      <img
        src="https://img.freepik.com/premium-photo/rear-view-creative-designers-working-desk-using-digital-graphic-tablet-drawing-with-pen-modern-home-office_1241984-590.jpg?w=900"
        alt="graphic_designing"
      />
      </a>
    </div>
    <div class="gallery-item">
      <h3>Stock Market Trading</h3>
      <a href="https://www.gettogetherfinance.com/trading-in-the-zone-elementary?utm_source=Google&utm_medium=CPC&utm_campaign=NPD+%7C+Stock+Market+Course+%7C+31%2F08&gad_source=1&gclid=Cj0KCQjw_sq2BhCUARIsAIVqmQtjVvsfQAe3pLG7GP48slK27fCo-18UO6HfYm5EGqU3HF7mnZtk-20aAnhCEALw_wcB#faq_section">
      <img
        src="https://img.freepik.com/free-photo/financial-data_53876-120032.jpg?t=st=1724653773~exp=1724657373~hmac=dc1173532c12b22af880dd8b3c09ec42039d4af67acd0df42c1914941380e89a&w=740"
        alt="stock_market_trading"
      />
      </a>
    </div>
    <div class="gallery-item">
      <h3>Product Management</h3>
      <a href="https://www.upgrad.com/introduction-to-product-management-free-course/">
      <img
        src="https://img.freepik.com/free-photo/online-marketing_53876-176744.jpg?t=st=1724653908~exp=1724657508~hmac=9b8b854eed364ab2879fb306be3c2f456c3bad38bb7daf7496d432eb848d5f73&w=900"
        alt="product_management"
      />
      </a>
    </div>
    <div class="gallery-item">
      <h3>Advanved Excel</h3>
      <a href="https://www.udemy.com/course/microsoft-excel-beginner-to-advanced-crash-course/">
      <img
        src="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?t=st=1724654118~exp=1724657718~hmac=f021498edd6ef01a9dc0ebb1d89f30fd656995d55258f16bc184198327fd4a7a&w=900"
        alt="advanced_excel"
      />
      </a>
    </div>
    <div class="gallery-item">
      <h3>WordPress</h3>
      <a href="https://www.udemy.com/course/wordpress-for-beginners-create-a-website-blog-step-by-step/?ranMID=39197&ranEAID=SAyYsTvLiGQ&ranSiteID=SAyYsTvLiGQ-VXxciohnoCDf5u4fyKHZGQ&LSNPUBID=SAyYsTvLiGQ&utm_source=aff-campaign&utm_medium=udemyads&couponCode=IND21PM">
      <img
        src="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1724654160~exp=1724657760~hmac=a1f4d772cca9610488f72b3404fd99e07fab67f6eba2c70a93f91e0fe0c3b4eb&w=900"
        alt="word_press"
      />
      </a>
    </div>

    <div class="gallery-item">
      <h3>English Speaking</h3>
      <a href="https://www.learnvern.com/course/spoken-english-course">
      <img
        src="https://img.freepik.com/free-photo/front-view-woman-with-copy-space_23-2148489702.jpg?t=st=1724654332~exp=1724657932~hmac=f8bfef23de14032d9971ad74d48bf661e634b07c1ee0814964c5c4d2c09a726d&w=360"
        alt="english_speaking"
      />
      </a>
    </div>

    <div class="gallery-item">
      <h3>Business Communication Skills</h3>
      <a href="https://www.edubridgeindia.com/courses/Nzg1/mastering-in-business-communication">
      <img
        src="https://img.freepik.com/free-photo/people-practicing-social-integration-workspace_23-2149405409.jpg?t=st=1724654393~exp=1724657993~hmac=5e22f6a35805f860bc77ccf3ef5703d35dcecbb39c1f6c9bef3df1cd35bc45ea&w=900"
        alt="business_communication_skills"
      />
      </a>
    </div>
    <div class="gallery-item">
      <h3>Power BI</h3>
      <a href="https://www.boardinfinity.com/micro-learning/power-bi-for-data-science-course">
      <img
        src="https://img.freepik.com/premium-photo/analyst-working-data-analysis-bi-dashboard-computer-monitor-business-team-analyzing-financial-data-by-fintech-corporate-office-business-marketing-strategy-planning-trailblazing_960782-119248.jpg?w=826"
        alt="power_bi"
      />
      </a>
    </div>
  </div>
  )
}

export default Courses