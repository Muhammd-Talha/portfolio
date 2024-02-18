import React from 'react';
import { Container } from 'react-bootstrap';
import { Circle, Line } from 'rc-progress';
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";
import './CssFiles/About.css';
const About = () => {
    return (
        <div>
            <Container>
                <div className='top-header'>
                    <h1 className='heading'>About <span>me</span></h1>
                    <span className='top-span'>Resume</span>
                </div>
            </Container>
            <Container>
                <div className="row row-cols-lg-2">
                    <div className="col-lg-6 col-md-12">
                        <div className="row">
                            <div className="col-md-5 box border ms-md-5">
                                <span>1+</span>
                                <div className='d-flex'>
                                    <hr style={{ width: "30px", marginRight: "10px" }} />
                                    <p>Year of Experience</p></div>
                            </div>
                            <div className="col-md-5 box border">
                                <span>10+</span>
                                <div className='d-flex'>
                                    <hr style={{ width: "30px", marginRight: "10px" }} />
                                    <p>Completed Project</p></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 box border ms-md-5">
                                <span>5+</span>
                                <div className='d-flex'>
                                    <hr style={{ width: "30px", marginRight: "10px" }} />
                                    <p>Happy Customers</p></div>
                            </div>
                            <div className="col-md-5 box border">
                                <span>3+</span>
                                <div className='d-flex'>
                                    <hr style={{ width: "30px", marginRight: "10px" }} />
                                    <p>Awards Win</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row sections">
                            <h2>personal information</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                                <form action="" className='form-controls ps-md-5 ps-lg-0'>
                                    <label className='pb-3'>F Name:</label>
                                    <span>Muhammad</span> <br />
                                    <label className='pb-3'>Age:</label>
                                    <span>24 Year</span> <br />
                                    <label className='pb-3'>Freelancer:</label>
                                    <span>Available</span> <br />
                                    <label className='pb-3'>Phone:</label>
                                    <span>03228487164</span> <br />
                                    <label >Linkedin:</label>
                                    <span>Available</span>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <form action="" className='form-controls'>
                                    <label className='pb-3'>L Name:</label>
                                    <span >Talha</span> <br />
                                    <label className='label-class p-0 pb-3'>Nationality:</label>
                                    <span>Pakistan</span> <br />
                                    <label className='pb-3'>Address:</label>
                                    <span>Lahore</span> <br />
                                    <label className='pb-3'>Email:</label>
                                    <span>hr@gmail.com</span> <br />
                                    <label className=''>Language:</label>
                                    <span>English</span> <br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <h1 className='text-align p-5'>My skills</h1>
                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-2">
                    <div className="">
                        <div className='circle'>
                            <Circle
                                percent={95}
                                strokeColor="orange"
                                strokeWidth={9}
                                trailColor='gray'
                                trailWidth={9}
                                style={{ width: "130px", height: "130px" }}
                            />
                            <div className='number'>95%</div>
                            <div className='ms-2 text-white mb-4'>
                                HTML
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='circle'>
                            <Circle
                                percent={90}
                                strokeColor="orange"
                                strokeWidth={9}
                                trailColor='gray'
                                trailWidth={9}
                                style={{ width: "130px", height: "130px" }}
                            />
                            <div className='number'>90%</div>
                            <div className='ms-2 text-white'>
                                CSS
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='circle'>
                            <Circle
                                percent={85}
                                strokeColor="orange"
                                strokeWidth={9}
                                trailColor='gray'
                                trailWidth={9}
                                style={{ width: "130px", height: "130px" }}
                            />
                            <div className='number'>85%</div>
                            <div className='ms-2 text-white'>
                                JAVASCRIPT
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='circle'>
                            <Circle
                                percent={85}
                                strokeColor="orange"
                                strokeWidth={9}
                                trailColor='gray'
                                trailWidth={9}
                                style={{ width: "130px", height: "130px" }}
                            />
                            <div className='number'>85%</div>
                            <div className='ms-2 text-white'>
                                SQL
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-2 mt-5">
                    <div className="">
                        <div className='circle'>
                            <Circle
                                percent={90}
                                strokeColor="orange"
                                strokeWidth={9}
                                trailColor='gray'
                                trailWidth={9}
                                style={{ width: "130px", height: "130px" }}
                            />
                            <div className='number'>90%</div>
                            <div className='ms-2 text-white mb-4'>
                                REACT.JS
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='circle'>
                            <Circle
                                percent={80}
                                strokeColor="orange"
                                strokeWidth={9}
                                trailColor='gray'
                                trailWidth={9}
                                style={{ width: "130px", height: "130px" }}
                            />
                            <div className='number'>80%</div>
                            <div className='ms-2 text-white'>
                                NODE.JS
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='circle'>
                            <Circle
                                percent={85}
                                strokeColor="orange"
                                strokeWidth={9}
                                trailColor='gray'
                                trailWidth={9}
                                style={{ width: "130px", height: "130px" }}
                            />
                            <div className='number'>85%</div>
                            <div className='ms-2 text-white'>
                                EXPRESS.JS
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='circle'>
                            <Circle
                                percent={95}
                                strokeColor="orange"
                                strokeWidth={9}
                                trailColor='gray'
                                trailWidth={9}
                                style={{ width: "130px", height: "130px" }}
                            />
                            <div className='number'>95%</div>
                            <div className='ms-2 text-white'>
                                MONGODB
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            <Container>
                <h1 className='about-heading'>EXPERIENCE & EDUCATION</h1>
                <div className="row left-side-margin ms-md-5">
                    <div className="col-lg-6 d-flex mb-5">
                        <div className='me-4'>
                            <div className='About-icons'>
                                <IoIosBriefcase />
                            </div>
                            <div className='vertical-line'></div>
                        </div>
                        <div className='footer'>
                            <li className='mb-2'>09/2022-PRESENT</li>
                            <h5 className='mb-2'>WEB DEVELOPER - STATUS 200</h5>
                            <p>I'm working their on service based criteria as i work on the maintenance of their client's sites or adopting new technology in it. I also changes the client's sites from different programming language to JavaScript Tech Stack.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex mb-5">
                        <div className='me-4'>
                            <div className='About-icons'>
                                <IoIosBriefcase />
                            </div>
                            <div className='vertical-line-one'></div>
                        </div>
                        <div className='footer-one'>
                            <li className='mb-3'>2023</li>
                            <h5 className='mb-2'>BS SOFTWARE ENGINEERING DEGREEGCUF | GOVERNMENT COLLEGE UNIVERSITY FAISALABAD</h5>
                            <p>3.44 /4 CGPA
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex mb-5">
                        <div className='me-4'>
                            <div className='About-icons'>
                                <IoIosBriefcase />
                            </div>
                            <div className='vertical-line-one'></div>
                        </div>
                        <div className='footer'>
                            <li className='mb-2'>05/2021-08/2022</li>
                            <h5 className='mb-2'>DJANGO DEVELOPERIT SOFT</h5>
                            <p>I'm working their on product based criteria as i do maintenance of their client's sites or introduce new technology criteria in their sites.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex mb-5">
                        <div className='me-4'>
                            <div className='About-icons'>
                                <IoIosBriefcase />
                            </div>
                            <div className='vertical-line-one'></div>
                        </div>
                        <div className='footer-one'>
                            <li className='mb-3'>2019</li>
                            <h5 className='mb-2'>ICS COMPUTER-SCIENCEGOVT CIVIL LINES COLLAGE LAHORE</h5>
                            <p>851/1100</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <div className='me-4'>
                            <div className='About-icons'>
                                <IoIosBriefcase />
                            </div>
                            <div className='vertical-line-one'></div>
                        </div>
                        <div className='footer'>
                            <li className='mb-2'>12/2020-02/2021</li>
                            <h5 className='mb-2'>WEB DEVELOPMENT INTERN-SOCIAL TECH</h5>
                            <p>I'm working their on Client based criteria as i do maintenance of their client's sites and learn Web development.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex mb-5">
                        <div className='me-4'>
                            <div className='About-icons'>
                                <IoIosBriefcase />
                            </div>
                            <div className='vertical-line-one'></div>
                        </div>
                        <div className='footer-one'>
                            <li className='mb-3'>2017</li>
                            <h5 className='mb-2'>GOVERNOR'S HOUSE SCHOOL LAHORE</h5>
                            <p>835/1100</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;
