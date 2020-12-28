import React, { useState } from "react";
import Details from './details'
import {v4 as uuidv4} from 'uuid'
const MainRecipe = ({recipee}) => {
  const [show ,setShow]=useState(false);

  return (
    <div key={uuidv4()}>
      <h2 className="label">{recipee.label}</h2>
      <img className="image" src={recipee.image} alt="" />

      <a
        className="url"
        href={recipee.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        URL{" "}
      </a>
      <button className="btn" onClick={()=>setShow(!show)}  key={uuidv4()}> Ingredients </button> 
            {show &&<Details ingredients={recipee.ingredients} key={uuidv4()}/>}
    </div>
  );
};
export default MainRecipe;
