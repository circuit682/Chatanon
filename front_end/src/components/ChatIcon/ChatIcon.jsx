import React from "react";
import { motion } from "framer-motion";
import chatIcon from "../../assets/futuristicchatbrainmotifsubtle.jpg"; // Use  image
import "./ChatIcon.css";


const ChatIcon = () => {
  return (
    <motion.div
      className="chat-icon"
      initial={{ scale: 1, rotate: 0 }}
      animate={{
        rotate: [0, 10, -10, 0], // Subtle tilting animation
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2 }} // Enlarge on hover
      whileTap={{ scale: 0.9 }} // Shrink slightly on click
    >
      <motion.img
        src={chatIcon}
        alt="Chat Icon"
        className="chat-img"
        animate={{ boxShadow: ["0px 0px 5px #00c6ff", "0px 0px 15px #00c6ff"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
    
    
  );
};

export default ChatIcon;
