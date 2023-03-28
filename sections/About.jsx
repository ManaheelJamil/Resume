'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles=" font-bold text-center text-4xl "/>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-md text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Hello</span> my name is Manheel Jameel and I am a BS (Mathematics) student at Federal 
                 Urdu University. In addition to my studies, I have also completed a Mern Stack 
                 course in Syalni and am currently pursuing a
        <span className="font-extrabold text-white">
        WEB 3.0 Metaverse
        </span>{' '}
        course at 
        <span className="font-extrabold text-white">PIAIC .</span>  
        With my education and training, I have developed expertise in MongoDB and Tailwind
                   CSS. I am passionate about using my skills to create innovative solutions and push
                    the boundaries of what is possible in the digital realm. My goal is to leverag
                    e my knowledge and experience to make a positive impact in the world,
        <span className="font-extrabold text-white"></span> , whether 
                    it's through developing new software applications or contributing to existing 
                    projects. I am always eager to learn and grow, and I am excited about the 
                    opportunities that lie ahead.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
