"use client";
import Navbar1 from "@/components/Navbar1";
import { useState } from "react";
const AboutUs = () => {
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
        "",
        "",
        "",
        "",
        ""
    ]
    const img2 = [
        "",
        "",
        "",
        ""
    ]
    const img3 = [
        "",
        "",
        ""
    ]
    const [animationText1, setAnimationText1] = useState(text1[0]);
    const [animationText2, setAnimationText2] = useState(text2[0]);
    const [animationText3, setAnimationText3] = useState(text3[0]);
    const [animationImg1, setAnimationImg1] = useState(img1[0]);
    const [animationImg2, setAnimationImg2] = useState(img2[0]);
    const [animationImg3, setAnimationImg3] = useState(img3[0]);
    return (
        <div className="aboutus-content">
            <Navbar1 />
            <div className="content">
                <h1>About Us</h1>
                <div className="slogan">
                    <p>Welcome to <span>TREKYA</span> – Your Personalized Travel Companion</p>
                    <h2>---Luxury Reimagined---</h2>
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
                                    <img src="#" alt="" />
                                </div>
                                <button className="arrow">
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
                                    <img src="#" alt="" />
                                </div>
                                <button className="arrow">
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
                                    <img src="#" alt="" />
                                </div>
                                <button className="arrow">
                                    <img src="/arrow.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;