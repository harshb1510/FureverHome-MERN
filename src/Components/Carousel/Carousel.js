import HoverCarousel from "hover-carousel";
import "./carousel.css"

const Carousel = () => {
  const images = [
    "/photos/cute-pet-names.png",
    "/photos/newFile-12.jpg.avif",
    "/photos/which-pets-are-the-most-affectionate.jpg",
    "/photos/image1.webp",
    "/photos/image2.jpeg",
    "/photos/Woofyz.jpg",
    "/photos/pets-other-animals.jpg",

    
  ];

  return (
    <section className="carouselWrapper">
    <div className="carouselItem ">
      <HoverCarousel images={images} className="images" />
    </div>
    </section>
  );
};

export default Carousel