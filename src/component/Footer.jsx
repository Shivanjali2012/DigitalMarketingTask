import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
 import logo from "../assets/logoNew.png"
const Footer = () => {
    return (
        <div className='footer'>
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="contact-content text-center">
                                <a href="#"><img src={logo} alt="logo" /></a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                                <div className="hr"></div>
                                <h6>1120 Lorem ipsum dolor sit amet, Pune Bavdhan, Maharashtra.</h6>
                                <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                                <div className="contact-social">
                                    <ul>
                                        <li><a className="hover-target" href=""><FaFacebook /></a></li>
                                        <li><a className="hover-target" href=""><FaLinkedinIn /></a></li>
                                        <li><a className="hover-target" href=""><FaGithub /></a></li>
                                        <li><a className="hover-target" href=""><FaInstagram /></a></li>
                                        <li><a className="hover-target" href=""><IoMail /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <p>Copyright &copy; 2025 @ All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
