import logo from './logo.svg';
import Menu from "./components/menu/menu"; // Assuming Menu component is in a separate file

import Posts from './components/pages/Posts/index';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <div>
      <div className="top">
        <div className="links">
          <a href="https://www.linkedin.com/in/gururaj-math-223360255/" target="_blank">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://codepen.io/gururajmath"><i className="bx bxl-codepen" target="_blank"></i></a>
          <a href="https://github.com/Gururaj-Math" target="_blank"><i className="bx bxl-github"></i></a>
        </div>
        <div className="head">
          OST<span>.</span>
        </div>
        <div className="search">
          <i className="bx bx-search"></i>
          <i className="fa-solid fa-bars on hamburger"></i>
        </div>
      </div>
      <Menu />
      <div className="alert">
        <ul className="navigation1">
          <i className="bx bxs-x-circle close"></i>
          {/* Your dynamic menu items will be populated here */}
        </ul>
      </div>
    </div>

        <Posts />
      </header>
    </div>
  );
}

export default App;
