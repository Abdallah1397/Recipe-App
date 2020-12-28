import React,{useState,useEffect} from "react";
import vid from "./maincooking.mp4";
import axios from 'axios';
const Home = () => {
const [videos,setVideos]=useState([]);
useEffect(()=>{
    axios.get('./data.json').then(res=>{
        setVideos(res.data.videos);
    })
},[]);
    const allVideo=videos.map((vidItem)=>{
        return(
            <div key={vidItem.id} className="findDiv">
                <h3 className="label1">{vidItem.label}</h3>
                <video autoPlay loop className="findVideo">
                    <source src={vidItem.video} type="video/mp4" />
                 </video>
            </div>
        )
    })
    return (
    <div className="HomeVideo">
      <div className="overlay">
        <h1 className="welcome"> Welcome .. </h1>
        <p className="pargraph">
           this is a Search App to help you to define your Food and know how to cook it,
          <br />
        </p>
      </div>
      <video autoPlay loop playsInline className="vid">
        <source src={vid} type="video/mp4" />
      </video>
      <h1 className="find"> You Can Find .. </h1>
      {allVideo}
      <footer className="foot"> By Abdallah Attallah 2020 </footer>
    </div>
  );
};
export default Home;
