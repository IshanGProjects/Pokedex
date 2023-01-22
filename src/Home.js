import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
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
            <div className="nes-container is-rounded is-dark" id="homeContainer">
                <Typer>Welcome Sarus Lifting, Thank you for giving me the oppurtunity to apply for this postion. Have fun Checking out the web-app I made!</Typer>
                <img src="ash.gif" alt=""></img>
                <Typer>With Passion,</Typer>
                <Typer>Ishan Gohil</Typer>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <a className='nes-icon github is-large' href="https://github.com/IshanGProjects"> </a>
                        </td>
                        <td>
                            <a className='nes-icon linkedin is-large' href="https://www.linkedin.com/in/ishan-gohil/"> </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;