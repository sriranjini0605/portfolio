import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import proshopImg from "@/public/Proshop.png";
import prepifyImg from "@/public/Prepify.png";
import todoAppImg from "@/public/Todo.png";
import brainwaveImg from "@/public/Brainwave.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Atlassian Developer",
    company: "Arizona State University",
    location: "Tempe, AZ",
    description:
      "As Atlassian Developer, I mastered agile project management and system optimization using Jira and JSM. I led sprint planning and retrospectives, collaborating across teams to streamline project timelines and deliverables and advanced agile project management, significantly improving team flexibility and delivery efficiency.Led successful JIRA platform migration, enhancing project support, cross-team operability, and overall system efficiency.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2024 - May 2025",
  },
  {
    title: "Application Development Analyst",
    company: "Accenture",
    location: "Bangalore, Karnataka",
    description:
      "At Accenture, I transformed client websites and landing pages using ReactJS and Redux, cutting development time by 50% while aligning solutions with business requirements to enhance client satisfaction. Collaborating closely with database migration and cloud teams, I ensured the seamless integration and 100% on-time delivery of several major projects, providing technical support throughout. Additionally, I led the development of a dynamic data analysis pipeline, scraping data from 15+ websites, executing meticulous data cleaning and manipulation, and crafting impactful visualizations to drive data-driven insights.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2021 - June 2023",
  },
  {
    title: "Website Developer",
    company: "Contentributor",
    location: "Bangalore, Karnataka",
    description:
      "I spearheaded the development of a career guidance website using WordPress, JavaScript, HTML and CSS customizing plugins and themes to enhance functionality and user experience. Additionally, I pioneered the integration of advanced payment systems, including Google Checkout and PayPal, significantly improving the platform’s e-commerce capabilities.",
    icon: React.createElement(FaReact),
    date: "March 2021 - May 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Proshop",
    description:
      "An eCommerce platform with JWT authentication, PayPal integration, and an admin dashboard for managing users, products, and orders.",
    tags: ["ReactJS", "Redux", "NodeJS", "Express", "MongoDB"],
    imageUrl: proshopImg,
    githubLink: "https://github.com/sriranjini0605/proshop"
  },
  {
    title: "Prepify - AI Mock Interview",
    description:
      "An AI-powered mock interview tool with real-time voice interactions, dynamic question generation, and feedback.",
    tags: ["Node.js", "React.js", "AWS S3", "AWS Transcribe", "AWS Polly", "ChatGPT API"],
    imageUrl: prepifyImg,
    githubLink: "https://github.com/sriranjini0605/interview-prep"
  },
  {
    title: "Todo Application",
    description:
      "A full-stack Java Todo app with Spring Boot and React, deployed on AWS Elastic Beanstalk with S3 for static assets.",
    tags: ["Spring Boot", "Spring Data JPA", "Spring Security", "ReactJS", "AWS Elastic Beanstalk", "S3"],
    imageUrl: todoAppImg,
    githubLink: "https://github.com/sriranjini0605/todo-application"
  },
  {
    title: "Brainwave",
    description:
      "Designed a sleek, cross-platform UI/UX with React and Tailwind, featuring smooth animations for an engaging user experience.",
    tags: ["ReactJS", "Tailwind CSS"],
    imageUrl: brainwaveImg,
    githubLink: "https://github.com/sriranjini0605/Brainwave"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Spring Boot",
  "Spring Security",
  "Spring Data JPA",
  "AWS",
  "Power BI",
  "Tableau",
  "Hibernate",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
] as const;
