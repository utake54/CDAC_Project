import React, { useState,useEffect } from "react";
import { Row ,Col  } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { addOrganizationNgoApi } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InitialValues ={
  oType : "",
  oName : "",
  oAuthName : "",
  oMobNo : "",
  oAddress : "",
  oCity : "",
  oEmail : "",
  oRegisNo : "",
  oUrl : "",
  username: "",
  password : "",
    
}

export default function OrganizationRegistration() {

    const [org,setOrg] = useState(InitialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate=useNavigate();


    const onValueChange2 = (e) =>{
        console.log(e.target.name, e.target.innerText);
        setOrg({...org, [e.target.name] : e.target.innerText})
        console.log(org);
      }
    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setOrg({...org, [e.target.name] : e.target.value})
        console.log(org);
      }
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && addOrganization) {
          console.log(org);
        }
      }, [formErrors]); 
  
      const validate = (values) => {
        const errors = {};
        
        if (!values.username) {
          errors.username = "Username is required!";
          //toast errors and return
        }
        if (!values.oName) {
          errors.oName = "Type Of oName is Required!";
        } 
        if (!values.oAuthName) {
          errors.oAuthName = "Type Of oAuthName is Required!";
        } 
        if (!values.oMobNo) {
          errors.oMobNo = "Type Of oMobNo is Required!";
        }else if(values.oMobNo.length<10){
          errors.oMobNo = "oMobNo must be more than 10 characters";
        }else if(values.oMobNo.length>10){
          errors.oMobNo = "oMobNo must be less than 10 characters";
        }  
        if (!values.oAddress) {
          errors.oAddress = "Type Of oAddress is Required!";
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

      const addOrganization =  (e) => {
        e.preventDefault();
        setFormErrors(validate(org));
        setIsSubmit(true);
         addOrganizationNgoApi(org).then((res)=>{
            console.log(res);
            toast.success('🦄 Registration of Organization Successfull..!!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            navigate("/LogIn");
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
            ORGANIZATION REGISTRAION FORM
          </Alert.Heading>
        </Alert>
        <Form className=" p-4" >
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail" >
            <Form.Label column sm={3} >
              Type of Organization
            </Form.Label>
            <Col sm={9} >
              <Dropdown column > 
                <Dropdown.Toggle
                  size="sm"
                  variant="secondary"
                  id="dropdown-basic"
                >
                  Select type of Organization
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  <Dropdown.Item
                    
                    id="ngo"
                    onClick={(e) => {
                      onValueChange2(e);
                    }}
                    name="oType"
                    
                  >
                    ngo
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="non-ngo"
                    onClick={(e) => {
                      onValueChange2(e);
                    }}
                    name="oType"
                  >
                    non-ngo
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Name Organization
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter Name Organization"
                onChange={(e) => onValueChange(e)}
                name="oName"
                required
              />{" "}
            </Col>
            <p style={{color:"red"}}>{formErrors.oName}</p>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Name of Authority
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter name authority"
                onChange={(e) => onValueChange(e)}
                name="oAuthName"
                required
              />{" "}
            </Col>
            <p style={{color:"red"}}>{formErrors.oAuthName}</p>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Mobile No
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                placeholder="Enter your mobile no"
                onChange={(e) => onValueChange(e)}
                name="oMobNo"
                required
              />{" "}
            </Col>
            <p style={{color:"red"}}>{formErrors.oMobNo}</p>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Address
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter Organization address"
                onChange={(e) => onValueChange(e)}
                name="oAddress"
                required
              />{" "}
            </Col>
            <p style={{color:"red"}}>{formErrors.oAddress}</p>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              City
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter Organization city"
                onChange={(e) => onValueChange(e)}
                name="oCity"
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
                name="oEmail"
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Registration Number
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter Organization RGSNO"
                onChange={(e) => onValueChange(e)}
                name="oRegisNo"
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              URL of Organization
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="url"
                placeholder="Enter Organization address"
                onChange={(e) => onValueChange(e)}
                name="oUrl"
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
            username            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                aria-label="Username"
                onChange={(e) => onValueChange(e)}
                name="username"
                required
              />{" "}
            </Col>
            <p style={{color:"red"}}>{formErrors.username}</p>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
            password
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
              onClick={(e) => addOrganization(e)}
              variant="success"
              type="submit"
            >
              Register As Organization
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
  );
}
