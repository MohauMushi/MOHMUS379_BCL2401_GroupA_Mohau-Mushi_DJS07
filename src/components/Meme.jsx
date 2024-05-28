import React from "react";
import memesData from "../memesData"

export default function Meme() {
	/**
	 * new state called `memeImage` with an empty string as default. When the getMemeImage function is called, update the `memeImage` state to be the random chosen image URL
	 */
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});
	
	const [allMemeImages, setAllMemeImages] = React.useState(memesData)


	function getMemeImage(){
		const memesArray = memesData.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		setMemeImage(memesArray[randomNumber].url);
		
	}
	
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Shut up"
          className="form--input"
        />
        <input
          type="text"
          placeholder="and take my money"
          className="form--input"
        />
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
	  <img src={memeImage} className="meme--image"></img>
    </main>
  );
}
