import React from 'react'
import styled from 'styled-components'
import Section from './Section';

const Home = () => {
  return (
    <Container>
    <Section
                
       title="Model S"
       description = "Order Online for Touchless Delivery"
       backgroundImg= "model-s.jpg"
       leftBtnText= "Custom Order"
       rightBtnText= "Existing Order"
        

    />
    <Section
     
     title="Model Y"
       description = "Order Online for Touchless Delivery"
       backgroundImg= "model-y.jpg"
       leftBtnText= "Custom Order"
       rightBtnText= "Existing Order"

    />
   
    <Section

       title="Model 3"
       description = "Order Online for Touchless Delivery"
       backgroundImg= "model-3.jpg"
       leftBtnText= "Custom Order"
       rightBtnText= "Existing Order"
    />
    <Section

      title="Model X"
       description = "Order Online for Touchless Delivery"
       backgroundImg= "model-x.jpg"
       leftBtnText= "Custom Order"
       rightBtnText= "Existing Order"
    />
     <Section

      title="Lowest Cost Solar Panels in America "
       description = "Money-back guarantee"
       backgroundImg= "solar-panel.jpg"
       leftBtnText= "Custom Order"
       rightBtnText= "Existing Order"
    />

   <Section
      title="Solar for New Roofs"
    description = "Solar Roof Cost Less Than  New Roof puls Solar "
    backgroundImg= "solar-roof.jpg"
    leftBtnText= "Custom Order"
    rightBtnText= "Existing Order"
    />
    <Section

      title="Accessories"
       description = ""
       backgroundImg= "accessories.jpg"
       leftBtnText= "Shop Now"
    />
    </Container>
  ) 
}

export default Home



const Container = styled.div`
height:100vh;

`
// const size = {
//    mobileS: '320px',
//    mobileM: '375px',
//    mobileL: '425px',
//    tablet: '768px',
//    laptop: '1024px',
//    laptopL: '1440px',
//    desktop: '2560px'
//  }
