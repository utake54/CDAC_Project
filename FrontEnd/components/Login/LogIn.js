


import React, { useEffect, useState } from 'react'
import { Button,Form,Row,Dropdown,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";


import { getLoginApi } from '../../services/api';
import { doLogin } from '../../auth';
import { toast } from 'react-toastify';
let User;
const InitialValues ={
      "roleType" : "",
      "username" : "",
      "password" : ""
}

export default function LogIn() {

  const [login,setLogin] = useState(InitialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const navigate=useNavigate();
  
  
    const onValueChange2 = (e) =>{
        console.log(e.target.name, e.target.innerText);
        setLogin({...login, [e.target.name] : e.target.innerText})
        console.log(login);
        if(e.target.innerText==="Victims"){
          console.log("Role of USer Victims");
        }
        if(e.target.innerText==="Organization"){
          console.log("Role of USer Organization");
        }
        if(e.target.innerText==="Volunteer"){
          console.log("Role of USer Volunteer");
        }
      }
    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setLogin({...login, [e.target.name] : e.target.value})
        console.log(login);
      }
     
   
        
        useEffect(() => {
          console.log(formErrors);
          if (Object.keys(formErrors).length === 0 && loginUser) {
            console.log(login);
          }
        }, [formErrors]); 

        const validate = (values) => {
          const errors = {};
          
          if (!values.username) {
            errors.username = "Username is required!";
            //toast errors and return
          }
          if (!values.roleType) {
            errors.roleType = "Type Of User is Required!";
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
        const loginUser =  (e) => {
          // await getLoginApi(login);\
          console.log("test");
          e.preventDefault();
          setFormErrors(validate(login));
          if(Object.keys(formErrors).length===0){
            setIsSubmit(true);
          if(login.roleType==="Victims"){
            console.log("Vitims ROle selected");
            // getVictimsDetails(login);
            // console.log(serverUser.data);
            getLoginApi(login).then((token) =>{
              console.log("Get Login Succees")
              console.log(token)
              //toast sucess
              toast.success('🦄 Login of Victim Successfull..!!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              //save data to local storage
              doLogin(token,() =>{
                console.log("Token Details stored to local storage")
                //redirect to victim dashboar
                navigate("/victims/dashboard");
              })

            }).catch((error)=>{
              console.log(error)
              if(error.response.status==400 || error.response.status==404){
                  console.log(error.response.data.message)
                  toast.error('🦄 Oopss something went wrong..!!!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
              }else{
                console.log("somehting went alah hi server pe")
                toast.error('🦄 Oopss something went wrong on Server..!!!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
              }
              //toast error
            })
          }
          }
          
            
        }  
        
       
      //   const getVictimsDetails =   async (e) =>{
      //     let response = await getLoginApi(login);
      //     console.log(response);
      //     setServerUser(response);
      //     let res=response;
      //     console.log(res);
          
      // }
      const styles = {
        cardstyle: {
          width: "30rem",
          marginBottom: "20rem",
        },
      };
        
      User=login;
  return (
    <div className="d-flex justify-content-center">
    <div className="pt-5 pb-5 ">
      <Card style={styles.cardstyle}>
        <Alert variant="secondary">
          <Alert.Heading className="d-flex justify-content-center">
            LOG IN PAGE
          </Alert.Heading>
        </Alert>

        <form className="p-4">
          {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : (
            <pre>{JSON.stringify(login, undefined, 2)}</pre>
          )} */}
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                User Type
              </Form.Label>
              <Col sm={9}>
                <Dropdown column sm={3}>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select Type of User
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      id="victims"
                      onClick={(e) => {
                        onValueChange2(e);
                      }}
                      name="roleType"
                    >
                      Victims
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="organization"
                      onClick={(e) => {
                        onValueChange2(e);
                      }}
                      name="roleType"
                    >
                      Organization
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="volunteer"
                      onClick={(e) => {
                        onValueChange2(e);
                      }}
                      name="roleType"
                    >
                      Volunteer
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <p style={{color:"red"}}>{formErrors.roleType}</p>
              </Col>
            </Form.Group>
          </Form>
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
              />{" "}
            </Col>
            <p style={{color:"red"}}>{formErrors.password}</p>
          </Form.Group>
          <Button
            onClick={(e) => loginUser(e)}
            variant="success"
            type="login"
            // title='Umer'
          >
            Log In
          </Button>
        </form>
      </Card>
    </div>
  </div>
  )
}


export {User};