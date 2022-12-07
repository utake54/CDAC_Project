import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { addRescueRequest, AWS_API, LOCAL_API } from "../../services/api";
import { getCurrentUserDetail, getToken } from "../../auth";
import axios from "axios";
import { toast } from "react-toastify";


let User;
function RescueForm() {
  const initialInput = {
    vContact: "",
    vAddress: "",
    vCount: "",
    username:"",
  };
  const [inputs, setinputs] = useState(initialInput);
  const [login, setLogin] = useState(undefined);
  let onValueChange = (e) => {
    //  console.log(e.target.value,e.target.name);
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };


  useEffect(() => {

    setLogin(getCurrentUserDetail())
    
   },[])
    
   
  const serverData =  (e) => {

    const tt= getToken();
    console.log(tt);

    //if amazon sevrer then use AWS_API
    axios.post(`${LOCAL_API}/rescue/request`,inputs ,{
    headers:{
      Accept: 'application/json',
     'Content-Type': 'application/json',
      Authorization: 'Bearer ' + tt // if you use token
  }
  })
    .then(function (response) {
      console.log(response);
      toast.success('🦄 Request for Rescue Submitted Hold On..!!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      navigate("/victims/requestSlip");
    })
    .catch(function (error) {
      console.log(error);
      toast.error('🦄 Oopss something went wrong..!!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    });


    //  addRescueRequest(inputs).then((res)=>{
    //   console.log("successful login");
    //   navigate("/victims/requestSlip")
    //  }).catch((err)=>{
    //   console.log("error for submit")
    //   navigate('/LogIn');
    //  })
    
    // .then((res)=>{
    //   console.log(res);
    //   console.log("Success regitered");
        
    // }).catch((error)=>{
    //   console.log(error);
    //   console.log("Error registre");
    // })
  
    ;
    
    
   
}

  const navigate = useNavigate();
  const styles = {
    cardstyle: {
      width: "40rem",
      marginBottom: "20rem",
    },
  };
  User=inputs;
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5 ">
          <Card style={styles.cardstyle}>
            <Alert variant="secondary">
              <div className="d-flex justify-content-end mb-4">
                VICTIM ID : 1212
              </div>
              <Alert.Heading className="d-flex justify-content-center">
                RESCUE FORM VICTIMS
              </Alert.Heading>
            </Alert>
            
            <Form className="mt-1 p-3">
              <Form.Group className="mb-3">
                <Form.Label>Contact No.:</Form.Label>
                <Form.Control
                  type="number"
                  name="vContact"
                  onChange={(e) => onValueChange(e)}
                  placeholder="Enter Contact Number"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>User-Name:</Form.Label>
                <Form.Control
                  onChange={(e) => onValueChange(e)}
                  type="text"
                  name="username"
                  placeholder="Enter Your Address"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Current Address:</Form.Label>
                <Form.Control
                  onChange={(e) => onValueChange(e)}
                  type="text"
                  name="vAddress"
                  placeholder="Enter Your Address"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Count of People:</Form.Label>
                <Form.Control
                  onChange={(e) => onValueChange(e)}
                  type="number"
                  name="vCount"
                  placeholder="Enter Count in Number"
                />
              </Form.Group>

              <Row className="pt-3">
                <Col>
                  {" "}
                  <Button
                    onClick={(e) => {
                      
                      e.preventDefault();
                      serverData();
                    }}
                    variant="success"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
                <Col>
                  <span className="d-flex justify-content-end">
                    <Button
                      onClick={(e) => {
                        navigate("/victims/dashboard");
                        e.preventDefault();
                        serverData();
                      }}
                      variant="success"
                      type="submit"
                    >
                      Back
                    </Button>
                  </span>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RescueForm;


export {User}