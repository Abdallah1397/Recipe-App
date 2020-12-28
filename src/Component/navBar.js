import React from "react";
import Capture3 from './images/Capture3.PNG'
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="Recipe-NavBar">
      <div className="container">
        <div className="NavBar_Div">
          <img className="logo" src={Capture3} alt="" />
        </div> 
        <ul className="listgroup">
          <li className="listgroupitem">
            <NavLink exact to ="/"  className="fontList">
              Home
            </NavLink>
          </li>
          <li className="listgroupitem">
            <NavLink exact to ="/recipe" className="fontList">
              Recipes
            </NavLink>
          </li>
        </ul>
      </div>    
    </div>
  );
};
export default NavBar;
