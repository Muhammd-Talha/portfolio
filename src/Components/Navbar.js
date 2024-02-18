import React from 'react';
import "./Home.css"
import { NavLink } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa6";
import { BsPassportFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { SiBlogger } from "react-icons/si";

const Navbar = () => {
    return (
        <div className='d-flex'>
            <div class="wrapper">
                <div class="button">
                    <NavLink to={"/"} className='links'>
                        <div class="icon">
                            <i class="fas fa-home"></i>
                        </div>
                        <span>Home</span>
                    </NavLink>
                </div>
                <div class="button">
                    <NavLink to={"/About"} className='links'>
                        <div class="icon">
                            <i><FaBookOpen /></i>
                        </div>
                        <span>ABOUT</span>
                    </NavLink>
                </div>
                <div class="button">
                    <NavLink to={"/Portfolio"} className='links'>
                        <div class="icon">
                            <i><BsPassportFill /></i>
                        </div>
                        <span>portfolio</span>
                    </NavLink>
                </div>

                <div class="button">
                    <NavLink to={"/Contact"} className='links'>
                        <div class="icon">
                            <i><IoIosContact /></i>
                        </div>
                        <span>Contact </span>
                    </NavLink>
                </div>
                <div class="button">
                    <NavLink to={"/Blog"} className='links'>
                        <div class="icon">
                            <i class=""><SiBlogger /></i>
                        </div>
                        <span>BLOG</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
