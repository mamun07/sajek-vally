import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SingleButton } from '../button/SingleButton'
import {SliderContainer, SliderBg, SliderVideo, SliderContent, TH1, TSPAN, TP} from './hero.module'
import Video from './media/tfew.mp4'
import HeroData from '../../data.json'

export const Hero = () => {
    const HeroSlider = HeroData.Hero_slider.map((HeroSliders)=>{
        return <div key={HeroSliders.id}>
            <TSPAN>{HeroSliders.sub_title}</TSPAN>
            <TH1>{HeroSliders.title}</TH1>
            <TP>{HeroSliders.description}</TP>
            <SingleButton bt={HeroSliders.btn_text} bl={HeroSliders.link}/>
        </div>
    });
    return (
        <>
            <SliderContainer>

                <SliderBg>
                    <SliderVideo autoPlay loop muted src={Video} type='video/mp4' />
                </SliderBg>
                <SliderContent>
                    <Container>
                        <Row>
                            <Col sm={12} md={{span: 8, offset: 4 }}>
                                {HeroSlider}
                            </Col>
                        </Row>
                    </Container>
                </SliderContent>

            </SliderContainer>
        </>
    )
}
