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
            console.log(resultado);
            setResult(
                 resultado.data.item.items
            )
            console.log(result);
        }

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
                            <th className="border-0">Team Lead</th>
                            <th className="border-0">Project</th>

                            <th className="border-0">Status</th>
                            <th className="border-0">Weeks</th>
                            <th className="border-0">Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
                                </div>
                            </td>
                            <td>Elite Admin</td>

                            <td>
                                <i className="fa fa-circle text-warning" id="tlp1"></i>

                            </td>
                            <td>35</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default Projects;
