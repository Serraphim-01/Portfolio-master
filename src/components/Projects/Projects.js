import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pingpong from "../../Assets/Projects/pingpong.png";
import syringe from "../../Assets/Projects/syringe.png";
import zombiekiller from "../../Assets/Projects/zombiekiller.png";
import survival from "../../Assets/Projects/Survive.png";
import Jerry from "../../Assets/Projects/Jerry.png";
import Eri from "../../Assets/Projects/Eri.png";
import Ajayi from "../../Assets/Projects/Ajayi.png";
import { ProjectCardNoImage } from "./ProjectCards";

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
              imgPath={Ajayi}
              isBlog={false}
              title="Portfolio Website (In Development)"
              description="A modern portfolio website showcasing professional work and skills. Currently under development."
              websiteLink="https://goodness-portfolio.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eri}
              isBlog={false}
              title="Daramz Creations Portfolio"
              description="A completed portfolio website featuring creative works and professional achievements."
              websiteLink="https://daramzcreations.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jerry}
              isBlog={false}
              title="Portfolio Master"
              description="A comprehensive portfolio website showcasing projects and professional experience."
              websiteLink="https://portfolio-master-3xg2.onrender.com"
            />
          </Col>
        </Row>

        <h2 style={{ color: "white" }}>
          Game Development Projects
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pingpong}
              isBlog={false}
              title="Ping Pong"
              description="A game of Ping pong between a player and AI. 
              The player can only move up and down to hit the ball."
              driveLink="https://drive.google.com/drive/folders/1mEaVTNu-9zIu46y7G52aV0FLThuklQDh?usp=sharing"
              videoLink="https://drive.google.com/file/d/1Vvee0-DAa8NJFFm2npBiGWyAYQ15fzmF/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={syringe}
              isBlog={false}
              title="Syringe"
              description="A man using a syringe as a vehicle flies and avoides the 
              viruses in his path while also avoiding hittin the top and bottom borders."
              driveLink="https://drive.google.com/drive/folders/1EhUpn8NuE-Sd24phWkhMe7qKgP8pTO4n?usp=sharing"
              videoLink="https://drive.google.com/file/d/1tLJeJqjt3MWJ3R94NI5uPixVGFxTNHBw/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zombiekiller}
              isBlog={false}
              title="Zombie Killer"
              description="A player fights against zombies that continuously pour out to attack. 
              A health system displays the amount of hits the player can take before dying."
              driveLink="https://drive.google.com/drive/folders/1T65D19IAhTnuTSYXzElO_9pV-ycYa2pp?usp=sharing"
              videoLink="https://drive.google.com/file/d/1RRUKFoY7-yeYogUipe-swV5wWf8q8iuB/view?usp=sharing"
            />
          </Col> 
        </Row>
        <h2 style={{ color: "white" }}>
          Projects In Progress:
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={survival}
              isBlog={false}
              title="Survival Game In Progress"
              description="Survive by farming, crafting Resources, fighting enemies and playing with friends"
              videoLink=""
            />
          </Col>
        </Row>
        <h2 style={{ color: "white" }}>
          Some other side dishes.
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCardNoImage
              title="Machine part model"
              description="A model of a machine part."
              videoLink="https://drive.google.com/file/d/1I_XiybbLY8Nw6HHBRuZKVf3AnowV_Zr7/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardNoImage
              title="Button Device model"
              description="A model of button device that looks like a calculator"
              videoLink="https://drive.google.com/file/d/1DjmJPNSe6PaxCrVFtX8twZ7o-mNSV9Jw/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
