"use client";
import Navbar1 from "@/components/Navbar1";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import { useState } from "react";
const AboutUs = () => {
    const [sec1, setSec1] = useState(0);
    const [sec2, setSec2] = useState(0);
    const [sec3, setSec3] = useState(0);
    const handelSec1 = () => {
        if (sec1>3){
            setSec1(0);
            console.log("sec1",sec1);
        }
        else{
            setSec1(sec1 + 1);
            console.log("sec1n",sec1);
        }

    }
    const handelSec2 = () => {
        if (sec2>2){
            setSec2(0);
        }
        else{
            setSec2(sec2 + 1);
        }   
    }
    const handelSec3 = () => {
        if (sec3>1){
            setSec3(0);
        }
        else{
            setSec3(sec3 + 1);
        }
    }
    const text1 = [
        "Discover destinations based on your preferences",
        "Local Expertise",
        "Travel based Itinerary build",
        "AI-Based Trek Suggestions",
        "Personalized platform for travel planning"
    ];
    const text2 = [
        "Expert Knowledge of Nepal",
        "Personalized Travel Planning",
        "Seamless User Experience",
        "Travel exploration to the whole next level"
    ];
    const text3 = [
        "Connect. Share. Journey together.",
        "Read blog posts and experiences from fellow explorers.",
        "Send a connect request to plan trips"
    ];
    const img1 = [
        "./img11.svg",
        "./img12.svg",
        "./img13.svg",
        "./img14.svg",
        "./img15.svg"
    ]
    const img2 = [
        "./img21.svg",
        "./img22.svg",
        "./img23.svg",
        "./img24.svg"
    ]
    const img3 = [
        "./img31.svg",
        "./img32.svg",
        "./img33.svg"
    ]
    const [animationText1, setAnimationText1] = useState(text1[0]);
    const [animationText2, setAnimationText2] = useState(text2[0]);
    const [animationText3, setAnimationText3] = useState(text3[0]);
    const [animationImg1, setAnimationImg1] = useState(img1[0]);
    const [animationImg2, setAnimationImg2] = useState(img2[0]);
    const [animationImg3, setAnimationImg3] = useState(img3[0]);
    const people = [
    {
        id: 1,
        name: "Kunjan Bhatt",
        designation: "Lead Developer & Founder",
        image: "./kunjan.jpeg",
    },
    {
        id: 2,
        name: "Ashok Koirala",
        designation: "Co-Founder & AI Engineer",
        image: "./ashok.jpeg",
    },
    {
        id: 3,
        name: "Bishnu Upadhyay",
        designation: "AI Agent Dev",
        image: "./bishnu.jpeg",
    },
    {
        id: 4,
        name: "Sonu Jaiswal",
        designation: "Backend Developer",
        image:"./sonu.png",
    },
    ];
    return (
        <div className="aboutus-content">
            <Navbar1 />
            <div className="content">
                <h1>About Us</h1>
                <div className="slogan">
                    <p>Welcome to <span>TREKYA</span> – Your Personalized Travel Companion</p>
                    <h2>---Luxury Reimagined---</h2>
                </div>
                <div className="hover-about">
                    <section>
                        {/* <p>Explore the world with us</p> */}
                        <ul className="code">
                            <div className="pretext">
                                {/* <p>Hover To Reveal</p> */}
                                <p>Explore the world with us</p>
                            </div>
                            <li tabIndex="0" className="digit">
                                <span>50+<br />Destinations</span>
                            </li>
                            <li tabIndex="0" className="digit">
                                <span>100%<br />Personalized</span>
                            </li>
                            <li tabIndex="0" className="digit">
                                <span>AI-Driven<br />Planning</span>
                            </li>
                            <li tabIndex="0" className="digit">
                                <span>Local<br />Expertise</span>
                            </li>
                            <li className="digit">
                                <span>Sacred<br />Landscapes</span>
                            </li>
                            <li className="digit">
                                <span>Untouched<br />Paths</span>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="work-content">
                    <div className="work">
                        <div className="work-sec">
                            <div className="text">
                                <h2>What we offer?</h2>
                            </div>
                            <div className="animation">
                                <div className="animation-text">
                                    <p>{animationText1}</p>
                                </div>
                                <div className="animation-img">
                                    <img src={animationImg1} alt="" />
                                </div>
                                <button className="arrow" onClick={() => {handelSec1(); setAnimationText1(text1[sec1]); setAnimationImg1(img1[sec1])}}>
                                    <img src="/arrow.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="work-sec">
                            <div className="text">
                                <h2>Why choose us?</h2>
                            </div>
                            <div className="animation">
                                <div className="animation-text">
                                    <p>{animationText2}</p>
                                </div>
                                <div className="animation-img">
                                    <img src={animationImg2} alt="" />
                                </div>
                                <button className="arrow" onClick={() => {handelSec2(); setAnimationText2(text2[sec2]); setAnimationImg2(img2[sec2])}}>
                                    <img src="/arrow.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="work-sec">
                            <div className="text">
                                <h2>The Explorer’s Hub</h2>
                            </div>
                            <div className="animation">
                                <div className="animation-text">
                                    <p>{animationText3}</p>
                                </div>
                                <div className="animation-img">
                                    <img src={animationImg3} alt="" />
                                </div>
                                <button className="arrow" onClick={() => {handelSec3(); setAnimationText3(text3[sec3]); setAnimationImg3(img3[sec3])}}>
                                    <img src="/arrow.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="people">
                    <h2>Meet Our Team</h2>
                    <div className="flex items-center justify-center mb-5 w-full">
                        <AnimatedTooltip items={people} />
                    </div>
                </div>
                
            </div>
        </div>
    );
};
export default AboutUs;