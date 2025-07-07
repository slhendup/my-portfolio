import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.jpg";
import "../App.css"

const Home = ({ id }) => {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const heroRef = useRef(null);
  const phrases = [
    "Law Student",
    "Environmental Advocate",
    "Climate Justice Activist",
  ];

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= phrases[currentPhraseIndex].length) {
        setTypedText(phrases[currentPhraseIndex].substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id={id} ref={heroRef} className="hero-section">
      <motion.div
        className="hero-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="profile-image-container"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src={myPhoto}
            alt="Kinley Rinzin"
            className="profile-image"
            onError={(e) => {
              e.target.src = "/images/default-profile.jpg";
            }}
          />
        </motion.div>

        <motion.div
          className="hero-terminal"
          variants={itemVariants}
        >
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control-dot red"></span>
              <span className="control-dot yellow"></span>
              <span className="control-dot green"></span>
            </div>
          </div>

          <motion.div
            className="terminal-body"
            variants={containerVariants}
          >
            <motion.p className="terminal-line" variants={itemVariants}>
              <span className="prompt"></span> Greetings and Kuzu Zangpo!
            </motion.p>
            <motion.p className="terminal-line" variants={itemVariants}>
              My name is <span className="highlight">Kinley Rinzin</span>
            </motion.p>

            <motion.p className="terminal-line" variants={itemVariants}>
              I'm a 4th year student at Jigme Singye Wangchuck School of Law
            </motion.p>

            <motion.p className="terminal-line" variants={itemVariants}>
       I come from a country
              that has made significant efforts to achieve and maintain carbon
              neutrality. Uniquely, our Constitution enshrines environmental
              protection by mandating that at least 60% of our land remains under
              forest cover — a commitment that has deeply inspired me. I aspire to
              become an advocate at a time when climate change is no longer a distant
              concept but a present reality. My involvement with the Climate Change
              and Environmental Law Clinic — an experiential learning program offered
              by our law school — and my participation in the WYCJ Asian Front align
              perfectly with my vision and goals.            </motion.p>

            <motion.p
              className="typing-text"
              variants={itemVariants}
            >
              {typedText}
              <span className="cursor">|</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Home;