import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Jerry from "../../Assets/Projects/Jerry.png";
import Eri from "../../Assets/Projects/Eri.png";
import maziminds from "../../Assets/Projects/maziminds.png";
import chatapp from "../../Assets/Projects/chat-app.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import chatbot from "../../Assets/Projects/chatbot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <h2 style={{ color: "white" }}>
          Web Development Projects
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maziminds}
              isBlog={false}
              title="Game Studio Website"
              description="A game portfolio website made to showcase a Game studio according to their requirements using Vite React."
              websiteLink="https://maziminds.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Chat App"
              description="A realtime chat app made with Angular, Typescript and SASS"
              websiteLink="https://b-w-chat-app.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Simple AI Chat APP"
              description="A simple AI chat app made with Nextjs, Tailwind and Groq AI API"
              websiteLink="https://chatbot-nextjs-0.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jerry}
              isBlog={false}
              title="Portfolio Master"
              description="A comprehensive portfolio website showcasing projects and professional experience with React and Bootstrap"
              websiteLink="https://portfolio-master-3xg2.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eri}
              isBlog={false}
              title="Graphics Designer Portfolio"
              description="A Responsive Website Built for a Graphics Designer using React"
              websiteLink="https://erioluwa.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce Page"
              description="Responsive E-commerce Static page website made with React"
              websiteLink="https://shopping-website-rytq.onrender.com/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
