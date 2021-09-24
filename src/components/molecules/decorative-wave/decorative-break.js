import React from 'react'
import styled from "styled-components";
import Waves from "./waves.png"



const DecorationStyle = styled.div `
width: 100vw;
  position: relative;
  z-index: 999;
  min-width:100%;
  margin-top: -10vw;
  background-size: cover ;
  height: 100%;

`



const WaveDc = () => {
    return (
<DecorationStyle>
    <img src={Waves}/>
</DecorationStyle>
    )
}

export default WaveDc
