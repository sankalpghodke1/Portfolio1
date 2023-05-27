import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import myImg from "../../Assets/Automobile.jpg";
import myImg1 from "../../Assets/ansys.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h6>
          <strong className="purple">C++</strong>
        </h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>
          <strong className="purple">JavaScript</strong>
        </h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>
          <strong className="purple">Node js</strong>
        </h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>
          <strong className="purple">React js</strong>
        </h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={myImg} className="img-fluid" alt="avatar" />
        <h6>
          <strong className="purple">Automobile</strong>
        </h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h6>
          <strong className="purple">Next.js</strong>
        </h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>
          <strong className="purple">github</strong>
        </h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={myImg1} className="img-fluid" alt="avatar" />
        <h6>
          <strong className="purple">Ansys</strong>
        </h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>
          <strong className="purple">Python</strong>
        </h6>
      </Col>
    </Row>
  );
}

export default Techstack;
