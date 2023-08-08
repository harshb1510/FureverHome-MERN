import "./contact.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (
    <section className="contact">
    <div className="content">
        <h2>Contact Us</h2>
        <p></p>
    </div>
    <div className="hcontainer">
        <div className="contactInfo">
            <div className="box">
               
                    <LocationOnIcon className="icon1"/>
               
                <div className="text">
                    <h3>Address</h3>
                    <p>Near IIIT Una,<br/>Saloh,Una Himachal,<br/>177209</p>
                </div>
            </div>
            <div className="box">
               <PhoneIcon className="icon2"/>
                <div className="text">
                    <h3>Phone</h3>
                    <p>+91 9350728474 , +91 9252908070</p>
                    
                </div>
            </div>
            <div className="box">
                <EmailIcon className="icon3"/>
                <div className="text">
                    <h3>Email</h3>
                    <p>fureverhome@gmail.com</p>
                </div>
            </div>
            <ul className="sci">
                <li><a href="#"><ion-icon name="logo-facebook" role="img" className="md hydrated" aria-label="logo facebook"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-linkedin" role="img" className="md hydrated" aria-label="logo linkedin"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram"></ion-icon></a></li>
            </ul>
        </div>

        <div className="contactForm">
            <form>
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Type your Message...</span>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Send"/>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default Contact

