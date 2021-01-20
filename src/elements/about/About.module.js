import styled from 'styled-components'
import {Image} from 'react-bootstrap'


export const ImageArea = styled.div`
    clip-path: polygon(10% 0,100% 0%,90% 100%,0 100%);
`
export const AboutBG = styled.div`
    background: #ddd;
    padding: 100px 0;
`
export const Images = styled(Image)`
    max-width: 100%;
`