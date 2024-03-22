import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router'
import './Navebar.css'

function Navebar() {
    const navigate = useNavigate()

  return (
    <>
        <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary' bg='light' data-bs-theme='light'>
            <Container>
                <Navbar.Brand href='/'><img src='./logo.png' alt='logo' /></Navbar.Brand>

                <Navbar.Toggle aria-controls='responsive-navbar-nav' />

                <Navbar.Collapse>
                    <Nav className='justify-content-end flex-grow-1'>
                        <Nav.Item>
                            <Nav.Link onClick={() => navigate('/')}>HOME</Nav.Link>
                        </Nav.Item>
                        
                        <NavDropdown title='ABOUT US'>
                            <NavDropdown.Item onClick={() => navigate('/company-overview')}>COMPANY OVERVIEW</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/how-are-we-different')}>HOW ARE WE DIFFERENT</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/awards-and-recognition')}>AWARDS & RECOGNITION</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/alliances-and-technology')}>ALLIANCES & TECHNOLOGY PARTNERSHIPS</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/people-power')}>PEOPLE POWER</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title='SERVICES'>
                            <NavDropdown.Item onClick={() => navigate('/e-government-practices')}>E-GOVERNMENT PRACTICE</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/software-development-and-portal-solution')}>SOFTWARE DEVELOPMENT & PORTAL SOLUTION</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/content-and-document-digitisation')}>CONTENT & DOCUMENT DIGITISATION</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/facilities-management-and-infrastructure-support')}>FACILITIES MANAGEMENT & INFRASTRUCTURE SUPPORT</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/technology-staffing-and-staff-augmentation')}>TECHNOLOGY STAFFING & STAFF AUGMENTAION</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/website-and-enterprise-portal-development')}>WEBSITE & ENTERPRISE PORTAL DEVELOPMENT</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title='PRODUCTS'>
                            <NavDropdown.Item onClick={() => navigate('/face-recognition-facechk')}>FACE RECOGNITION FACECHK</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/image-compress-icom')}>IMAGE COMPRESS ICOM</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/bpm-platform')}>BPM PLATFORM</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/facechk-attendance-management')}>FACECHK ATTENDANCE MANAGEMENT</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/facechk-visitor-management')}>FACECHK VISITOR MANAGEMENT</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item>
                            <Nav.Link onClick={() => navigate('/projects')}>PROJECTS</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link onClick={() => navigate('/our-team')}>OUR TEAM</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link onClick={() => navigate('/our-clients')}>OUR CLIENTS</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link onClick={() => navigate('/contact')}>CONTACT</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='line'></div>

        <Outlet />

        <div className='footer'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className='contents'>
                            <div className='menu'>
                                <ul>
                                    <li><a onClick={() => navigate('/')}>Home</a></li>
                                    <li><a onClick={() => navigate('/about-us')}>About Us</a></li>
                                    <li><a onClick={() => navigate('/services')}>Services</a></li>
                                    <li><a onClick={() => navigate('/products')}>Products</a></li>
                                    <li><a onClick={() => navigate('/projects')}>Projects</a></li>
                                    <li><a onClick={() => navigate('/our-team')}>Our Team</a></li>
                                    <li><a onClick={() => navigate('/our-clients')}>Our Clients</a></li>
                                    <li><a onClick={() => navigate('/contact-us')}>Contact Us</a></li>
                                </ul>
                            </div>

                            <div className='touch'><h6>GET IN TOUCH</h6></div>

                            <div className='contact'>
                                <a className='data'>
                                    <i class="fa-solid fa-phone"></i>
                                    <p>+91-11-35004166 / +91-11-35004167</p>
                                </a>
                            </div>
                            
                            <div className='contact'>
                                <a className='data'>
                                    <i class="fa-solid fa-globe"></i>
                                    <p>&nbsp;www.samtechinfonet.com</p>
                                </a>

                                <a className='data'>
                                    <i class="fa-solid fa-envelope"></i>
                                    <p>&nbsp;info@samtechinfonet.com</p>
                                </a>
                            </div>

                            <div className='contact'>
                                <a className='data'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>&nbsp;14 DSIDC Computer Complex, Scheme1, Okhla Industrial Area Phase II, New Delhi-110020, India</p>
                                </a>
                            </div>

                            <br /><br />

                            <div className='copyright'>
                                <p>Copyright© 2024 by Samtech Infonet Ltd., All Rights Reserved.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Navebar