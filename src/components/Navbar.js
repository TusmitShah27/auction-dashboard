// import { Dropdown } from 'react-bootstrap';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
// import { DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  // const dropdownStyle = {
  //   width: '80px',
  //   height: '30px', // Adjust the width as needed
  // };
    // const [menuIcon , setmenuIcon] = useState(false);
  return (
    <Nav>
        <div className='navbar'>
            <ul className='navbar-lists'>
                {/* <li>
                    <NavLink to='/' className="navbar-link home-link">
                      Home
                    </NavLink>
                </li> */}

                <li>
                    <NavLink to='/auction-dashboard/auction/male' className="navbar-link home-link">
                      Male
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/auction-dashboard/auction/female' className="navbar-link home-link">
                      Female
                    </NavLink>
                </li>
                {/* <li>
                    <Dropdown className='navbar-link dropdown-link'>
                        <DropdownToggle variant='success' id='dropdown-basic' style={dropdownStyle}>
                          Auction
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem href="/auction/male">Male</DropdownItem>
                          <DropdownItem href="/auction/female">Female</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </li> */}
            </ul>
            
        </div>
    </Nav>
  )
}

const Nav = styled.nav`
.navbar-lists {
  display: flex;
  gap: 4.8rem;
  align-items: center;
  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;
    }
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
}

@media(max-width: 767px){
  .navbar-lists{
    gap:1.8rem;
    margin-right:10px;
  }

}

@media(max-width: 400px){
  .navbar-lists{
    gap:1.8rem;
    margin-right:10px;
  }

}

`;

export default Navbar
