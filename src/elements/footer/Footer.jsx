import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
    return (
        <>
            <div className="bg-dark text-white pt-3 pb-3">
                <Container>
                    <Row>
                        <Col md={12}>Footer Area</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
