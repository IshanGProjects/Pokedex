import useSound from 'use-sound';
import boopSfx from  "./static/music.mp3";

const Navbar = () => {
    const BoopButtonPokemon = () => {
    const [play, {stop}] = useSound(boopSfx);
    
    return <a onMouseOver={play} onMouseLeave={()=>{
        stop()
    }} href="/pokemon" >Find Pokemon </a>;
    };

    const BoopButtonHome = () => {
    const [play, {stop}] = useSound(boopSfx);
        return <a onMouseOver={play} onMouseLeave={()=>{
            stop()
        }} href="/" >Home</a>;
    };

    return( 
        <nav className="navbar">
            <h1>Pokedex</h1>
            <img className="pokeBall" src="pokeBall.png" alt=""></img>
            <div className="links">
                <BoopButtonHome></BoopButtonHome>
                <BoopButtonPokemon></BoopButtonPokemon>
            </div>
        </nav>
    ) ;
}

export default Navbar;