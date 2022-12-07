import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Stack } from "react-bootstrap";
// import { getRelief } from "../../api/api";
import { useState, useEffect } from "react";

import { Table } from "react-bootstrap";
import { User } from "./FoodMedReq";
import { useNavigate } from "react-router-dom";

function FoodMedReceipt() {
  const [reliefData, setVictims] = useState({});
  
  const navigate = useNavigate();
  console.log("testing");
  useEffect(() => {
    getreliefData();
  }, []);

  const getreliefData = async () => {
    // let res = await getRelief("2");
  //   console.log(res);
  //   setVictims(res.data);
   };

  const styles = {
    tbl: {
      width: "40vw",
    },
    cardstyle: {
      width: "40rem",
      marginBottom: "20rem",
    },
    formsize: {
      lineHeight: "2rem",
    },
  };
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5 ">
          <Card style={styles.cardstyle}>
            <Alert variant="secondary">
              <div className="d-flex justify-content-end mb-4">
                VICTIM ID : 
              </div>
              <Alert.Heading className="d-flex justify-content-center">
                FOOD & MEDICAL REQUEST RECEIPT
              </Alert.Heading>
            </Alert>

            <Form className="mt-1 p-3">
              <div style={styles.formsize}>
                <b>Dear Alex Peterson (4545456)</b>
                <p>
                  Thank You, for using our online portal. Your Booking details
                  are indicated below.
                </p>
                <br></br>
                <Stack direction="horizontal" gap={5}>
                  <div>
                    <b>Booking ID :</b> 45456{" "}
                  </div>
                  <div>
                    <b> Order Date :</b> {date}
                  </div>
                </Stack>
                <div>
                  <b> Name :</b> 
                </div>
                <div>
                  <b> Address :</b> .........
                </div>
                <br />
                <div>
                  <b> Product Details:</b>
                </div>
              </div>
              <Table bordered hover>
                <tbody>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Qty</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Request Type - {User.reqType}</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td> Cotton Liquid </td>
                    <td>{User.cottonLiq}</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td> Bangaes </td>
                    <td>{User.bangaes}</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td> Dettol </td>
                    <td>{User.dettol}</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td> PainKiller </td>
                    <td>{User.painKiller}</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> Aid Kit </td>
                    <td>{User.aidKit}</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td> Water Bottle</td>
                    <td>{User.water}</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td> Rice Dal </td>
                    <td>{User.riceDal}</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td> Baby Food </td>
                    <td>{User.babyFood}</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td> Biscuits </td>
                    <td>{User.biscuits}</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td> Milk </td>
                    <td>{User.milk}</td>
                  </tr>

                  <tr></tr>
                </tbody>
              </Table>

              <div className="d-flex justify-content-center mt-5">
                <Button variant="success" onClick={navigate("/")} type="submit">
                  Print
                </Button>
                
              </div>
              <div className="d-flex justify-content-center mt-5">
                
                <Button variant="success"  onClick={(e) => {
                        navigate("/victims/dashboard");
                      }} type="submit">
                  Back
                </Button>
              </div>
              
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FoodMedReceipt;
