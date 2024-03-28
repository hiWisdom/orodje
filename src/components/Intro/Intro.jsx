import React, { useContext } from "react";


// Fullstack Software Developer with professional level of experience in web designing, developement, and deployment
// , producting the Quality work


// import {useTypewriter, Cursor} from "react-simple-typewriter";
import TypeWriterEffect from 'react-typewriter-effect';
// import Typed from "react-typed";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
// import Instagram from "../../img/instagram.png";
// import Whatsapp from "../../img/Whatsapp.png";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFacebook, faInstagram, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons"


import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const {text} = useTypewriter({
  //   words: ['Fullstack Software Developer', 'with professional level of experience in web designing', 'developement, and deployment, producting the Quality work'], 
  //   loop: {}, 
  //   typeSpeed: 120,
  //   delaySpeed: 80,
  // });

  return (
    <div className="Intro" id="Intro" style={{zIndex: "-1"}}>
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Orodje Akpotor</span> 
          
          <span style={{fontWeight: "bold", color: "green"}} className="animated-typing">
            {/* {text} */}

            {/* <Typed
              strings={[
                "Fullstack",
                "Mernstack",
                "Game stack",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            /> */}

            <TypeWriterEffect
                    textStyle={{
                      fontFamily: 'Red Hat Display',
                      color: '#3F3D56',
                      fontWeight: "bolder",
                    }}
                    startDelay={2000}
                    cursorColor="gold"
                    multiText={[
                      'A Fullstack Software Developer developing Sophisticated Website Presentation.',
                      'A Fullstack Software Developer developing Sophisticated Web application.',
                      'A Fullstack Software Developer developing Sophisticated Mobile application.',
                      'A Fullstack Software Developer developing Sophisticated Enterprise Resource Planning System.',
                      'A Fullstack Software Developer developing WordPress Experience.',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={50}
                  />

          </span>
          {/* <span style={{color: "red"}}>
            <Cursor cursorStyle="<"/>
          </span> */}
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        {/* <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faWhatsapp}/> */}
          {/* <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" /> */}
          {/* <img src={Whatsapp} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Fullstack " text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="World-class" text2="Web solutions" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
