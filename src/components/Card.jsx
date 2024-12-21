import React from "react";
import { motion } from "framer-motion";
import "./style.css";

function Card({ heding ,text, index }) {
    return (
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 100 : -100
        }}
        whileInView={{
            opacity: 0.75,
            x: 0, // Slide in to its original position
            transition: {
              duration: 2 // Animation duration
            }
          }}
          viewport={{ once: true }}
        >
          <div className="text-2xl text-center text-white">
          <h2 className="card-text">{heding}</h2><br/>
          <p>{text}</p>
          </div>
        </motion.div>
      );
    }
    
    export default Card;