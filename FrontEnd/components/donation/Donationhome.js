import "bootstrap/dist/css/bootstrap.min.css";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import Alert from "react-bootstrap/Alert";

function Donationhome() {
  const styles = {
    cardstyle: {
      width: "29rem",
      marginBottom: "20rem",
    },
  };
  const navigate = useNavigate();

  const initialvalues = {
    d_fname: "",  
    d_lname: "",
    d_addr: "",
    d_city: "",
    d_contact: "",
    d_email: "",
    donation_type: "",

  }


  const [user, setUser] = useState(initialvalues);
  const [selected, setSelected] = useState('yes');
  const handleChange = event => {
    setUser({...user,[event.target.name]:event.target.value})
    console.log(user);
    setSelected(event.target.value);
  }
const Adddonaterdetails=()=>{
  //await Adddonator(user);
}
  return (
    <>
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5">
      <Card style={styles.cardstyle}>
          
          <Alert variant="secondary">
         
          <Alert.Heading className="d-flex justify-content-center">
                Please fill the details below
              </Alert.Heading>
            </Alert>

            <Card.Body>
            <form>
              <table>
              <h6>Personal details</h6>
                <Row>
                  <Col>
                    <input name="d_fname" placeholder='First Name'  
                    onChange={(e) => handleChange(e)}   />

                  </Col>
                  <Col>
                    <input onChange={(e) => handleChange(e)} name="d_lname" placeholder='Last Name' />
                  </Col>
                </Row>
<br></br>
                <Row>
                    <h6>Address details</h6>
                  </Row>
                <Row>
                  <Col>
                    <input onChange={(e) => handleChange(e)} name="d_addr" placeholder='Address line 1' />
                  </Col>
                  <Col>
                    <input onChange={(e) => handleChange(e)} name="d_city" placeholder='Address line 2' />
                  </Col>
                </Row>
<br></br>
                <Row>
                <h6>Contact details</h6>
                </Row>

                <Row>
                  <Col>
                    <input onChange={(e) => handleChange(e)} name="d_email" placeholder='Email id' />
                  </Col>
                  <Col>
                    <input onChange={(e) => handleChange(e)} name="d_contact" placeholder='Mobile Number' />
                  </Col>
                </Row>
<br></br>
                <Row>
                <h6>Donation type</h6>
                </Row>
                <input

                  type="radio"
                  id="money"
                  name="donation_type"
                  value="money"
                  checked={selected === 'money'}
                  onChange={handleChange}
                />
                <label htmlFor="money">Donate Money</label>




                <br></br>


                <input
                  type="radio"
                  id="clothes"
                  name="DONATION_TYPE"
                  value="clothes"

                  onChange={handleChange}
                  checked={selected === 'clothes'}
                />
                <label for="clothes">Food/Clothes</label>


                <br></br><br></br>


                <Row>
                  <Col sm={7}>
                    <Button className="d-flex justify-content-center"



                      onClick={() => {
                        Adddonaterdetails();
                        if (selected === 'money') {
                          navigate("/moneyhome");
                          

                        }
                        else if (selected === 'clothes') {
                          navigate("/Foodcloth");
                        }
                        else {
                          alert('Please select Donation type')
                        }
                      }
                      }variant="success">Next</Button>
                  </Col>
                  <Col sm={5}>

                    <Button 
className="d-flex justify-content-right"
                      onClick={() => { navigate("/"); }} variant="success">Back</Button>
                  </Col>
                </Row>
              </table>
            </form>
            </Card.Body>
        </Card>
      </div>
      </div>
    </>
  );
}

export default Donationhome;


