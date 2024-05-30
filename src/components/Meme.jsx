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
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url
		setMeme(prevMeme => ({
			...prevMeme, 
			randomImage: url
		}))
		
	}
	
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Shut up"
          className="form--input"
		  name="topText"
		  value={meme.topText}
        />
        <input
          type="text"
          placeholder="and take my money"
          className="form--input"
		  name="bottomText"
		  value={meme.bottomText}
        />
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
	  <div className="meme">
	    <img src={meme.randomImage} className="meme--image"></img>
	    <h2 className="meme--text top">One does not simply</h2>
	    <h2 className="meme--text bottom">Walk into Mordor</h2>
	  </div>
    </main>
  );
}
