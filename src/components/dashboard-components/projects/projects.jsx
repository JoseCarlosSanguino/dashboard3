import React,{useEffect,useState} from "react";

import axios from 'axios';

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';



import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {

         const [result,setResult] = useState([]);
    
        //const axios = require('axios').default;
        const instanceLogin = axios.create({
            baseURL: 'https://gdp-api-eu.telemedcare.com/',
            timeout: 5000,

        })

        const instanceAPI = axios.create({
            baseURL: 'https://gdp-api-eu.telemedcare.com/',

        });

        const getData =async()=> {
            const { data } = await instanceLogin.post('doLogin', {
                "username": "josecarlos.sanguino",
                "password": "Sanguino@2021"
            })
            localStorage.setItem('token', data.item.userLogged.token);
            localStorage.setItem('groupId', data.item.userLogged.groupId);
            localStorage.setItem('userId', data.item.userLogged.id);
    
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    token: data.item.userLogged.token
                }
            }
            const resultado = await instanceAPI.get('patients?filter=&init=0&size=10', axiosConfig)
            
            setResult(
                 resultado.data.item.items
            
            )
            
        }
        console.log(result);
        useEffect(() => {
               getData();
        }, [])

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Projects of the Month</CardTitle>
                        <CardSubtitle>Overview of Latest Month</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                        <th className="text-center">Complete name</th>
                        <th className="text-center">Phone</th>
                        <th className="text-center">Access</th>
                        <th className="text-center">Group</th>
                        <th className="text-center">Actions</th>
                        <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                           result.map((item,index)=>{
                               return (
                                <tr key={index}>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <h5 className="mb-0 font-16 font-medium">{item.firstName} {item.lastName}</h5>
                                    </div>
                                </td>
                                <td className="text-center">{item.serviceNumber}</td>
                                <td className="text-center">{item.access}</td>
                                <td className="text-center">{item.group.code}</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                </td>
                                <td className="text-center" >
                                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                               )
                           })
                        
                        }
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default Projects;
