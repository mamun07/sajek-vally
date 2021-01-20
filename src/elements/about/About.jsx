import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import {AboutBG, ImageArea, Images} from './About.module'
import {Link} from 'react-router-dom'
import AboutHome from '../../data.json'

export const About = () => {
    const CardList = AboutHome.about_home.map((homeAbout)=>{
        return <Row key={homeAbout.id}>
            <Col lg={6} sm={12}>
                <ImageArea>
                    <Images src={homeAbout.fimage}/>
                </ImageArea>
            </Col>
            <Col lg={6} sm={12}>
                <div className="about-home-content">
                    <h1>{homeAbout.title}</h1>
                    <p>{homeAbout.description}</p>
                    <Link to="/about-us">View More</Link>
                </div>
            </Col>
        </Row>

    });
    return (
        <>
            <AboutBG>
                <Container>
                    {CardList}
                </Container>
            </AboutBG>
        </>
    )
}
