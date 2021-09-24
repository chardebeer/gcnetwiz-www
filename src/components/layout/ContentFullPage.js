import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`

const Content = styled.div`
  max-width: 1600px;
`

const ContentFullPage = ({ children }) => (
  <Wrapper>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"/>
    <Content>{children}</Content>
  </Wrapper>
)


export default ContentFullPage
