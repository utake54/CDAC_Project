import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <Row>
      <Col sm={8} className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={"550rem"}
              src={require("../../images/homepage1.jpeg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={"550rem"}
              src={require("../../images/homepage2.jpeg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={"550rem"}
              src={require("../../images/homepage1.jpeg")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col sm={3}>
        <Container>
          <Row xs={1} md={2} className="g-4 mt-2 mb-4">
            <Col>
              <Card.Img
                variant="top"
                src={require("../../images/alert.jpeg")}
              />
              <div className="d-grid gap-2">
                <Button variant="secondary" size="sm" onClick={(e) => {
                        navigate("/victims/dashboard");
                      }}>
                  Rescue
                </Button>
              </div>
            </Col>
            <Col>
              <Card.Img
                variant="top"
                className="mb-3"
                src={require("../../images/medical.png")}
              />
              <div className="d-grid gap-2 pt-1">
                <Button variant="secondary" size="sm" onClick={(e) => {
                        navigate("/victims/dashboard");
                      }}>
                  Medical / Shelter
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Img
                variant="top"
                src={require("../../images/helpline.jpeg")}
              />
              <div className="d-grid gap-2">
                <Button variant="secondary" size="sm">
                  HelpLine
                </Button>
              </div>
            </Col>
            <Col>
              <Card.Img
                variant="top"
                src={require("../../images/helpinghand.jpeg")}
              />
              <div className="d-grid gap-2">
                <Button variant="secondary" size="sm" onClick={(e) => {
                        navigate("/donationhome");
                      }}>
                  Donation
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
      <Col sm={1}></Col>
    </Row>
  </>
  )
}
