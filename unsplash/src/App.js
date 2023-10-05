import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const[results,setResults]=useState([])
  // k49SKunqoEgwu1jFpjQuu2nwQwlLPfKCrTVe0JVn78g
  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY 


  const fetchImages = ()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=k49SKunqoEgwu1jFpjQuu2nwQwlLPfKCrTVe0JVn78g&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <div className="mydiv1">Unsplash.co</div>
      <div className="mydiv">
        <span className="search">Search:</span>
        <input
        style={{width:"60%"}}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input"
        />
        <button className="btn" onClick={()=>fetchImages()}>Send</button>
     
      
      </div>

      <div className="gallery">
        {
          results.map((item)=>{
            return<img className="item" key={item.id} src={item.urls.regular}/>
          })
        }

      </div>
    </div>
  );
}

export default App;
