import axios from "axios";

// const API_URL_donatorhomepage = 'http://localhost:8080';
const API_URL_donatorhomepage = 'http://localhost:3002/donatordetail';
const API_URL_fooddonationdetails = 'http://localhost:3002/fooddonatordetail';
const API_URL_paymentmode = 'http://localhost:3002/paymentmode';
const API_URL_card = 'http://localhost:3002/card';
const API_URL_upi = 'http://localhost:3002/upi';
   
export const adddonator = async (data) => {
   try {
      // return await axios.post(`{API_URL_donatorhomepage}/donatordetail`, data);
      return await axios.post(API_URL_donatorhomepage, data);
   }
   catch (error) {
      console.log("error with my side", error.message);
   }

}


export const donatorslip = async () => {
   try {
      return await axios.get(API_URL_donatorhomepage);
   }
   catch (error) {
      console.log("error with my side in donator slip", error.message);
   }

}


export const Addfood = async (data) => {
   try {
      return await axios.post(API_URL_fooddonationdetails, data);
   }
   catch (error) {
      console.log("error with my side", error.message);
   }

}


export const fooddonatorslip = async () => {
   try {
      return await axios.get(API_URL_fooddonationdetails);
   }
   catch (error) {
      console.log("error with my side in donator slip", error.message);
   }

}



export const paymentmode = async (data) => {
   try {
      return await axios.post(API_URL_paymentmode, data);
   }
   catch (error) {
      console.log("error with my payment", error.message);
   }

}







export const Addcard = async (data) => {
   try {
      return await axios.post(API_URL_card, data);
   }
   catch (error) {
      console.log("error with my card", error.message);
   }

}




export const Addupi = async (data) => {
   try {
      return await axios.post(API_URL_upi, data);
   }
   catch (error) {
      console.log("error with my upi", error.message);
   }

}


