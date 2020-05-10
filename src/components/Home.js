import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import logo from './logo.png'

import {FaInstagram , FaFacebookF,FaTwitter} from 'react-icons/fa'



function Home() {
    return (
        <div>
           <h4 style={{fontSize:'20px' ,padding:'15px', margin:0 ,fontSize:'40px'
           ,fontWeight:'400',color:"white"}}>
           Welcome to My Github Page</h4>
           <div>
            <Card className="cardclass">
                <CardImg top width="100%" src={logo} alt="" />
                <CardBody>
                <CardTitle>Nikhil Jindal</CardTitle>
                <CardSubtitle>Web Developer</CardSubtitle>
                <CardText>Built using ReactJS and Github API</CardText>
                <FaInstagram className="icons" size="1.8rem"/><FaFacebookF className="icons" size="1.8rem"/><FaTwitter className="icons" size="1.8rem"/>
                </CardBody>
            </Card>
           </div>
        </div>
    )
}

export default Home
