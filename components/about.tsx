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
        <span className="font-medium">I am a software engineer with two years of experience at Accenture as an Application Development Analyst
           and one year at EdPlus, Arizona State University, as an Atlassian Developer. At Accenture, I built scalable web applications,
            optimized distributed systems, and delivered interactive dashboards using React.js, Spring Boot, AWS, and visualization tools
             like Power BI and Tableau. At ASU, I enhanced DevOps workflows by leading a Jira platform migration, developing automations,
              and authoring technical documentation to improve collaboration and delivery speed.

I recently earned my Master’s in Information Technology at Arizona State University with a 4.0 GPA, 
where I focused on full-stack development, cloud computing, and AI-driven applications. My projects 
include an AI-powered fitness platform, a GenAI-enabled supplier risk forecasting tool, and a real-time face recognition 
system on AWS. Outside of tech, I enjoy singing, playing volleyball, and engaging with diverse communities that inspire
 creativity in my work. I’m actively seeking full-time software developer and software engineer roles to apply my skills
  and grow through new challenges.</span>
      </p>
    </motion.section>
  );
}
