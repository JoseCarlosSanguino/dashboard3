import React,{useEffect,useState} from "react";

import axios from 'axios';

import { useHistory } from "react-router";
import  { Redirect } from 'react-router-dom';

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

const UserDetails = () => {
        

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
                        
                        <tr>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <h5 className="mb-0 font-16 font-medium"></h5>
                                    </div>
                                </td>
                                <td className="text-center"></td>
                                <td className="text-center"></td>
                                <td className="text-center"></td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                </td>
                                <td className="text-center" >
                                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                               
                          
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default UserDetails;
