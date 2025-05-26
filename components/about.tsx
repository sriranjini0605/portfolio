"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">With two years of experience as an Application Development
           Analyst at Accenture, I contributed to web development and data visualization projects,
          leveraging Spring Boot, AWS, LLMs, MongoDB, and React.js. I developed and optimized web 
          applications, built interactive dashboards using Power BI and Tableau, and collaborated 
          with cross-functional teams to deliver impactful solutions. As a recent Master’s graduate
          in Information Technology from ASU, I’ve been honing my skills in full-stack development and cloud computing,
          with a strong focus on building scalable, real-world applications. Actively seeking full time software developer/ software engineer roles to 
          apply my skills and gain hands-on experience. Outside of work, I enjoy singing, playing volleyball, and 
          engaging with diverse perspectives.</span>
      </p>
    </motion.section>
  );
}
