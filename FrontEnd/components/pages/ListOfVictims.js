import React from 'react'
import {useEffect, useState} from 'react'
import { Table } from 'react-bootstrap';
import { getVictimsApi } from '../../services/api'

export default function ListOfVictims() {
    const [victims, setVictims] = useState([]);

    useEffect(() => {
        getVictimsDetails();
    }, [] )

    const getVictimsDetails = async () =>{
        let response = await getVictimsApi();
        console.log(response.data);
        setVictims(response.data);
    }
  return (
    <div>
      <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>City</th>
                <th>Email</th>
                <th>UserName</th>
                <th>Password</th>
              
                
            </tr>   
        </thead>
        <tbody>
            {victims.map((victim) => (
                <tr key={victim.id}>
                    <td>{victim.id}</td>
                    <td>{victim.vfirstName}</td>
                    <td>{victim.vlastName}</td>
                    <td>{victim.vMobno}</td>
                    <td>{victim.vAddress}</td>
                    <td>{victim.vCity}</td>
                    <td>{victim.vEmail}</td>
                    <td>{victim.vUserName}</td>
                    <td>{victim.vPassword}</td>
                   
                </tr>
            ))}   
        </tbody>
      </Table>
    </div>
  )
}
