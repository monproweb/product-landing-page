import React from 'react';

function Hero() {
    return (
        <div className="container">
            <section id="features">
                <div className="grid">
                    <div className="icon"><i className="fab fa-3x fa-spin fa-react"></i></div>
                    <div className="desc">
                        <h2>Premium Materials</h2>
                        <p>React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components.</p>
                    </div>
                </div>
                <div className="grid">
                    <div className="icon"><i className="fas fa-3x fa-rocket"></i></div>
                    <div className="desc">
                        <h2>Fast Shipping</h2>
                        <p>In software development, agile (sometimes written Agile) practices involve discovering requirements and developing solutions through the collaborative effort of self-organizing and cross-functional teams and their customer(s)/end user(s).</p>
                    </div>
                </div>
                <div className="grid">
                    <div className="icon">
                        <i className="fas fa-3x fa-certificate" aria-hidden="true"></i>
                    </div>
                    <div className="desc">
                        <h2>Quality Assurance</h2>
                        <p>Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications.</p>
                    </div>
                </div>
            </section>
            <section id="how-it-works">
                <iframe
                    id="video"
                    height="315"
                    title="F8 2019: Mobile Innovation with React Native, ComponentKit, and Litho"
                    src="https://www.youtube-nocookie.com/embed/NCAY0HIfrwc?rel=0&amp;controls=0&amp;showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </section>
            <section id="pricing">
                <div className="product" id="tenor">
                    <div className="level">Web</div>
                    <h2>$600</h2>
                    <ol>
                        <li>JSX.</li>
                        <li>Components.</li>
                        <li>One-way Data Binding.</li>
                        <li>Virtual DOM.</li>
                        <li>Simplicity.</li>
                        <li>Performance.</li>
                    </ol>
                    <button className="btn">Select</button>
                </div>
                <div className="product" id="bass">
                    <div className="level">Mobile</div>
                    <h2>$900</h2>
                    <ol>
                        <li>Shared Business Logic with Different UI Codebases.</li>
                        <li>iOS & Android Native Mobile Apps.</li>
                        <li>Medium investment in staff and time.</li>
                        <li>A selection of Native UI elements for iOS and Android UI elements are specific to the target platform and not shared.</li>
                    </ol>
                    <button className="btn">Select</button>
                </div>
                <div className="product" id="valve">
                    <div className="level">Web & Mobile</div>
                    <h2>$1200</h2>
                    <ol>
                        <li>All features.</li>
                    </ol>
                    <button className="btn">Select</button>
                </div>
            </section>
        </div>
    );
}

export default Hero;
