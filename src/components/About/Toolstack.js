import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import myImg2 from "../../Assets/catia.jpg";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={myImg2} className="img-fluid" alt="avatar" />
        <h6>
          <strong className="purple">Catia</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>
          <strong className="purple">Visual Studio Code</strong>
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>
          <strong className="purple">Postman</strong>
        </h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
