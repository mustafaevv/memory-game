import React from 'react'
import styled from 'styled-components'

import Navbar from '../../components/Navbar'

const Menu = styled.div`
  background: ${({theme})=>theme.background.primary};
  width: 870px;
  border-radius: 24px;
  padding: 80px 0 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  mask-type: 130px;
`

const MenuTitle = styled.h2`
  color: ${({theme})=>theme.title.primary};
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 100px;
`

const Home = () => {
  return (
    <div>
      <Navbar title='Memory Game'/>
      <Menu>
        <MenuTitle>Start the game</MenuTitle>
      </Menu>
    </div>
  )
}

export default Home