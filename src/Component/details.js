import React from 'react'
import {v4 as uuidv4} from 'uuid'
const Details =({ingredients})=>{
   return(
       ingredients.map(ingredItem=>{
           return(
               <ul key={uuidv4()}>
                   <li key={uuidv4()}>
                       {ingredItem.text}
                   </li>
               </ul>
           )
       })
   )
         
}
export default Details;