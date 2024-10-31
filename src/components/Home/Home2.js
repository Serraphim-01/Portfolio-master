import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/jerry.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Journey just <span className="purple"> BEGINNING </span>
            </h1>
            <p className="home-about-body">
            I’m a recent computer science grad who fell in love with game development. 
            It’s amazing to create interactive worlds and experiences. 
            I’m still in the early stages, but I’m hooked!
              <br />
              <br />I write in
              <i>
                <b className="purple"> C# </b> and my preferred engine is 
                <b className="purple"> Unity</b>
              </i>.
              <br />
              <br />
              My field of Interest is in &nbsp;
              <i>
                <b className="purple">Game Development</b> 
              </i>.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b> 
              </i> and 
              <i>
                <b className="purple">
                  {" "}
                  Sound Engineering 
                </b>
              </i> as a <b className="purple">Junior Sound Engineer</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
