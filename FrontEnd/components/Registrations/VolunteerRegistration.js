import React, { useState ,useEffect} from 'react'
import {  Row,Col  } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { addVolunteerApi } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const InitialValues ={
  volFname : "",
  volLname : "",
  volMobNo : "",
  volAddress : "",
  volCity : "",
  volEmail : "",
  volType : "",
  volBloodg : "",
    username : "",
    password : "",
    
}
export default function VolunteerRegistration() {

    const [volunteer,setVolunteer] = useState(InitialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const onValueChange = (e) =>{
        console.log(e.target.name,e.target.value);
        setVolunteer({...volunteer, [e.target.name] : e.target.value})
        console.log(volunteer);
    };
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && addVolunteer) {
        console.log(volunteer);
      }
    }, [formErrors]); 

    const validate = (values) => {
      const errors = {};
      
      if (!values.username) {
        errors.username = "Username is required!";
        //toast errors and return
      }
      if (!values.volFname) {
        errors.volFname = "Type Of volFname is Required!";
      } 
      if (!values.volLname) {
        errors.volLname = "Type Of volLname is Required!";
      } 
      if (!values.volMobNo) {
        errors.volMobNo = "Type Of volMobNo is Required!";
      }else if(values.volMobNo.length<10){
        errors.volMobNo = "volMobNo must be more than 10 characters";
      }else if(values.volMobNo.length>10){
        errors.volMobNo = "volMobNo must be less than 10 characters";
      }  
      if (!values.volAddress) {
        errors.volAddress = "Type Of volAddress is Required!";
      } 
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };


    const addVolunteer =  (e) => {
         e.preventDefault();
        console.log(volunteer);
        setFormErrors(validate(volunteer));
        setIsSubmit(true);
         addVolunteerApi(volunteer).then((res)=>{
            console.log(res);
            toast.success('🦄 Registration of Volunteer Successfull..!!!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            navigate('/LogIn');   
         }).catch((error)=>{
          console.log(error);
          console.log("Error registre");
        })
        
    }
    const styles = {
      cardstyle: {
        width: "50rem",
        marginBottom: "20rem",
      },
    };
  return (
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5 ">
        <Card style={styles.cardstyle}>
          <Alert variant="secondary">
            <Alert.Heading className="d-flex justify-content-center">
              VOLUNTEER REGISTRATION FORM
            </Alert.Heading>
          </Alert>
          <Form className=" p-4">
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Volunteer First Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  onChange={(e) => onValueChange(e)}
                  name="volFname"
                  required
                />{" "}
              </Col>
              <p style={{color:"red"}}>{formErrors.volFname}</p>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Volunteer Last Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={(e) => onValueChange(e)}
                  name="volLname"
                  required
                />{" "}
              </Col>
              <p style={{color:"red"}}>{formErrors.volLname}</p>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Mobile No
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  placeholder="Enter mobile number"
                  onChange={(e) => onValueChange(e)}
                  name="volMobNo"
                  required
                />{" "}
              </Col>
              <p style={{color:"red"}}>{formErrors.volMobNo}</p>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Address
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  onChange={(e) => onValueChange(e)}
                  name="volAddress"
                  required
                />{" "}
              </Col>
              <p style={{color:"red"}}>{formErrors.volAddress}</p>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                City
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter city Name"
                  onChange={(e) => onValueChange(e)}
                  name="volCity"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Email Address
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address here"
                  onChange={(e) => onValueChange(e)}
                  name="volEmail"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Type of Volunteer
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter what type volunteer work"
                  onChange={(e) => onValueChange(e)}
                  name="volType"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Blood Group
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter blood group"
                  onChange={(e) => onValueChange(e)}
                  name="volBloodg"
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                User Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter User Name"
                  onChange={(e) => onValueChange(e)}
                  name="username"
                  required
                />{" "}
              </Col>
              <p style={{color:"red"}}>{formErrors.username}</p>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Password
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  placeholder="enter password"
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  required
                />{" "}
              </Col>
              <p style={{color:"red"}}>{formErrors.password}</p>
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Accept Terms & Check me out" />
            </Form.Group>
            <div className="pt-4">
              <Button
                onClick={(e) => addVolunteer(e)}
                variant="success"
                type="submit"
              >
                Register As Volunteer
              </Button>{" "}
              &nbsp;&nbsp;&nbsp;
              <Button variant="success" type="reset">
                Reset Values
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  )
}
