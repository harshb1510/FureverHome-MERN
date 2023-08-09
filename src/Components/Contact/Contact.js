import "./contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xaygeqqr");
  if (state.succeeded) {
    return(
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p></p>
      </div>
      <div className="hcontainer">
        <div className="contactInfo">
          <div className="box">
            <LocationOnIcon className="icon1" />

            <div className="text">
              <h3>Address</h3>
              <p>
                Near IIIT Una,
                <br />
                Saloh,Una Himachal,
                <br />
                177209
              </p>
            </div>
          </div>
          <div className="box">
            <PhoneIcon className="icon2" />
            <div className="text">
              <h3>Phone</h3>
              <p>+91 9350728474 , +91 9252908070</p>
            </div>
          </div>
          <div className="box">
            <EmailIcon className="icon3" />
            <div className="text">
              <h3>Email</h3>
              <p>fureverhome4u@gmail.com</p>
            </div>
          </div>
        </div>
    <div ><h2>Thanks for Sending <br></br>your Message!</h2></div>
    </div>
    </section>
    )
  }

  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p></p>
      </div>
      <div className="hcontainer">
        <div className="contactInfo">
          <div className="box">
            <LocationOnIcon className="icon1" />

            <div className="text">
              <h3>Address</h3>
              <p>
                Near IIIT Una,
                <br />
                Saloh,Una Himachal,
                <br />
                177209
              </p>
            </div>
          </div>
          <div className="box">
            <PhoneIcon className="icon2" />
            <div className="text">
              <h3>Phone</h3>
              <p>+91 9350728474 , +91 9252908070</p>
            </div>
          </div>
          <div className="box">
            <EmailIcon className="icon3" />
            <div className="text">
              <h3>Email</h3>
              <p>fureverhome4u@gmail.com</p>
            </div>
          </div>
        </div>

       
        

        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="Name" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="Email" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <input type="text" name="Message" required="required" />
              <span>Type your Message...</span>
            </div>
            <button type="submit" className="inputBox" disabled={state.submitting}>
              Submit
            </button>{" "}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
