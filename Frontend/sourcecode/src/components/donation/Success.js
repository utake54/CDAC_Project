import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate } from 'react-router-dom';
import { Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { donatorslip } from "../../service/service";
import {useEffect, useState} from 'react';
import Alert from "react-bootstrap/Alert";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Success() {
const navigate = useNavigate();
const styles = {
    cardstyle: {
      width: "29rem",
      marginBottom: "30rem",
    },
    img1: {
      width: "4.5rem",
      height: "3rem",
    },
  };
  
  const[users, setUsers]=useState([]);
useEffect(()=>{
  getdetailslip()
},[])

const getdetailslip=async()=>{
let response =await donatorslip();
console.log(response);
setUsers(response.data);
}
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5">
          <Card style={styles.cardstyle}>
            <Alert variant="secondary">
              <Alert.Heading className="d-flex justify-content-center">
                DONATION SUCCESSFULL
              </Alert.Heading>
            </Alert>
            <Card.Body>
              
      
         



  <Row>
  {
  users.map(user=>{
    <Row>
      <Col>Name:- {user.IN_FNAME} </Col>
      </Row>
 })
 
 }
  </Row> 



              <Row>
                <Col sm={2}>
                  {" "}
                  <img
                    style={styles.img1}
                    src={require("../../images/success.png")}
                    alt=""
                  />{" "}
                </Col>
                <Col sm={10}>
                  {" "}
                  <h4 className="pt-2">Thank You for Donation !</h4>
                </Col>
              </Row>
              <br />
              <div className="d-flex justify-content-center mt-5">
                <Button
                  onClick={() => {
                    navigate("/");
                  }}
                  variant="success"
                >
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Success;
