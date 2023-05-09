import styled from "styled-components";

export const Section = styled.div`
    @media (min-width: ${({theme}) => theme.media.mobile}){
        padding-top: 40px;
        padding-bottom: 100px;
    }
    @media (min-width: ${({theme}) => theme.media.tablet}){
        padding-top: 90px;
    }
    @media (min-width: ${({theme}) => theme.media.desktop}){
        padding-top: 70px;
        padding-bottom: 200px;
    }
`