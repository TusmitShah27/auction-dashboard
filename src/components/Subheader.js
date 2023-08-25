import React from 'react'
import { styled } from 'styled-components'

const Subheader = () => {
  return (
    <Header>
    <div className='sub-header'>
        <h2>
            Welcome to  Nagda Premier League
        </h2>
    </div>
    </Header>

  )
}

const Header = styled.header`
.sub-header h2{
    text-align:center;
    margin: 30px 10px;
    color: #630;
    font-weight:500;
}


`;


export default Subheader
