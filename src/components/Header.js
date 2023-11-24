import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
   <MainHeader>
            <div className='header'>
                <NavLink to="/">
                    <img src='/images/logo.jpeg' alt='My Logo' width="55px" height="60px" className='logo'/>    
                </NavLink>
                <h2>Nagda Premier League - 3.0</h2>
            </div>
             <Navbar/>
   </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4rem;
height: 10rem;
background-color: ${({theme}) => theme.colors.bg};
display:flex;
align-items:center;
justify-content:space-between;
position: relative;

.header{
    display:flex;
    align-items:center;
    gap:10px
}
.header h2{
    color:green;
    font-weight: 500;
}
.logo{
    height:5rem;
}

@media(max-width: 767px){
        padding:0;
        margin-left:8px;
        .header img{
            width: 58px;
            height: 60px;
        }
        .header h2{
            font-size: 12px;
        }
}

@media(max-width: 400px){
        padding:0;
        margin-left:8px;
        .header img{
            width: 58px;
            height: 60px;
        }
        .header h2{
            font-size: 12px;
        }
}


`;

export default Header
