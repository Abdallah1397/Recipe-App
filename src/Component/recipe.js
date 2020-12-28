import React ,{useState } from "react";
import Axios from "axios";
import {v4 as uuidv4} from 'uuid'
import MainRecipe from './divRecipe';
const Recipe = () => {
  const [query,setquery]=useState("");
  const [recipe,setRecipe]=useState([]);
  
  const APP_ID = "12db4997";
  const APP_KEY = "5c2060edfef194813a99e6ae2a93c29f";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getdata = async () => {
    /* async function btl8y l then ==> await (estna l7d ama ulr y load ) */
    const result = await Axios.get(url);
    console.log(result);
    setRecipe(result.data.hits);
    setquery("");
  };
  const onsubmit =(e)=>{
      e.preventDefault();

      getdata();
  };
  const onchange=(e)=>{
      setquery(e.target.value);
      
  };
  return (
    <div>
      <div className="Form">
        <form className="main_form" onSubmit={onsubmit}>
          <input type="text" placeholder="Let's Search ... " autoComplete="on" autoCorrect="on"  className="input_search" onChange={onchange} value={query}/>
          <button className="search"> Search</button>
        </form>
      </div>
      <div>
        {recipe !==[] && recipe.map(recipeItem=>
            <div className="recipeItem" key={uuidv4()}>
            <MainRecipe recipee={recipeItem.recipe}/>
            </div>
            )}

      </div>
    </div>
  );
};
export default Recipe;
