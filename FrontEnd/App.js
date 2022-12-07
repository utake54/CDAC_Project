import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import "./App.css";
import FoodMedReceipt from "./components/victimsReq/FoodMedReceipt";
import FoodMedReq from "./components/victimsReq/FoodMedReq";
import RequestSlip from "./components/victimsReq/RequestSlip";
import RescueForm from "./components/victimsReq/RescueForm";
import ShelterBooking from "./components/victimsReq/ShelterBooking";
import ShelterBookingReceipt from "./components/victimsReq/ShelterBookingReceipt";
import ShelterReliefCamp from "./components/victimsReq/ShelterReliefCamp";
import VictimReqMain from "./components/victimsReq/VictimReqMain";
import Header1 from "./components/NavBar/NavBar";
import Donationhome from "./components/donation/Donationhome";
import Moneyhome from "./components/donation/Moneyhome";
import Foodcloth from "./components/donation/Foodcloth";
import Card1 from "./components/donation/Card1";
import Upi from "./components/donation/Upi";
import Qr1 from "./components/donation/Qr1";
import Success from "./components/donation/Success";
import ReliefHome from "./components/reliefProvider/ReliefHome";
import RescueReq from "./components/reliefProvider/RescueReq";
import FoodReq from "./components/reliefProvider/FoodReq";
import LogIn from "./components/Login/LogIn";
import RegistrationHome from "./components/Registrations/RegistrationHome";
import VictimsRegistration from "./components/Registrations/VictimsRegistration";
import OrganizationRegistration from "./components/Registrations/OrganizationRegistration";
import VolunteerRegistration from "./components/Registrations/VolunteerRegistration";
import Home from "./components/pages/Home";
import ListOfVictims from "./components/pages/ListOfVictims"
import PrivateRoute from "./components/pages/PrivateRoute";

function App() {
  return (
    <>
      
      <div className="Allpages">
        <BrowserRouter>
        <ToastContainer />
        <Header1/>
        <marquee behavior="slide" direction="left"><h1 style={{color: "red"}}><b><u>ASSAM EMERGENCY HELPLINE NUMBER :- 932042131313/2342482 </u></b></h1></marquee>

          <Routes>
            {/* .....Umer routes */}
            <Route path="/" element={<Home/>} />
            <Route path="/ListOfVictims" element={<ListOfVictims/>} />
            <Route path="/RegistrationHome" element={<RegistrationHome />} />
            <Route
              path="/RegistrationHome/VictimsRegistration"
              element={<VictimsRegistration />}
            />
            <Route
              path="/RegistrationHome/OrganizationRegistration"
              element={<OrganizationRegistration />}
            />
            <Route
              path="/RegistrationHome/VolunteerRegistration"
              element={<VolunteerRegistration />}
            />

            <Route path="/LogIn" element={<LogIn />} />

            {/* .....sunny routes */}
            
            
           
           
            <Route path="/victims" element={<PrivateRoute/>}>
                  <Route path="dashboard" element={<VictimReqMain />}></Route>
                  <Route path="rescueForm" element={<RescueForm />}></Route>
                  <Route path="requestSlip" element={<RequestSlip />}></Route>
                  <Route path="foodMedReq" element={<FoodMedReq />}></Route>
            <Route path="foodMedReceipt" element={<FoodMedReceipt />}></Route>
            <Route
              path="shelterReliefCamp"
              element={<ShelterReliefCamp />}
            ></Route>
            <Route path="shelterBooking" element={<ShelterBooking />}></Route>
            <Route
              path="shelterBookingReceipt"
              element={<ShelterBookingReceipt />}
            ></Route>
            </Route>
            
            {/* .....omkar routes */}
            <Route path="/Card" element={<Card1 />} />
            <Route path="/qr" element={<Qr1 />} />
            <Route path="/upi" element={<Upi />} />
            <Route path="/moneyhome" element={<Moneyhome />} />
            <Route path="/donationhome" element={<Donationhome />} />
            <Route path="/Foodcloth" element={<Foodcloth />} />
            <Route path="/success" element={<Success />} />
           
            {/* .....Shubham routes */}
            <Route path="/ReliefHome" element={<ReliefHome />} />
            <Route path="/relief2" element={<RescueReq />} />
            <Route path="/relief3" element={<FoodReq />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
