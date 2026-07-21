import Hero from "/public/projects/portfolio/Hero.png";
import About from "/public/projects/portfolio/About.png";
import Contact from "/public/projects/portfolio/Contact.png";
import Create from "/public/projects/product-store/Create.page.png";
import Home from "/public/projects/product-store/Home.page.png";
import Resume from "/public/projects/portfolio/Resume.png";
import Tech from "/public/projects/portfolio/Skills.png";
import Update from "/public/projects/product-store/Update.page.png";
import Project from "/public/projects/portfolio/Project.png";
import { create } from "framer-motion/client";

export const PROJECTS = [
  {
    title: "Portfolio Website",
    images: [Hero, About, Contact, Tech, Project, Resume],
    description:
      "My personal portfolio website built using React.js and Tailwind CSS. The website showcases my projects, skills, and experience in an interactive and visually appealing manner. The project helped me improve my React skills, including component composition, routing, and state management. It also allowed me to practice responsive design and accessibility best practices.", 

    technologies: ["HTML", "JavaScript", "React", "Tailwind"],
    livelink: "https://react-portfilo-shree.vercel.app/",
    repolink: "https://github.com/shreekanthakdev/shreekantha-portfolio",
  },
  {
    title: "MERN-Stack E-commerce Product Management Platform",
    images: [Create, Home, Update],
    description:
      "Developed a full-stack web application for product management using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented complete CRUD (Create, Read, Update, Delete) functionality for products, featuring a responsive user interface built with Tailwind CSS and seamless navigation using React Router DOM. The application allows users to create, view, update, and delete products, with data stored in a MongoDB database. The project showcases my skills in full-stack development, including API integration, state management with React hooks, and responsive design principles.", 

    technologies: ["JavaScript", "React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    livelink: "https://product-store-frontend-h5hh.onrender.com",
    repolink: "https://github.com/Shreekantha45/Product-Store",
  },
];

export const CONTACT = {
  address: "Nagawara, Bangalore, Karnataka, India",
  phoneNo: "+91   8496945667 ",
  email: "shreekantha.k.dev@gmail.com",
};