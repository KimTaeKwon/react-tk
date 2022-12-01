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
      </ul>
    </div>
  );
}

export default Nav;