package com.floodmanagement.floodmanagement.controller;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.razorpay.*;



@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class DonationController {
	
		@PostMapping("/donation")
		
		public String createOrder(@RequestBody Map<String , Object> data) throws RazorpayException {
			System.out.println(data);
			int amt = Integer.parseInt(data.get("amount").toString());
			var client = new RazorpayClient("rzp_test_ADCzjRojlf5y2h", "LoCbAls9ERIUrEzJVDwhghl9");
			
			JSONObject ob = new JSONObject();
			ob.put("amount", amt * 100);
			ob.put("currency", "INR");
			ob.put("receipt", "txn_363669");
			
			Order order =  client.orders.create(ob);
			System.out.println(order);
			
			return order.toString();
		}
	
}

			