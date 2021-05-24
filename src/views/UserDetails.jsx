import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    let { id } = useParams()
    const [data, setData] = useState([])
    // const instanceLogin = axios.create({
    //     baseURL: 'https://gdp-api-eu.telemedcare.com/',
    //     timeout: 5000,
    // })
    const instanceAPI = axios.create({
        baseURL: 'https://gdp-api-eu.telemedcare.com/',
    });

    const getDataUserId = async () => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                token: localStorage.getItem('token')
            }
        }
        const { data: { item: { items } } } = await instanceAPI.get(`patients/${id}/measures?init=0&size=30`, axiosConfig)
        setData(items)
    }
    useEffect(() => {
        getDataUserId();
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
                            <th className="text-center">Description</th>
                            <th className="text-center">Code</th>
                            <th className="text-center">Id</th>
                            <th className="text-center">Suscribe</th>
                            <th className="text-center">Actions</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index} style={{ cursor: 'pointer' }}>
                                        <td>
                                            <div className="d-flex no-block align-items-center">
                                                <h5 className="mb-0 font-16 font-medium">{item.peripheralMeasureDesc}</h5>
                                            </div>
                                        </td>
                                        <td className="text-center">{item.items[0].type.code}</td>
                                        <td className="text-center">{item.id}</td>
                                        <td className="text-center">{item.peripheral.subscribe ? 'yes' : 'No'}</td>
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

export default UserDetails;
