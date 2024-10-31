import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiUnity,
  SiBlender,
  SiVisualstudio,
  SiWindows11,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudio />
      </Col>
    </Row>
  );
}

export default Toolstack;
