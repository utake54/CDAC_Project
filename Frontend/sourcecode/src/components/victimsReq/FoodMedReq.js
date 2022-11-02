import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addRelief } from "../../api/api";

function RescueForm() {
  const initialInput = {
    reqType: "",
    cottonLiq: "",
    bangaes: "",
    dettol: "",
    painKiller: "",
    aidKit: "",
    water: "",
    riceDal: "",
    babyFood: "",
    biscuits: "",
    milk: "",
  };
  const [inputs, setinputs] = useState(initialInput);
  let onValueChange = (e) => {
    // console.log(e.target.value, e.target.name);
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const serverData = async () => {
    console.log("test data");
    await addRelief(inputs);
  };

  const navigate = useNavigate();
  const styles = {
    cardstyle: {
      width: "40rem",
      marginBottom: "20rem",
    },
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5">
          <Card style={styles.cardstyle}>
            <Alert variant="secondary">
              <div className="d-flex justify-content-end mb-4">
                VICTIM ID : 1212
              </div>
              <Alert.Heading className="d-flex justify-content-center">
                FOOD & MEDICAL REQUEST
              </Alert.Heading>
            </Alert>
            <div className="m-4">
              <Form>
                <h5>
                  <b> TYPE OF REQUEST</b>
                </h5>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        onChange={(e) => onValueChange(e)}
                        type="radio"
                        id="t1"
                        name="reqType"
                        value="food"
                        label="FOOD"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                      <Form.Check
                        onChange={(e) => onValueChange(e)}
                        type="radio"
                        id="t2"
                        name="reqType"
                        value="medical"
                        label="MEDICAL"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                      <Form.Check
                        onChange={(e) => onValueChange(e)}
                        type="radio"
                        name="reqType"
                        id="t3"
                        value="food , medical"
                        label="BOTH"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <h5>
                  <b> Select Medical Item with Quality</b>
                </h5>
                <Row className="pt-3">
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label> Cotton and Antiseptic Liquids :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="cottonLiq"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label>
                        Bandages Rolls and Medical Tapes :
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="bangaes"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label>Dettol :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="dettol"
                    />
                  </Col>
                </Row>{" "}
                <Row>
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label>Pain Killers :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="painKiller"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label>First Aid Kit :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="aidKit"
                    />
                  </Col>
                </Row>
                <br />
                <h5>
                  <b>Select Food Items with Quantity</b>
                </h5>
                <Row className="pt-3">
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label>Drinking Water :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="water"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label>Rice and Dal :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="riceDal"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label>Baby Food :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="babyFood"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label>Biscuits :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="biscuits"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Label>Milk :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      onChange={(e) => onValueChange(e)}
                      size="sm"
                      type="number"
                      name="milk"
                    />
                  </Col>
                </Row>
                <br />
                <div className="d-flex justify-content-center pt-4">
                  <Button
                    onClick={(e) => {
                      navigate("/FoodMedReceipt");
                      e.preventDefault();
                      serverData();
                    }}
                    variant="success"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RescueForm;
