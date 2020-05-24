import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // const reactLogo= <img className="logo" src="/images/react-logo.svg" alt="React-logo" srcset=""/>;
    // const image = <img src="/images/ironhack-logo.svg" alt="Logo Image" />;
    // const menu = <img src="/images/menu-top.svg" alt="" srcset="" />;
    const divUp = (
      <section>
        <nav>
          <img src="/images/ironhack-logo.svg" alt="Logo Image" />
          <img src="/images/menu-top.svg" alt="menu" srcset="" />
        </nav>

        <h1>
          Say hello to <br />
          ReactJS
        </h1>

        <p>
          You will learn <br /> framework from scratch, to <br /> become an
          Ninja Developer{" "}
        </p>

        <button>Awesome!</button>
      </section>
    );
    const divDown = (
      <section className="divDown">
        <div>
          <img src="/images/icon1.png" alt="Icon" srcset="" />
          <h2>Declarative</h2>
          <p>
            React make it <br />
            painless to create <br />
            interactive UIs.
          </p>
        </div>
        <div>
        <img src="/images/icon2.png" alt="Icon" srcset=""/>
            <h2>Components</h2>
            <p>Build encapsulated <br/> 
            components that <br/>
            manage their state.
            </p>
        </div>
        <div>
        <img src="/images/icon3.png" alt="Icon" srcset=""/>
            <h2>Single-Way</h2>
            <p>A set of immutable<br/> 
            values are passed to <br/>
            the components.
            </p>  
        </div>
        <div>
        <img src="/images/icon3.png" alt="Icon" srcset=""/>
            <h2>JSX</h2>
            <p>Statically-typed <br/> 
            designed to run on <br/>
            modern bro.
            </p>
        </div>
      </section>
    );

    return (
      <div className="divUp">
        {divUp}
        {divDown}
      </div>
    );
  }
}

export default App;
