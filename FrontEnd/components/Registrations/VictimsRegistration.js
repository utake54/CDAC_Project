import React, { useState ,useEffect} from "react";
import {  Row , Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { addVictimsApi } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const InitialValues = {
    vfirstName:"",
    vlastName: "",
    vMobno : "",
    vAddress : "",
    vCity : "",
    vEmail : "",
    username : "",
    password : ""
    
}

export default function VictimsRegistration() {

    const [victim,setVictim] = useState(InitialValues) ;
    const [formErrors, setFormErrors] = useState({});
    const navigate=useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    const onValueChange = (e) =>{
        console.log(e.target.name,e.target.value);
        setVictim({...victim, [e.target.name] : e.target.value})     //spread operator for getting it for all variables
        console.log(victim);
    }
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && addVictims) {
        console.log(victim);
      }
    }, [formErrors]); 

    const validate = (values) => {
      const errors = {};
      
      if (!values.username) {
        errors.username = "Username is required!";
        //toast errors and return
      }
      if (!values.vfirstName) {
        errors.vfirstName = "Type Of vfirstName is Required!";
      } 
      if (!values.vlastName) {
        errors.vlastName = "Type Of vlastName is Required!";
      } 
      if (!values.vMobno) {
        errors.vMobno = "Type Of vMobno is Required!";
      }else if(values.vMobno.length<10){
        errors.vMobno = "vMobno must be more than 10 characters";
      }else if(values.vMobno.length>10){
        errors.vMobno = "vMobno must be less than 10 characters";
      }  
      if (!values.vAddress) {
        errors.vAddress = "Type Of vAddress is Required!";
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

    const addVictims =  (e) => {
        e.preventDefault();
        console.log(victim);
        setFormErrors(validate(victim));
        // if (Object.keys(formErrors).length === 0 && addVictims) {
        //   console.log(victim);
        // }
        const dd =Object.keys(formErrors).length;
        console.log(dd);
        if(Object.keys(formErrors).length===0){
          setIsSubmit(true);
          addVictimsApi(victim).then((res)=>{
            console.log(res);
            console.log("Success regitered");
            toast.success('🦄 Registration of Victim Successfull..!!!', {
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
            toast.error('🦄 Oopss Server Error..!!!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          })
          
          ;
          
        }else{
          toast.error('🦄 Oopss Enter valid details..!!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        
        
       
        
        
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
              VICTIM REGISTRATION FORM
            </Alert.Heading>
          </Alert>
          <Form className=" p-4">
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Victims First Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  onChange={(e) => onValueChange(e)}
                  name="vfirstName"
                  required
                />
              </Col>
              <p style={{color:"red"}}>{formErrors.vfirstName}</p>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Victims Last Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={(e) => onValueChange(e)}
                  name="vlastName"
                  required
                />
              </Col>
              <p style={{color:"red"}}>{formErrors.vlastName}</p>
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
                  name="vMobno"
                  required
                />
              </Col>
              <p style={{color:"red"}}>{formErrors.vMobno}</p>
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
                  name="vAddress"
                  required
                />
              </Col>
              <p style={{color:"red"}}>{formErrors.vAddress}</p>
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
                  name="vCity"
                />
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
                  name="vEmail"
                />
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
                />
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
                />
              </Col>
              <p style={{color:"red"}}>{formErrors.password}</p>
            </Form.Group>
           

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Accept Terms & Check me out" />
            </Form.Group>
            <div className="pt-4">
              <Button
                onClick={(e) => addVictims(e)}
                variant="success"
                type="submit"
              >
                Register As Victim
              </Button>
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
