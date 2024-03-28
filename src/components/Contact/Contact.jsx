import React, { useContext, useState, useEffect } from "react";
import "./Contact.css";
// import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const form = useRef();
  const [done, setDone] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_2mu5xtl",
  //       "template_m5udu2c",
  //       form.current,
  //       "VLwg1ltOWvnCYAiK_"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //         form.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  useEffect(() => {
    setTimeout(function(){
        setMsg("");
    }, 15000);
}, [msg]);

  const handleInputChange = (e, type) => {
    switch(type){
        case "name":
            setError("");
            setName(e.target.value);
            if(e.target.value === ""){
                setError("Fullname has left blank!");
            }
            break;
        case "email":
            setError("");
            setEmail(e.target.value);
            if(e.target.value === ""){
                setError("Email has left blank!");
            }
            break;
        case "telephone":
            setError("");
            setTelephone(e.target.value);
            if(e.target.value === ""){
                setError("Telephone has left blank!");
            }
            break;
        case "message":
            setError("");
            setMessage(e.target.value);
            if(e.target.value === ""){
              setError("Message has left blank!");
          }
          break;
        default:
    }
}

  function handleSubmit(){
    if(name !== "" && email !== "" && telephone !== "" && message !== ""){
        var url = "http://localhost/API/THI/registration.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            name: name,
            email: email,
            telephone: telephone,
            message: message
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setMsg(response[0].result);
        }).catch((err) =>{
            setError(err);
            console.log(err);
        });
        setName("");
        setEmail("");
        setTelephone("");
        setMessage("");
        setMsg("");
    }
    else{
        setError("All fields are required!");
    }
}








  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Know and Keep in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        {/* <form ref={form} onSubmit={sendEmail}>         */}
        <form>

          <input type="text" name="name" className="user"  placeholder="Name" value={name} onChange={(e) => handleInputChange(e, "name")}/>

          <input type="email" name="email" className="user" placeholder="Email" value={email} onChange={(e) => handleInputChange(e, "email")}/>

          <input type="tel" name="telephone" className="user" placeholder="Telephone" value={telephone} onChange={(e) => handleInputChange(e, "telephone")}/>

          <textarea name="message" className="user" placeholder="Message" value={message} onChange={(e) => handleInputChange(e, "message")}/>

          <input type="submit" value="Send" className="button" defaultValue="Submit" onClick={handleSubmit}/>

          <span>{done && "Thanks for Contacting me"}</span>

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          >

          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
