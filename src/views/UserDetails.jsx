import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SimpleDateTime  from 'react-simple-timestamp-to-date';

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
    Table,
   
    CardImg,
    CardImgOverlay,
    CardText,
   
   
    
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
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
    let currentTimestamp ;
       console.log(data);
    return (
        
        <div>
             {
            data.map((item, index) => {
             return (
                <div key={index}>
                  <Row>
                    <Col sm="12">
                      <Card>
                      
                       
                        <CardHeader>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', }).format(item.timestamp)}</CardHeader>
                          <CardBody>
                              <CardTitle>{item.peripheralMeasureDesc}</CardTitle>
                              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                              <Button>Go somewhere</Button>
                          </CardBody>
                          

                      </Card>
                      
                    </Col>
                
                    </Row>
                </div>   
                                   
                                )
            })
          }

        </div>
       
    );
}

export default UserDetails;
