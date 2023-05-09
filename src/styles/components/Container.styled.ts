import styled from "styled-components";

export const Container = styled.div`
    
    
    @media (min-width: ${({theme}) => theme.media.mobile}){
        padding-left: 20px;
        padding-right: 20px;
    }
    @media (min-width: ${({theme}) => theme.media.tablet}){
        padding-left: 32px;
        padding-right: 32px;
    }
    @media (min-width: ${({theme}) => theme.media.desktop}){
        padding-left: 16px;
        padding-right: 16px;
    }
`