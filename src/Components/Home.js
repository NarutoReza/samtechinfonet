import React from 'react'
import Carousell from './Carousell'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import Carousel2 from './Carousel2'

function Home() {
  return (
    <>
        <Carousell />

        <Container>
            <Row>
                <Col sm={12}>
                    <Row>
                        <Col sm={7} className='top-box'>
                            <h4 className='heading'>WELCOME TO SAMTECH INFONET</h4>
                            <p className='details'>
                                Samtech InfoNet Limited was incorporated in July 1989. It began with a foray into the growing system integration and services market . Samtech InfoNet Limited is ISO 9001:2015 certified IT Services, Software and Systems Integration Company.

                                <br /><br />

                                We have been helping our enterprise and government clients across the world in provisioning innovative IT solutions., Samtech’s strength comes from solutions, services and customer relationships. In the process Samtech have grown because of customer focus.

                                <br /><br />

                                Samtech started investing its time, energy and valuable resources with an intent to understand the IT enablement and e-governance needs for the central and state governments aligned to the National e-Governance Plan (NeGP) of Government of India thus providing innovative ideas and solutions to the various government departments ranging from Software and Portal Solutions, content and digitization services and facilities management services in line with the vision of benefiting the Common man the “Citizen of India”

                                <br /><br />

                                Samtech in its last 27 years of successful existence has served a variety of customers across geographies in the enterprise, public sector and government segments. Our work has been appreciated by many of our customers and technology Partners. We have developed a successful Plan-Do-Act-Analyze model of delivery and create POC and Pilots before transitioning the production and scaling it. This avoids any surprises and cultural shocks while optimizing the processes and content.
                            </p>
                        </Col>

                        <Col sm={4} className='top-box'>
                            <h4 className='heading heading2'>Corporate Mission</h4>
                            <p className='details details2'>
                                <p id='centeredp'>Ethical, Healthy, Knowledge community</p>

                                <p>To be the vendor of choice for large and mid-sized global corporations, enabling their companies, which are knowledge centric in their vision and are premium service seekers We shall offer the core benefit of knowledge, technology and best practices in the capacity of consultant,enabler, implementation partner, service provider and content developer.
                                <br /><br />
                                Internally, we shall create a knowledge community; an ethical, healthy and quality company that guarantees customer satisfaction through new business paradigms while maximizing our stake holder's value.</p>
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <h4 className='heading heading2'>OUR SERVICES</h4>
                        </Col>

                        <Row>
                            <Col sm={4}>
                                <div className='box'>
                                    <a className='icons'><i class="fa-solid fa-desktop top-icon"></i></a>
                                    <h5 className='box-head'>e-Governance Practice</h5>
                                    <p className='box-details'>Samtech’s e-governance practice draws its expertise from domain specialists in the governance and public sector arena. We employ consultants, retired senior government officers and panel of experts who have spent years on understanding and provisioning of e-governance solution.</p>
                                    <a className='more'><i class="fa-solid fa-caret-right"></i>&nbsp;<p>Read More</p></a>
                                </div>
                            </Col>
                            
                            <Col sm={4}>
                                <div className='box'>
                                    <a className='icons'><i class="fa-regular fa-file top-icon"></i></a>
                                    <h5 className='box-head'>Software Development & Portal Solution</h5>
                                    <p className='box-details'>Samtech Infonet can design, develop, integrate, and test one or more components of your embedded software system, get to market faster, and reallocate resources on other high-priority tasks.</p>
                                    <a className='more'><i class="fa-solid fa-caret-right"></i>&nbsp;<p>Read More</p></a>
                                </div>
                            </Col>

                            
                            <Col sm={4}>
                                <div className='box'>
                                    <a className='icons'><i class="fa-solid fa-check top-icon"></i></a>
                                    <h5 className='box-head'>Content & Document Digitization</h5>
                                    <p className='box-details'>Digitally preserving your historical collections and institutional media is imperative. Through our process, we give new life to the obsolete media of yesterday. Serving public and private institutions, our unparalleled attention to detail</p>
                                    <a className='more'><i class="fa-solid fa-caret-right"></i>&nbsp;<p>Read More</p></a>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={4}>
                                <div className='box'>
                                    <a className='icons'><i class="fa-solid fa-laptop top-icon"></i></a>
                                    <h5 className='box-head'>Facilities Management & Infrastructure Support</h5>
                                    <p className='box-details'>Samtech InfoNet offers critical services, such as management of computer hardware infrastructure that ensure a safe and reliable physical environment. Through our experience and technical expertise, we aim for a long-term reduction...</p>
                                    <a className='more'><i class="fa-solid fa-caret-right"></i>&nbsp;<p>Read More</p></a>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className='box'>
                                    <a className='icons'><i class="fa-solid fa-bars top-icon"></i></a>
                                    <h5 className='box-head'>Technology Staffing & Staff Augmentation</h5>
                                    <p className='box-details'>A staff augmentation through Samtech Infonet can help you achieve your technology goals with industry and technical experience which will accelerate the quality and speed of your project or requirements.</p>
                                    <a className='more'><i class="fa-solid fa-caret-right"></i>&nbsp;<p>Read More</p></a>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className='box'>
                                    <a className='icons'><i class="fa-solid fa-server top-icon"></i></a>
                                    <h5 className='box-head'>Website & Enterprise Portal Development</h5>
                                    <p className='box-details'>Samtech is positioned to deliver portal solutions of a wide variety of types, scope and complexity. And whatever the underlying scenario, we assure delivery of a dynamic experience your customers, partners and employees are instinctively looking for.</p>
                                    <a className='more'><i class="fa-solid fa-caret-right"></i>&nbsp;<p>Read More</p></a>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>

        <Carousel2 />
    </>
  )
}

export default Home