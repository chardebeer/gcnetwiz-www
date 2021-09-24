import React from 'react'
import styled from "styled-components";
import ImgBgBanner from "../../organisms/prefooter-banner/banner.png"

const Banner = styled.div `
width: 100vw;
`

const ImageBannerStyle = styled.div`
  min-height: calc(50rem + 1vw);
  min-width:100%;
  background: url("${ImgBgBanner}");
  background-size: cover ;
`


const ImageBanner = () => {
    return (
        <Banner>
            <ImageBannerStyle/>
        </Banner>
    )
}

export default ImageBanner
