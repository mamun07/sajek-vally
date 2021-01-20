import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Hero } from '../../elements/hero/Hero'
import { CardBox } from '../../elements/card/CardBox'
import { About } from '../../elements/about/About'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="slider-main-area">
                    <Hero/>
                </div>
                <div className="slider-main-area">
                    <CardBox/>
                </div>
                <div className="about-main-area">
                    <About/>
                </div>
                <Container>
                    <Row>
                        <Col md={12}>Team</Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={12}>CountUp</Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={12}>News Letter</Col>
                    </Row>
                </Container>
            </>
        )
    }
}
