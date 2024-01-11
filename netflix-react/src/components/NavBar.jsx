import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { MdOutlineSearch } from "react-icons/md";
import { FaBell } from "react-icons/fa";

const NavBar = ({showSettings, showProfile, showHome}) => {
  return (
    <Navbar expand="lg" className="py-3">
        <Container fluid className="fw-bold px-5">
            <Navbar.Brand onClick={()=>showHome()}>
                <img style={{ width: '130px', height: '50px', marginLeft: '-12px' }} src="/assets/logo.png" alt="page logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" className='order-5' />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="me-auto mb-2 mb-lg-0">
                    <Nav.Link href="#" >Home</Nav.Link>
                    <Nav.Link href="#">TV Shows</Nav.Link>
                    <Nav.Link href="#" active>Movies</Nav.Link>
                    <Nav.Link href="#">Recently Added</Nav.Link>
                    <Nav.Link href="#">My list</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div className="fs-2 py-0 navbar order-1 ms-auto me-lg-3"><MdOutlineSearch /></div>
            <div className="fs-4 py-0 navbar order-2">
                <img src="/assets/kids_icon.png" style={{ width: '30px', height: '30px' }} alt="pfp" />
            </div>
            <div className="fs-2 py-0 navbar order-3 mx-lg-3"><FaBell /></div>
            <div className="navbar py-0 order-4 ms-2 me-lg-0">
                <NavDropdown title={<img src="/assets/avatar.png" style={{ width: '30px', height: '30px' }} alt="pfp" />} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">History</NavDropdown.Item>
                    <NavDropdown.Item href="#">Notifications</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>showProfile()}>Edit Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>showSettings()}>Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
                </NavDropdown>
            </div>
        </Container>
    </Navbar>
  );
};

export default NavBar;
