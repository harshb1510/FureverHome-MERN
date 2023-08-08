import "./testimonial.css";
import StarIcon from '@mui/icons-material/Star';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonialContainer">
        <div className="headingSection">
          <h2 className="testimonialHeading">
            What our customers are saying...
          </h2>
        </div>
        <div className="viewCorner">
          <div className="testimonialsLeft">
            <div class="bubble">
              <p className="bubbleHeading">Efficient Collaborating</p>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laboriosam soluta molestias
              </span>
            </div>
            <div class="triangle"></div>
            <img
              src="photos/testm.jpeg"
              alt=""
              className="testimonialProfile"
            />
            <div className="profileInfo">
            <h5 style={{fontSize:"25px",fontWeight:"700"}}>Harsh</h5>
              <h6>Student</h6>
              <div className="starContainer">

              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              </div>
            </div>
          </div>
          <div className="testimonialsCenter">
            <div class="bubble">
              <p className="bubbleHeading">Efficient Collaborating</p>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laboriosam soluta molestias
              </span>
            </div>
            <div class="triangle"></div>
            <img
              src="photos/testm.jpeg"
              alt=""
              className="testimonialProfile"
            />
            <div className="profileInfo">
              <h5 style={{fontSize:"25px",fontWeight:"700"}}>Harsh</h5>
              <h6>Student</h6>
              <div className="starContainer">

              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              </div>
            </div>
          </div>
          <div className="testimonialsRight">
            <div class="bubble">
              <p className="bubbleHeading">Efficient Collaborating</p>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laboriosam soluta molestias
              </span>
            </div>
            <div class="triangle"></div>
            <img
              src="photos/testm.jpeg"
              alt=""
              className="testimonialProfile"
            />
            <div className="profileInfo">
            <h5 style={{fontSize:"25px",fontWeight:"700"}}>Harsh</h5>
              <h6>Student</h6>
              <div className="starContainer">

              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
