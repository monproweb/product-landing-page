import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="page-wrapper">
      <header id="header">
        <div className="logo">
          <img
            id="header-img"
            src={logo}
            alt="mon pro web logo"
          />
        </div>

        <nav id="nav-bar">
          <ul>
            <li><a className="nav-link" href="https://monproweb.io/a-propos">Features</a></li>
            <li><a className="nav-link" href="https://monproweb.io/equipe">How It Works</a></li>
            <li><a className="nav-link" href="https://monproweb.io">Pricing</a></li>
          </ul>
        </nav>
      </header>

      <div className="container"></div>

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

      <div className="container">
        <section id="features">
          <div className="grid">
            <div className="icon"><i className="fab fa-3x fa-spin fa-react"></i></div>
            <div className="desc">
              <h2>Premium Materials</h2>
              <p>React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.</p>
            </div>
          </div>
          <div className="grid">
            <div className="icon"><i className="fas fa-3x fa-rocket"></i></div>
            <div className="desc">
              <h2>Fast Shipping</h2>
              <p>In software development, agile (sometimes written Agile) practices involve discovering requirements and developing solutions through the collaborative effort of self-organizing and cross-functional teams and their customer(s)/end user(s). It advocates adaptive planning, evolutionary development, early delivery, and continual improvement, and it encourages flexible responses to change.</p>
            </div>
          </div>
          <div className="grid">
            <div className="icon">
              <i className="fas fa-3x fa-certificate" aria-hidden="true"></i>
            </div>
            <div className="desc">
              <h2>Quality Assurance</h2>
              <p>Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js and Svelte. Jest does not require a lot of configuration for first time users of a testing framework.</p>
            </div>
          </div>
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
        <footer>
          <ul>
            <li><a href="https://monproweb.io/politique-de-confidentialité">Privacy</a></li>
            <li><a href="https://monproweb.io/mentions-legales">Terms</a></li>
            <li><a href="mailto:thomas.erhel@gmail.com">Contact</a></li>
          </ul>
          <span>Copyright 2021, Mon Pro Web</span>
        </footer>
      </div>
    </div >
  );
}

export default App;
