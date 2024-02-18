import React from 'react';
import { Container } from 'react-bootstrap';
import img from "./Images/hero.7666b2a4.gif"
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import "./Home.css";
const Home = () => {
    return (
        <div>
            <Container className='ps-lg-6'>
                <div className="row column-reverse">
                    <div className='col-md-6 Header ps-md-5 '>
                        <div className='horizontal-line'></div>
                        <h1 className='pt-md-5 ps-md-5'><span>I'M Muhammad Muneeb.</span> <br /> MERN Stack web Developer</h1>
                        <p className='ps-3'>I'm a Pakistan based web designer & developer focused on crafting clean & user‑friendly experiences. I have 6 month of an experience in javaScript Tech Stack like React JS ,Node JS & Express JS I am passionate about building excellent software that improves the lives of those around me.
                        </p>
                    </div>
                    <div className="col-md-6 Image-style pt-md-5 ">
                        <img src={img} alt="" />
                    </div>
                </div>
            </Container>
            <Container>
                <button type="button" class="modal-button ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    About Me   <FaArrowRight className='button-icon' />
                </button>

                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content top-modal ">
                            <div class="modal-header">
                                <h1 class="modal-title" id="exampleModalLabel">
                                    RESUME <h2>ABOUT <span>ME</span></h2>
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <form className='form-controls'>
                                            <h1 className='pb-4 pt-5'>Personal Information</h1>
                                            <label className='pb-2'>First Name:</label>
                                            <span>Muhammad</span>
                                            <label >Last Name:</label>
                                            <span>Talha</span> <br />
                                            <label className='pb-2'>Age:</label>
                                            <span>24 Year</span>
                                            <label className='label-class'>Nationality:</label>
                                            <span>Pakistan</span> <br />
                                            <label className='pb-2'>Freelancer:</label>
                                            <span>Available</span>
                                            <label className='ps-4'>Address:</label>
                                            <span>Lahore</span> <br />
                                            <label className='pb-2'>Phone:</label>
                                            <span>03228487164</span>
                                            <label className='ps-3'>Email:</label>
                                            <span>hr@gmail.com</span> <br />
                                            <label >Linkedin:</label>
                                            <span>Available</span>
                                            <label className='ps-4'>Language:</label>
                                            <span>English</span> <br />

                                        </form>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-5 box border">
                                                <span>1+</span>
                                                <div className='d-flex'>
                                                    <hr style={{ width: "30px", marginRight: "10px" }} />
                                                    <p>Year of Experience</p></div>
                                            </div>
                                            <div className="col-5 box border">
                                                <span>10+</span>
                                                <div className='d-flex'>
                                                    <hr style={{ width: "30px", marginRight: "10px" }} />
                                                    <p>Completed Project</p></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-5 box border">
                                                <span>5+</span>
                                                <div className='d-flex'>
                                                    <hr style={{ width: "30px", marginRight: "10px" }} />
                                                    <p>Happy Customers</p></div>
                                            </div>
                                            <div className="col-5 box border">
                                                <span>3+</span>
                                                <div className='d-flex'>
                                                    <hr style={{ width: "30px", marginRight: "10px" }} />
                                                    <p>Awards Win</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </div>

    );
}

export default Home;
