import React from 'react';
import { Container } from 'react-bootstrap';
import "./Contact.css"
import { FaMap } from "react-icons/fa";
import { LuMailOpen } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {


    return (
        <div>
            <Container>
                <div className='top-header'>
                    <h1 className='heading'>get in <span>touch</span></h1>
                    <span className='top-span'>Contact</span>
                </div>
            </Container>
            <Container>
                <div className="row row-cols-lg-2 row-col-md-1">
                    <div className='col-md-12 ps-md-5 col-lg-4'>
                        <div className='first-heading'>
                            <h2>dont be shy!</h2>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>
                        <div className='division'>
                            <p className='line-height pb-3'>
                                <FaMap className='icon-s' />
                                <span>ADDRESS POITN</span> <br />
                                <span className=' margin-top'>Model town Lahore</span>
                            </p>
                            <p className='line-height pb-3'>
                                <LuMailOpen className='icon-s' />
                                <span>MAIL ME</span> <br />
                                <span className=' margin-top'>MuhammadTalha9279@gmail.com</span>
                            </p>
                            <p className='line-height'>
                                <FaWhatsapp className='icon-s' />
                                <span>WHATSAPP ME</span> <br />
                                <span className=' margin-top'>+92-322-8487164</span>
                            </p>
                        </div>
                        <div className='contact-icons row '>
                            <ul>
                                <li><a href="https://www.facebook.com/" target='blank' title='facebook.com'><FaFacebook className='anchors' /></a> </li>
                                <li> <a href="https://web.whatsapp.com/" target='blank' title='whatsapp.com'><FaWhatsapp className='anchors' /></a> </li>
                                <li><a href="https://pk.linkedin.com/" target='blank' title='linkedin.com'><FaLinkedinIn className='anchors' /></a> </li>
                                <li><a href="https://github.com/" target='blank' title='githb.com'><FaGithub className='anchors' /></a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="input-fields col-md-7">
                        <form action="">
                            <div className='form-controls row mb-4'>
                                <input type="text" placeholder='YOUR NAME' required/>
                            </div>
                            <div className='row mb-4'>
                                <input type="email" placeholder='YOUR EMAIL' required/>
                            </div>
                            <div className='row mb-4'>
                                <input type="text" placeholder='YOUR SUBJECT' required/>
                            </div>
                            <div className="row mb-4">
                                <textarea name="" id="" cols="30" rows="4" placeholder='YOUR MESSAGE' required></textarea>
                                {/* <input type="text" placeholder='YOUR MESSAGE' /> */}
                            </div>
                            <div className="row ">
                                <input type="submit" className='p-2' placeholder='YOUR MESSAGE' />
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
