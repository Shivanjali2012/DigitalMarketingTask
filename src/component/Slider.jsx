
import React, { useState, useEffect, useRef } from 'react';

import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"

const testimonials = [
    {
        quote: "This is the best no-code platform I've ever seen",
        name: "Alyssa Morris",
        role: "Product Manager, Intel",
        img: user1
    },
    {
        quote: "The perfect organizer and team builder",
        name: "Randall Howard",
        role: "UX Designer, Netflix",
        img: user2
    },
    {
        quote: "Flexible product with near endless possibilities",
        name: "Adam Worrell",
        role: "Data Analyst, Spotify",
        img: user3
    },
];

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        // Trigger animation on load
        setActiveIndex(0);
    }, []);

    const scrollTo = (index) => {
        const slider = sliderRef.current;
        if (slider) {
            slider.style.transform = `translateX(-${index * slider.offsetWidth}px)`;
        }
        setActiveIndex(index);
    };

    return (
        <div className='SliderDiv'>
            <main className="main">
                <p className='title text-center pt-5 mb-0'>Our Testimonial</p>
                <p className='title2 text-center'>What Client Say About Us</p>
                <ul className="slider" ref={sliderRef}>
                    {testimonials.map((item, i) => (
                        <li className={`item ${activeIndex === i ? 'animation' : ''}`} key={i}>
                            <div className="testimonial">
                                <p>{item.quote}</p>
                                <p>{item.name}</p>
                                <p>{item.role}</p>
                            </div>
                            <img className="image" src={item.img} alt={item.name} />
                        </li>
                    ))}
                </ul>
                <nav>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`btn ${activeIndex === i ? 'expand' : ''}`}
                            onClick={() => scrollTo(i)}
                        ></button>
                    ))}
                </nav>
            </main>
        </div>
    );
}