import React from 'react';
import '../css/Home.css'

import { importAll } from '../utils/importAllImages';


export default function Home() {
    const imagesImported = importAll(
        require.context('../assets/logos/', true, /\.(png|jpe?g|svg)$/)
    );
    console.log("Available images:", Object.keys(imagesImported));
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
                                <h3>FRONTEND</h3>
                                <div class="star"></div>
                                
                            </div>
                            <div class="stack-main-content">
                                
                                <div class="stack-list">
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["html5-logo.png"]} alt="html5-logo" className="stack-logo"/>
                                        <p className="logo-text">HTML5</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["css3-logo.png"]} alt="css3-logo" className="stack-logo"/>
                                        <p className="logo-text">CSS3</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["react-react-native-logo.png"]} alt="react-logo" className="stack-logo"/>
                                        <p className="logo-text">React</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["react-react-native-logo.png"]} alt="react-native-logo" className="stack-logo"/>
                                        <p className="logo-text">React Native</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["redux-logo.png"]} alt="redux-logo" className="stack-logo"/>
                                        <p className="logo-text">Redux</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["JavaScript-logo.png"]} alt="javascript-logo" className="stack-logo"/>
                                        <p className="logo-text">JavaScript</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["expo-square-logo.png"]} alt="expo-logo" className="stack-logo"/>
                                        <p className="logo-text">Expo</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="stack stackEven" id="backend-container">
                            <div class="stack-main-content">
                                <div class="stack-list">
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["flask-logo.png"]} alt="flask-logo" className="stack-logo"/>
                                        <p className="logo-text">Flask</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["sql-logo.png"]} alt="sql-logo" className="stack-logo"/>
                                        <p className="logo-text">SQL</p>
                                    </div>
                                </div>
                            </div>
                            <div class="shape-container">
                                <h3>BACKEND</h3>
                                <div class="circle"></div>
                            </div>
                        </div>

                        <div class="stack stackOdd" id="database-container">
                            <div class="shape-container">
                                <h3>DATABASE</h3>
                                <div class="triangle"></div>
                            </div>
                            <div class="stack-main-content">
                                
                                <div class="stack-list">
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["mysql-logo.png"]} alt="mySQL-logo" className="stack-logo"/>
                                        <p className="logo-text">MySQL</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["dynamodb-logo.png"]} alt="aws-dynamodb-logo" className="stack-logo"/>
                                        <p className="logo-text">AWS DynamoDB</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["mongodb-logo.svg"]} alt="mongodb-logo" className="stack-logo"/>
                                        <p className="logo-text">MongoDB</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["firebase-logo.png"]} alt="firebase-logo" className="stack-logo"/>
                                        <p className="logo-text">Firebase</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="stack stackEven" id="tools-container">
                            <div class="stack-main-content">
                                <div class="stack-list">
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["git-logo.png"]} alt="git-logo" className="stack-logo"/>
                                        <p className="logo-text">Git</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["xcode-logo.png"]} alt="xcode-logo" className="stack-logo"/>
                                        <p className="logo-text">XCode</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["npm-logo.png"]} alt="npm-logo" className="stack-logo"/>
                                        <p className="logo-text">NPM</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["godot-logo.png"]} alt="godot-logo" className="stack-logo"/>
                                        <p className="logo-text">Godot</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["jupyter-logo.png"]} alt="jupyter-notebook-logo" className="stack-logo"/>
                                        <p className="logo-text">Jupyter Notebook</p>
                                    </div>
                                </div>
                            </div>
                            <div class="shape-container">
                                <h3>TOOLS</h3>
                                <div class="square"></div>
                            </div>
                        </div>
                        <div class="stack stackOdd" id="design-container">
                            <div class="shape-container">
                                <h3> + DESIGN</h3>
                                <div class="pentagon"></div>
                            </div>
                            <div class="stack-main-content">
                                <div class="stack-list">
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/photoshop-logo.png"]} alt="photoshop-logo" className="stack-logo"/>
                                        <p className="logo-text">Photoshop</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/lightroom-logo.png"]} alt="lightroom-logo" className="stack-logo"/>
                                        <p className="logo-text">Lightroom</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/illustrator-logo.png"]} alt="illustrator-logo" className="stack-logo"/>
                                        <p className="logo-text">Illustrator</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/indesign-logo.png"]} alt="indesign-logo" className="stack-logo"/>
                                        <p className="logo-text">InDesign</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/premiere-pro-logo.png"]} alt="premiere-pro-logo" className="stack-logo"/>
                                        <p className="logo-text">Premiere Pro</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/after-effects-logo.png"]} alt="after-effects-logo" className="stack-logo"/>
                                        <p className="logo-text">After Effects</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/figma-logo-circle.png"]} alt="figma-logo" className="stack-logo"/>
                                        <p className="logo-text">Figma</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/proto-io-logo.png"]} alt="proto-io-logo" className="stack-logo"/>
                                        <p className="logo-text">Proto.io</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/canva-logo.png"]} alt="canva-logo" className="stack-logo"/>
                                        <p className="logo-text">Canva</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/zbrush-logo.png"]} alt="zbrush-logo" className="stack-logo"/>
                                        <p className="logo-text">Zbrush</p>
                                    </div>
                                    <div className="logo-and-text-container">
                                        <img src={imagesImported["design/touchdesigner-logo.png"]} alt="touchdesigner-logo" className="stack-logo"/>
                                        <p className="logo-text">TouchDesigner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}