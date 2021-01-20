import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './card.module.css'

import CardData from '../../data.json'

export const CardBox = () => {
    const CardList = CardData.features.map((CardL)=>{
        return <Col lg={4} key={CardL.id}>
            <Card>
                <Card.Img variant="top" src={CardL.fimage} />
                <Card.Body>
                    <Card.Title>{CardL.title}</Card.Title>
                    <Card.Text>{CardL.description}</Card.Text>
                    <Link to={CardL.link}>{CardL.btn_text}</Link>
                </Card.Body>
            </Card>
        </Col>
    });
    return (
        <>
            <Container className="p-5">
                <Row>
                    {CardList}
                </Row>
            </Container>
        </>
    )
}
