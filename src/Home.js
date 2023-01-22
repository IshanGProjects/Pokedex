import { useState } from "react";
import { useEffect } from "react";
import useSound from 'use-sound';
//Importing Audio For Home Page
import boopSfx from  "./static/music.mp3";

const Home = () => {

    // const [name,setName] = useState( 'Ishan');


    // const handleClick = () => {
    //     console.log("Click registered")
    //     setName('Luigi')
    // }

   



    const BoopButton = () => {
        const [play] = useSound(boopSfx);
      
        return <button onClick={play}>Continue</button>;
    };



    const Typer = ({speed = 100, children}) => {
        const [idx, setidx] = useState(0);
        useEffect(() => {
          const timer = window.setInterval(() => setidx(v => v + 1), speed);
          return () => window.clearInterval(timer);
        })
        
        return <div>{children.substr(0,idx)}</div>;
      };
      

    return (
        
        <div className="home">
            {/* <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <p>{name}</p> */}
            
            

            <div className="nes-container is-rounded is-dark">
                <Typer>Welcome Sarus Lifting, Thank you for giving me the oppurtunity to apply for this postion. Have fun Checking out the web-app I made!</Typer>
            </div>
        </div>
    );
}

export default Home;