import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
// import { paymentmode } from '../../service/service';
import Alert from "react-bootstrap/Alert";
import axios from 'axios';
import image from '../../images/logo.png';



function loadScript(src) {
  return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
  });
}



function Moneyhome() {
  const styles = {
    cardstyle: {
      width: "29rem",
      marginBottom: "20rem",
    },
  };
  const navigate = useNavigate();

const initialvalues={
  amount:"",
  paymentmode:""
}

const [user,setUser]=useState(initialvalues);
const [selected, setSelected] = useState('yes');
  const handleChange = event => {
    setUser({...user,[event.target.name]:event.target.value})
    console.log(user);
    setSelected(event.target.value);
  }
 
  
  const  Addpaymentmode=  ()=>{
    // await paymentmode(user);
    if(user.amount==="" || user.amount===null){
      //toast alert
      return ;
    }
    if(selected==="upi"){
      console.log("umerya");
      console.log(user.amount);
      const resss =   loadScript(
        "http://checkout.razorpay.com/v1/checkout.js"

        );
        if (!resss) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
      }
     // axios.post("http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/api/v1/donation",user).then((res)=>{
        axios.post("http://localhost:8081/api/v1/donation",user).then((res)=>{
        console.log(res.data);
        if(res.status==="created"){


          let options = {
            key : 'rzp_test_ADCzjRojlf5y2h',
            amount : res.amount,
            currency : 'INR',
            name : 'ASSAM FLOOD RELIEF MANAGMENT',
            description : 'Helping Hands Towards Need',
            image : {image},
            oder_id : res.id,
            handler : function(ress){
              console.log(ress.razorpay_payment_id)
              console.log(ress.razorpay_order_id)
              console.log(ress.razorpay_signature)
              console.log("PAYMENT SUCCESSFUL")
              alert("Congrats for your helping hand");
            },
            prefill : {
              name : "",
              email : "",
              contact : "",
            },
            notes : {
              address : "Umer's House"
            },
            theme : {
              color: "#3399cc",
            },


          };
          const rzp =new window.Razorpay(options);
          //let rzp = new Razorpay(options);
          
          rzp.on('payment.failed', function (response){
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);
                alert("Oooooopppppsss Payment Failed ..!");
              });
          rzp.open();
        }
      }).catch((error)=>{
        console.log(error.message);
      })
    //  { $.ajax({
    //       url : '/user/donation',
    //       data : {amount:user.amount},
    //       contentType : 'application/json',
    //       type : 'POST',
    //       dataType : 'json'
    //   })}  
    }
  }


  return (

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
            <table align="center">


              <h5>Enter amount in rupees</h5>


              <input name='amount' type='numbers' placeholder='Amount'  onChange={(e) => handleChange(e)}  />

              <br></br><br></br>

              <h5>Select payment mode</h5>



              <input type="radio" id="upi" name="paymentmode" value="upi" checked={selected === 'upi' }
                onChange={handleChange} />
              <lable value="upi">UPI</lable><br></br>

              <input type="radio" id="card" name="paymentmode" value="card" checked={selected === 'card'}
                onChange={handleChange} />
              <lable value="card">Credit Card/Debit Card</lable><br></br>

              <input type="radio" id="qr" name="paymentmode" value="qr" checked={selected === 'qr'}
                onChange={handleChange} />
              <lable value="qr">Scane QR code</lable><br></br>
              <br></br>


              <Row>
                <Col>

                  <Button className="d-flex justify-content-left"


                    onClick={() => {
                      Addpaymentmode();
                      // if (selected === 'upi') {
                      //   navigate("/upi");
                      // } else if (selected === 'card') {
                      //   navigate("/card");
                      // }
                      // else if (selected === 'qr') {
                      //   navigate("/qr");
                      // }
                      // else {
                      //   alert('Please select Payment method')
                      // }
                    }
                    }variant="success">Next</Button>


                </Col>
                <Col>
                  <Button className="d-flex justify-content-right" onClick={() => { navigate("/donationhome"); }}variant="success">Back</Button>
                </Col>
              </Row>

            </table>
          </form>
        </Card.Body>
      </Card>
    </div>
    </div>








  );
}

export default Moneyhome;