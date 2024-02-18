import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from "./Images/section.img1.png";
import img2 from "./Images/section.img2.png";
import img3 from "./Images/section.img3.png";
import img4 from "./Images/section.img4.png";
import img5 from "./Images/section.img5.png";
import img6 from "./Images/section.img6.jpg";
import img7 from "./Images/section.img7.jpg";
import img8 from "./Images/section.img8.png";
import img9 from "./Images/section.img9.png";
import "./Portfolio.css"
import { FaRProject } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Portfolio = () => {
    return (
        <div>
            <Container>
                <div className='top-header'>
                    <h1 className='heading'>my <span>portfolio</span></h1>
                    <span className='top-span'>works</span>
                </div>
            </Container>
            <Container>
                <nav id="navbar-example2" class="navbar navbar-light px-3 mb-4">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1">All</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading2">Raact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading3">Bootstrap</a>
                        </li>
                    </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                    <div id="scrollspyHeading1" className='bottom'>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                            <div type="button" class="modal-buttn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <div class="col">
                                    <div class="card image-card box">
                                        <img src={img1} class="card-img-top" alt="..." />
                                        <div class="card-body content">
                                            <h5 class="card-title">React.js Portfolio site</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content portfolio-modal">
                                        <div class="modal-header modal-heading">
                                            <h5 class="card-title">React.js Portfolio site</h5>
                                        </div>

                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaRProject className='portfolio-icons' /><b>Project:</b> Personal Portfolio
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaUser className='portfolio-icons' /><b>Client:</b> Personal
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row modal-image">
                                            <img src={img1} alt="" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div type="button" class="modal-buttn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <div class="col">
                                    <div class="card image-card box">
                                        <img src={img2} class="card-img-top" alt="..." />
                                        <div class="card-body content">
                                            <h5 class="card-title">E-commerce-project</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content portfolio-modal">
                                        <div class="modal-header modal-heading">
                                            <h5 class="card-title">CAR ZONE PROJECT</h5>
                                        </div>

                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaRProject className='portfolio-icons' /><b>Project:</b> Car's Zone buy and sell
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaUser className='portfolio-icons' /><b>Client:</b> Joy
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row modal-image">
                                            <img src={img2} alt="" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div type="button" class="modal-buttn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                <div class="col">
                                    <div class="card image-card box">
                                        <img src={img3} class="card-img-top" alt="..." />
                                        <div class="card-body content">
                                            <h5 class="card-title">E-commerce-project</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content portfolio-modal">
                                        <div class="modal-header modal-heading">
                                            <h5 class="card-title">ENRAPTURE REALITY-BROKEN</h5>
                                        </div>

                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaRProject className='portfolio-icons' /><b>Project:</b> Enrapture - Passionate Virtual-World
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaUser className='portfolio-icons' /><b>Client:</b> Manuel Bolognesi
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row modal-image">
                                            <img src={img3} alt="" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="scrollspyHeading2" className='bottom'>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                            <div type="button" class="modal-buttn" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                <div class="col">
                                    <div class="card image-card box">
                                        <img src={img4} class="card-img-top" alt="..." />
                                        <div class="card-body content">
                                            <h5 class="card-title">BREAKCOMP SPORT-CARDS</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content portfolio-modal">
                                        <div class="modal-header modal-heading">
                                            <h5 class="card-title">BREAKCOMP SPORT-CARDS</h5>
                                        </div>

                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaRProject className='portfolio-icons' /><b>Project:</b> BREAKCOMP Sport-Cards Price-Comparison
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaUser className='portfolio-icons' /><b>Client:</b> TObias
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row modal-image">
                                            <img src={img4} alt="" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div type="button" class="modal-buttn" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                                <div class="col">
                                    <div class="card image-card box">
                                        <img src={img5} class="card-img-top" alt="..." />
                                        <div class="card-body content">
                                            <h5 class="card-title">E-commerce-project</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content portfolio-modal">
                                        <div class="modal-header modal-heading">
                                            <h5 class="card-title">PORTFOLIO</h5>
                                        </div>

                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaRProject className='portfolio-icons' /><b>Project:</b> PortFolio Website
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaUser className='portfolio-icons' /><b>Client:</b> David Ellis
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row modal-image">
                                            <img src={img5} alt="" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div type="button" class="modal-buttn" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                <div class="col">
                                    <div class="card image-card box">
                                        <img src={img6} class="card-img-top" alt="..." />
                                        <div class="card-body content">
                                            <h5 class="card-title">E-commerce-project</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content portfolio-modal">
                                        <div class="modal-header modal-heading">
                                            <h5 class="card-title">TECHINNOVATERS</h5>
                                        </div>

                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaRProject className='portfolio-icons' /><b>Project:</b> Business Site
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaUser className='portfolio-icons' /><b>Client:</b> Wali Shahid
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row modal-image">
                                            <img src={img6} alt="" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="scrollspyHeading3" className='bottom'>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                            <div type="button" class="modal-buttn" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                <div class="col">
                                    <div class="card image-card box">
                                        <img src={img4} class="card-img-top" alt="..." />
                                        <div class="card-body content">
                                            <h5 class="card-title">ANIMATRON EXPO</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content portfolio-modal">
                                        <div class="modal-header modal-heading">
                                            <h5 class="card-title">ANIMATRON EXPO</h5>
                                        </div>

                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaRProject className='portfolio-icons' /><b>Project:</b>Business Site
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaUser className='portfolio-icons' /><b>Client:</b> Mehran
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row modal-image">
                                            <img src={img7} alt="" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div type="button" class="modal-buttn" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                                <div class="col">
                                    <div class="card image-card box">
                                        <img src={img8} class="card-img-top" alt="..." />
                                        <div class="card-body content">
                                            <h5 class="card-title">LUTECH GLOBAL PLATFORM</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content portfolio-modal">
                                        <div class="modal-header modal-heading">
                                            <h5 class="card-title">LUTECH GLOBAL PLATFORM</h5>
                                        </div>

                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaRProject className='portfolio-icons' /><b>Project:</b> Blog website serves as a comprehensive platform
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaUser className='portfolio-icons' /><b>Client:</b> LuTech
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row modal-image">
                                            <img src={img8} alt="" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div type="button" class="modal-buttn" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                <div class="col">
                                    <div class="card image-card box">
                                        <img src={img9} class="card-img-top" alt="..." />
                                        <div class="card-body content">
                                            <h5 class="card-title">AC SERVICE INVOICE</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content portfolio-modal">
                                        <div class="modal-header modal-heading">
                                            <h5 class="card-title">AC SERVICE INVOICE</h5>
                                        </div>

                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaRProject className='portfolio-icons' /><b>Project:</b> Ac service create pdf invoice bill in django
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col pre-tag">
                                                <pre>
                                                    <FaUser className='portfolio-icons' /><b>Client:</b> Mr.Touseef
                                                </pre>
                                            </div>
                                        </div>
                                        <div className="row modal-image">
                                            <img src={img9} alt="" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default Portfolio;
