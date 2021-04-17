import React from 'react';

function Hero() {
    return (
        <section id="hero">
            <h2>Handcrafted, home-made masterpieces</h2>
            <form id="form" action="https://www.monproweb.io">
                <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                />
                <input id="submit" type="submit" value="Get Started" className="btn" />
            </form>
        </section>
    );
}

export default Hero;
