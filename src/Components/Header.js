import React from "react";
import "./Header.css";
import adoptImage from "./photos/1.jpg";

const Header = () => {
  return (
    <div>
      <section className="steps">
        <h2 className="steps-heading">
          Your Pet Adoption Journey With FureverHome
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <img className="title-image" src={adoptImage} alt="adopt me" />
          </div>
          <div className="col-lg-6">
            <h2 className="icon fs-2">
              <i className="fas fa-search-location"></i> Search Dog
            </h2>
            <p className="step1">
              Adopt a dog who's right for you. Simply enter the dog breed which
              you like to adopt.
            </p>
            <h2 className="icon fs-2">
              <i className="fas fa-link"></i> Connect
            </h2>
            <p className="step1">
              Once you find a pet, click "show number" to get contact info for
              their pet parent or rescue. Contact them to learn more about how
              to meet and adopt the pet.
            </p>
            <h2 className="icon fs-2">
              <i className="fas fa-heart"></i> AdoptLove
            </h2>
            <p className="step1">
              The rescue or pet parents will walk you through their adoption
              process. Prepare your home for the arrival of your fur baby to
              help them adjust to their new family.
            </p>
            <h2 className="icon fs-2">
              <i className="fas fa-syringe"></i> Free Vet Consultation
            </h2>
            <p className="step1">
              FureverHome will help your pet to settle down in its new home,
              once you complete the Adoption journey reach out to us for free
              vet consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
