import React from 'react';
import '../css/Home.css'

export default function Home() {
    return (
        <div id="home-bg">
            <section id="main-section">
                <div class="content-container">
                    <div class="text-group">
                        <h1> Hi, my name is Madison Shimbo </h1>
                        <p> 
                            I’m a Front-end Engineer, UX/UI Designer, and an artist.
                            I have 2 years of experience in Software Engineering and specialize in mobile engineering. 
                        </p>
                    </div>
                    <div class="shapes">
                        <div class="pentagon left-shape"></div>
                        <div class="star right-shape"></div>
                        <div class="square left-shape"></div>
                        <div class="circle right-shape"></div>
                        <div class="triangle left-shape"></div>
                    </div>
                </div>
            </section>
            <section id="about-section">
                <div class="content-container">
                    <div class="shapes">
                        <div class="pentagon left-shape"></div>
                        <div class="star right-shape"></div>
                        <div class="square left-shape"></div>
                        <div class="circle right-shape"></div>
                        <div class="triangle left-shape"></div>
                    </div>
                    <div class="text-group">
                        <h2>About Me</h2>
                        <p> 
                            I’m extremely passionate about building products based around a user centered design approach, 
                            ensuring that the work I do affects real people with real needs in a fresh and new way. 
                        </p>
                        <p>
                            I have worked as a Front-end Engineer & UX/UI Designer within mobile development for the past two 
                            years at a start-up, in which I helped design, work on, and release an iOS app to the app store 
                            called FundingWire.
                        </p>
                        <p>
                            Within tech, I have experience with web development, mobile engineering, game engineering, and 
                            back-end engineering.
                        </p>
                        <p>
                            Within design and the arts, I have experience in UX Interviewing, UI Design, graphic design, 
                            motion graphics, video/photo-editing, social media content creation, and web design.
                        </p>
                        <p>
                            With my background in tech, experience in UX/UI Design principles, and growing up as a multi-medium 
                            artist and designer, I bring a unique set of skills and perspectives to any product I work on.
                        </p>
                    </div>
                </div>
                
            </section>
            <section id="stack-section" class="last-section">
                <div class="content-container">
                    <h2>My Stack</h2>
                    <div id="stacks-container">
                        <div class="stack stackOdd" id="frontend-container">
                            <div class="shape-container">
                                <div class="star"></div>
                            </div>
                            <div class="stack-main-content">
                                <h3>FRONTEND</h3>
                                <div class="stack-list">
                                    <p> Test </p>
                                    <p> Test </p>
                                    <p> Test </p>
                                </div>
                            </div>
                        </div>

                        <div class="stack stackEven" id="backend-container">
                            <div class="stack-main-content">
                                <h3>BACKEND</h3>
                                <div class="stack-list">
                                    <p> Test </p>
                                    <p> Test </p>
                                    <p> Test </p>
                                </div>
                            </div>
                            <div class="shape-container">
                                <div class="circle"></div>
                            </div>
                        </div>

                        <div class="stack stackOdd" id="database-container">
                            <div class="shape-container">
                                <div class="triangle"></div>
                            </div>
                            <div class="stack-main-content">
                                <h3>DATABASE</h3>
                                <div class="stack-list">
                                    <p> Test </p>
                                    <p> Test </p>
                                    <p> Test </p>
                                </div>
                            </div>
                        </div>

                        <div class="stack stackEven" id="design-container">
                            <div class="stack-main-content">
                                <h3>DESIGN</h3>
                                <div class="stack-list">
                                    <p> Test </p>
                                    <p> Test </p>
                                    <p> Test </p>
                                </div>
                            </div>
                            <div class="shape-container">
                                <div class="square"></div>
                            </div>
                        </div>
                        <div class="stack stackOdd" id="tools-container">
                            <div class="shape-container">
                                <div class="pentagon"></div>
                            </div>
                            <div class="stack-main-content">
                                <h3>TOOLS</h3>
                                <div class="stack-list">
                                    <p> Test </p>
                                    <p> Test </p>
                                    <p> Test </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}