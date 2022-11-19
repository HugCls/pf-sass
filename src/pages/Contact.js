import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";
import DarkBtn from "../components/DarkBtn";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
  }

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <DarkBtn/>
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adress</h4>
              <p>69009</p>
            </div>
          </div>
          
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="hugo.claisse@live.fr" className="hover">
                <p
                  style={{cursor: 'pointer'}}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  hugo.claisse@live.fr
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Hugo Claisse</p>
          </div>
        </div>
        <ButtonsBottom left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;