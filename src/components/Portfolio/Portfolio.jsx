import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Timobhealth from "../../img/Timob-health.png";
import Hhf from "../../img/hhf.png";
import Hernalytics from "../../img/hernalytics.png";
import Acmen from "../../img/acmen.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projects Portfolio</span>
      <span>Discover My References</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="portfolio-card">
          <img src={Timobhealth} alt="Timob Health International Official Website Application" />

          <div className="portfolio-card-content">

          <button className="portfolio-card-category">Website </button>

          <p className="portfolio-card-title" style={{ color: darkMode ? "black" : "" }}>Timob Health International</p>

            <p className="portfolio-card-description" style={{ color: darkMode ? "black" : "" }}><b>Project Details:</b> “This web platform is for doctor's and patient's to meet each others and find solutions for patient. The project conception and development is impressive and the cooperation trustworthy!”
            </p>
            
          <button className="portfolio-card-readmore">Read more</button>
          </div>
        </SwiperSlide>

        
        <SwiperSlide className="portfolio-card">
          <img src={Hhf} alt="Healthy Harvester Farms Official Website Application" />

          <div className="portfolio-card-content">

          <button className="portfolio-card-category">Website </button>

          <p className="portfolio-card-title" style={{ color: darkMode ? "black" : "" }}>Healthy Harvester Farms</p>

            <p className="portfolio-card-description" style={{ color: darkMode ? "black" : "" }}><b>Project Details:</b> “Business Website for farm produces own by the farming company.”
            </p>
            
          <button className="portfolio-card-readmore">Read more</button>
          </div>
        </SwiperSlide>

        

        <SwiperSlide className="portfolio-card">
          <img src={Acmen} alt="Acmen Official Website Application" />

          <div className="portfolio-card-content">

          <button className="portfolio-card-category">Website </button>

          <p className="portfolio-card-title" style={{ color: darkMode ? "black" : "" }}>Acmen Royalthy </p>

            <p className="portfolio-card-description" style={{ color: darkMode ? "black" : "" }}><b>Project Details:</b> “Real estate, consulting firm for agriculture, house and estate management. Information to call the contact center for more available services discussion.
            </p>
            
          <button className="portfolio-card-readmore">Read more</button>
          </div>
        </SwiperSlide>

        

        <SwiperSlide className="portfolio-card">
          <img src={Hernalytics} alt="Timob Health International Official Website Application" />

          <div className="portfolio-card-content">

          <button className="portfolio-card-category">Website </button>

          <p className="portfolio-card-title" style={{ color: darkMode ? "black" : "" }}>Hernalytics</p>

            <p className="portfolio-card-description" style={{ color: darkMode ? "black" : "" }}><b>Project Details:</b> “This web platform is for national analytics management in Nigeria south, east, north and west region!”
            </p>
            
          <button className="portfolio-card-readmore">Read more</button>
          </div>
        </SwiperSlide>

        


      </Swiper>
    </div>
  );
};

export default Portfolio;
