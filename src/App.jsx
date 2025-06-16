import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './component/NavbarComp';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';

import { FaArrowCircleRight, FaChartLine, FaSearch, } from "react-icons/fa";

import { MdPermMedia } from "react-icons/md";


import { FaChartPie, FaCheck } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

import seozImg from "./assets/Frame.png";

import service1 from "./assets/icon-01.png";
import service2 from "./assets/icon-02.png";
import service3 from "./assets/icon-03.png";
import service4 from "./assets/icon-04.png";
import Slider from './component/Slider';
import Footer from './component/Footer';




function App() {
  const [count, setCount] = useState(0)

  // for card data
  const cardData = [
    {
      icon: <FaChartLine />,
      color: "#eac02b",
      title: "Social Media Strategy",
      data_aos:"fade-up-right",
      desc: "Comprehensive SEO and digital marketing solutions for your needs strategies.",
    },
    {
      icon: <FaSearch />,
      color: "#f05454",
      title: "Marketing Research",
      data_aos:"fade-up-right",
      desc: "Comprehensive SEO and digital marketing solutions for your needs strategies",
    },
    {
      icon: <MdPermMedia />,
      color: "#4fdea5",
      title: "Media Management",
      data_aos:"fade-up-left",
      desc: "Comprehensive SEO and digital marketing solutions for your needs strategies.",
    },
    {
      icon: <FaChartPie />,
      color: "#6c57d2",
      title: "Traffic Analysis",
      data_aos:"fade-up-left",
      desc: "Comprehensive SEO and digital marketing solutions for your needs strategies.",
    },
  ]
  const ServicesData = [
    {
      icon: service1,
      color: "#FFFAE8",
      title: "Search Engine Optimization (SEO)",
      data_aos:"zoom-in-up",
      desc: "We pride ourselves on delivering a value proposition that goes beyond expectations. Our approach is centered on understanding.",
    },
    {
      icon: service2,
      color: "#FFEBEB",
      title: "Website Design and Development",
      data_aos:"zoom-in-up",
      desc: "We pride ourselves on delivering a value proposition that goes beyond expectations. Our approach is centered on understanding.",
    },
    {
      icon: service3,
      color: "#E3DAF8",
      title: "Pay-Per-Click (PPC) Advertising",
      data_aos:"zoom-in-up",
      desc: "We pride ourselves on delivering a value proposition that goes beyond expectations. Our approach is centered on understanding.",
    },
    {
      icon: service4,
      color: "#F0EEFB",
      data_aos:"zoom-in-up",
      title: "Email & Social Media Marketing",
      desc: "We pride ourselves on delivering a value proposition that goes beyond expectations. Our approach is centered on understanding.",
    },
  ]

    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>

      <Navbar />
      <Container fluid className='banner'>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className='Text-div'>
              <p className='animate__animated animate__backInLeft  '>Boost Brand with Professional  </p>
              <p className='animate__animated animate__backInLeft animate__delay-1s'> SEO and Marketing</p>

            </div>

            <div className='btn-div'>
              <Button variant="outline-primary me-2 btn-blue animate__animated  animate__bounceInDown animate__delay-1s">  Get Started   <FaArrowCircleRight className='rightIcon' /></Button>
              <Button variant="outline-primary me-2 btn-orenge animate__animated  animate__bounceInDown animate__delay-1.5s" >Explore More  <FaArrowCircleRight className='rightIcon2' /></Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className='text-center animate__animated animate__backInRight'>  <img src='../src/assets/hero-1-img.png' />   </Col>
        </Row>
      </Container>

      <Container fluid  >
        <p data-aos="fade-up" className='title text-center my-3'>Welcome to SEOZ</p>
        <p data-aos="fade-up" className='title2 text-center animate__fadeInDown'>Generating New</p>
        <p data-aos="fade-up" className='title2 text-center animate__fadeInDown'>Customers Via Online Mode</p>
        <p data-aos="fade-up" className='text-center mb-0 mt-3 animate__fadeInDown'>Welcome to SEOZ your trusted partner for comprehensive SEO and digital marketing solutions. With</p>
        <p data-aos="fade-up" className='text-center animate__fadeInDown'> our proven expertise and innovative strategies the digital landscape.</p>

        <Row >
          {
            cardData.map((ele) => {
              return (
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <Card className='cards p-3 mb-4 border-none' data-aos={ele.data_aos}>
                    <Card.Body>
                      <div className='card-icon text-start mb-4' style={{ color: ele.color }}>
                        {ele.icon}
                      </div>
                      <Card.Title className='card-title'>{ele.title}</Card.Title>
                      <Card.Text className='card-desc'>
                        {ele.desc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>

      </Container>

      <Container className='mt-5 SEOZDiv'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={7} xl={7}>
            <img data-aos="fade-up-right" src={seozImg} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={5} xl={5}>
            <p data-aos="fade-up-left" className='title text-centeservicesTextr my-3'>About SEOZ</p>
            <p data-aos="fade-up-left" className='title2 text-center'>Why You Need SEO &</p>
            <p data-aos="fade-up-left" className='title2 text-center'>Digital Marketing Services</p>
            <div className='my-3 ' data-aos="flip-left">
              <p className='card-title'>Media Management</p>
              <p className=''>Welcome to SEOZ your trusted partner for comprehensive SEO and digital marketing solutions.</p>

              <ul className='check-list'>
                <li className='mb-1 d-flex'> <FaCheck className='me-3' /> <p className='card-desc'> Competitive online business, the higher the position</p></li>
                <li className='mb-1 d-flex'> <FaCheck className='me-3' /><p className='card-desc'>Identify converted customers who reached your business</p></li>
              </ul>
              <Button variant="outline-primary me-2 btn-blue">  Explore More About Us   <FaArrowCircleRight className='rightIcon' /></Button> 
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='services '>
        <div className=''>
          <p className='title text-center pt-5 '>Our Services</p>
          <p className='title3 text-center'>Our Services Can Solve any</p>
          <p className='title3 text-center mb-3'>Marketing Problem</p>
        </div>


        <Row className='px-5'>
          {
            ServicesData.map((ele) => {
              return (
                <Col xs={12} sm={12} md={6} lg={3} xl={3} className='p-0 '>
                  <Card className=' px-3 py-5 mb-4 Services' data-aos={ele.data_aos} style={{ backgroundColor: ele.color, height: "480px", border: "none" }}>
                    <Card.Body>
                      <div className='card-icon text-center mb-4' >
                        <img src={ele.icon} />
                      </div>
                      <div style={{ height: "180px" }}>

                        <Card.Title className='card-title text-center'>{ele.title}</Card.Title>
                        <Card.Text className='card-desc moreDesc'>
                          {ele.desc}
                        </Card.Text>
                        <a href="" className='moreDetails text-center'>More Details <IoIosArrowRoundForward className='moreIcon' /></a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      
      <Slider />

      <Footer />

    </>
  )
}

export default App
