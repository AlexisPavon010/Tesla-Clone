import React from 'react'
import styled from 'styled-components'
import Section from './Section'

export default function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rigthBtnText='Existing Inventory'
                backgroundImage='https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop'
            />
            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rigthBtnText='Existing Inventory'
                backgroundImage='https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY'
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rigthBtnText='Existing Inventory'
                backgroundImage='https://tesla-cdn.thron.com/delivery/public/image/tesla/409621ec-fca7-41fd-87e5-66e1caf40f5c/bvlatuR/std/2880x2400/m3-homepage-desktop'
            />
            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rigthBtnText='Existing Inventory'
                backgroundImage='https://tesla-cdn.thron.com/delivery/public/image/tesla/58df46a8-26c5-401f-9325-388b2990dcc3/bvlatuR/std/3296x1798/mx-homepage-desktop'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                leftBtnText='Custom Order'
                rigthBtnText='Existing Inventory'
                backgroundImage='https://tesla-cdn.thron.com/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/2880x2400/Desktop-SolarPanels'
            />

            <Section
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                leftBtnText='Custom Order'
                rigthBtnText='Existing Inventory'
                backgroundImage='https://tesla-cdn.thron.com/delivery/public/image/tesla/27ae57a3-3a1d-480c-b557-cd9caf51b96e/bvlatuR/std/2880x1620/solar-roof-hero-desktop'
            />

            <Section
                title='Accessories'
                leftBtnText='Buy Now'
                backgroundImage='https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories'
            />



        </Container>
    )
}

const Container = styled.div`
  height: 100vh;
`;