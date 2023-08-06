import React from "react";
import "./Header.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import LinkIcon from "@mui/icons-material/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VaccinesIcon from '@mui/icons-material/Vaccines';

const data = [
  {
    icon: <SearchIcon />,
    heading: "Search Dog",
    detail:
      "Adopt a dog who's right for you. Simply enter the dog breed which you like to adopt.",
  },
  {
    icon: <LinkIcon />,
    heading: "Connect",
    detail:
      "Once you find a pet, click show number to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.",
  },
  {
    icon: <FavoriteIcon />,
    heading: "AdoptLove",
    detail:
      "The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.",
  },
  {
    icon: <VaccinesIcon />,
    heading: "Free Vet Consultation",
    detail:
      "FureverHome will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.",
  },
];
const Header = () => {
  return (
    <section className="value">
      <h1>Your Pet Adoption Journey With FureverHome</h1>
      <div className="valueContainer">
        <div className="valueLeft">
          <img src="/photos/1BR.png"  alt="" />
        </div>
        <div className="valueRight">
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            allowZeroExpanded={true}
            // preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                      <div className=" icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="icon dropdown">
                        <ArrowDropDownIcon size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordianPanel">
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Header;
