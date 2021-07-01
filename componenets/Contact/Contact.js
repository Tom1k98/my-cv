import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { heading } from "./contactText";
import contactStyles from "./Contact.module.scss";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = ({ language }) => {
  const [getHeading, setHeading] = useState(heading.en);

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    setHeading(language === "cz" ? heading.cz : heading.en);
  }, [language]);
  return (
    <div ref={ref} name="contact" className={contactStyles.contact}>
      <h2 className={inView ? "aboutHeading" : 0}>{getHeading}</h2>
      <p>
        <MailOutlineIcon fontSize="large" />{" "}
        <a href="mailto:tomas.storc@gmail.com">tomas.storc@gmail.com</a>
      </p>
      <p>
        <PhoneIcon fontSize="large" />
        <a href="tel:+420773989743">+420 773 989 743</a>
      </p>
      <a href=""></a>
      <a href="https://www.facebook.com/tomas.storc/">
        <FacebookIcon fontSize="large" style={{ margin: "1rem" }} />
      </a>
      <a href="https://twitter.com/tomasstorc">
        <TwitterIcon fontSize="large" style={{ margin: "1rem" }} />
      </a>
      <a href="https://github.com/tomasstorc">
        <GitHubIcon fontSize="large" style={{ margin: "1rem" }} />
      </a>
      <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-%C5%A1torc-745a0913a/">
        <LinkedInIcon fontSize="large" style={{ margin: "1rem" }} />
      </a>
    </div>
  );
};

export default Contact;
