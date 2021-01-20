import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const SButton = styled.div`
    padding: 0;
`
export const SButtonLink = styled(Link)`
    padding: 15px 40px;
    background: #fff;
    border-radius: 50px;
    margin: 20px 0 0 0;
    display: inline-block;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 500;
    transition: 0.6s;
    &:hover{
        text-decoration: none;
        color: white;
        background: #007118;
    }
`