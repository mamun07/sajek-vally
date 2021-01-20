import styled from 'styled-components'

   export const SliderContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items:center;
        height: 550px;
        position: relative;
        z-index: 1;
        &:before{
            width: 100%;
            height: 100%;
            position: absolute;
            background: #000;
            z-index: 2;
            content: "";
            opacity: .6;
        }
        @media (max-width: 667px){
            height: 630px;
        }
    `
    export const SliderBg = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    `
    export const SliderVideo = styled.video`
        width:100%;
        height:100%;
        -o-object-fit: cover;
        object-fit: cover;
        background: #000;
    `
    export const SliderContent = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        text-align: right;
        padding: 80px 0px;
    `
    export const TSPAN = styled.span`
        color: #e4e4e4;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 15px;
        display: inherit;
    `
    export const TH1 = styled.h1`
        color: #fff;
        font-size: 50px;
        font-weight: 900;
        letter-spacing: 2px;
        margin-bottom: 25px;
        display: inherit;
        line-height: 70px;
        @media (max-width: 667px){
            font-size: 30px;
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 20px;
            display: inherit;
            line-height: 45px;
        }
    `
    export const TP = styled.p`
        color: #ececec;
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        line-height: 26px;
        padding: 0 0 0 120px;

        @media (max-width: 667px){
            padding: 0 0 0 0px;
        }
    `