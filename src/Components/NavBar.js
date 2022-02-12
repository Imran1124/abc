import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import logo from '../assets/images/logo.jpg'

export default function NavBar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light' className='fixed-top'>
            <MDBContainer>
                <MDBNavbarBrand href='/' className='navlogo'>
                    <img src={logo} height={40} alt="#" />
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav}>
                    <MDBNavbarNav className='navitems'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page'>
                                <Link to='/'>Home</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/applycard1'> <MDBNavbarLink>About</MDBNavbarLink></Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/applycard2'><MDBNavbarLink>Contact</MDBNavbarLink></Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link to='/login'><MDBBtn outline size='sm' color='danger'>Login</MDBBtn></Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}