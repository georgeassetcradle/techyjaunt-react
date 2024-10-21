import { HomeNavLink } from "../../globalcomponents/NavLinks";
import FooterSection from "../../globalcomponents/FooterSection";
import Header from "./new-website/new-homepage/Header";
import Partners from "./partners/Partners";
import { useState } from "react";
import MailBtn from "../../globalcomponents/MailButton";
import { Element } from "react-scroll";
import BestProgram from "./new-website/new-homepage/BestProgram";
import Bootcamp from "./new-website/new-homepage/Bootcamp";
import Achievements from "./new-website/new-homepage/Achievements";
import FeedBack from "./new-website/new-homepage/Feedback";
import CTAMessage from "./new-website/new-homepage/CTAMessage";
import CTASection from "./new-website/new-homepage/CTASection";
import AboutTechy from "./new-website/new-homepage/AboutTechy";
import { Fade } from "react-reveal";
import FeaturePage from "./new-website/new-homepage/FeaturePage";
const Homepage = () => {
  const [open, setOpen] = useState(true);
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });

  return (
    <main className="mx-auto">
      <>
        <HomeNavLink />
        <Element name="home">
          <Header />
        </Element>
        <Element name="about">
          <AboutTechy />
        </Element>
        <BestProgram />
        <Element name="courses">
          <Bootcamp />
        </Element>
        <Partners />
        <Achievements />
        <FeaturePage />
        <Element name="testimonial">
          <FeedBack />
        </Element>
        <CTAMessage />
        <CTASection />
        <Element name="contact">
          <FooterSection />
        </Element>
      </>
    </main>
  );
};
export default Homepage;
