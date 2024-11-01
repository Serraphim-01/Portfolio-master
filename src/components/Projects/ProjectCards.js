import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillGoogleCircle } from 'react-icons/ai';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.driveLink} target="_blank">
          <AiFillGoogleCircle /> &nbsp;
          {props.isBlog ? "Blog" : "Google Drive"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.videoLink && (
          <Button
            variant="primary"
            href={props.videoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiFillGoogleCircle /> &nbsp;
            {"Drive Video"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
function ProjectCardNoImage(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.videoLink && (
          <Button
            variant="primary"
            href={props.videoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiFillGoogleCircle /> &nbsp;
            {"Drive Video"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
export { ProjectCardNoImage };
