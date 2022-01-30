import React from "react";
import styled from "styled-components";


const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-content: center; 
justify-content: center;
overflow: hidden;
background: #333333;
`

const Heading = styled.h1`
color: #ffffff;
`

const ComingSoon = () => {

    return (
        <Container>
        <Heading>Welcome.</Heading>
        </Container>
    )
}


export default ComingSoon
