import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return(
    <div>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/Ca">Ca</Link></li>
        <li><Link to="/Cl">Cl</Link></li>
        <li><Link to="/Til">Til</Link></li>
        <li><Link to="/soaple/Soaple">SOAPLE</Link></li>
        <li><Link to="/soaple/SoapleLibrary">SoapleLibrary</Link></li>
        <li><Link to="/soaple/SoapleBlog/page/MainPage">SoapleBlog</Link></li>
        <li><Link to="/Roulette">Roulette</Link></li>
      </ul>
    </div>
  );
}

export default Nav;