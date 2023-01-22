import Axios from 'axios'
import { useState } from 'react'



const Pokemon = () => {
    /*Pokemon Attributes*/
    //Number
    const [num, setNum] = useState(Math.floor(Math.random() * 1000))
    //Name
    const [name, setName] = useState("")
    //Official Artwork
    const [offArt, setOffArt] = useState("")
    //Front Image
    const [frontImg, setFrontImg] = useState("")
    //Front Female Image
    const [frontFemaleImg, setFrontFemaleImg] = useState("")
    //Front Shiny Image
    const [frontShinyImg, setFrontShinyImg] = useState("")
    //Back Image
    const [backImg, setBackImg] = useState("")
    //Back Shiny Image
    const [BackShinyImg, setBackShinyImg] = useState("")
    //HP
    const [hp, setHp] = useState(0)
    //Attack
    const [attack, setAttack] = useState(0)
    //Defense
    const [defense, setDefense] = useState(0)
    //Defense
    const [speed, setSpeed] = useState(0)
    //moves
    const [moves, setMoves] = useState([
        {
            move: {
                name: ""
            }
        }
    ])

   

    //Function to Cap the First Letter
    function titleCap(str){
        return str.charAt(0).toUpperCase() + str.slice(1); 
    }

   

    //Function to get Pokemon Data
    async function getPokemon(){
        setNum(Math.floor(Math.random() * 1000))
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        setName(titleCap(res.data.name))
        setOffArt(res.data.sprites.other["official-artwork"].front_default)
        setFrontImg(res.data.sprites.front_default)
        setFrontFemaleImg(res.data.sprites.front_female)
        setFrontShinyImg(res.data.sprites.front_shiny)
        setBackImg(res.data.sprites.back_default)
        setBackShinyImg(res.data.sprites.back_shiny)
        setHp(res.data.stats[0].base_stat)
        setAttack(res.data.stats[1].base_stat)
        setDefense(res.data.stats[2].base_stat)
        setSpeed(res.data.stats[5].base_stat)
        setMoves(res.data.moves)
    }   
    function Content (props){
        return (
            <div className='nes-container is-rounded'>
                <object className='pokeImg' data={offArt} type="image/png" width="55%" height="55%" alt="Image Not Found">
                    <img src="placeholder.png" alt=''/>
                </object>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <object data={frontImg} type="image/png">
                                    <img src="placeholder.png" alt=''/>
                                </object>
                            </td>
                            <td height="120%">
                                <object data={backImg} type="image/png">
                                    <img src="placeholder.png" alt=''/>
                                </object>
                            </td>
                            <td>
                                <object data={frontShinyImg} type="image/png">
                                    <img src="placeholder.png" alt=''/>
                                </object>
                            </td>
                            <td height="120%">  
                                <object data={BackShinyImg} type="image/png">
                                    <img src="placeholder.png" alt=''/>
                                </object>
                            </td>
                            <td height="120%">
                                <object data={frontFemaleImg} type="image/png">
                                    <img src="placeholder.png" alt=''/>
                                </object>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1>{name} #{num}</h1>
                <div className='hpLevel'>
                    <span className="nes-text is-error">HP: {hp}</span>
                    <progress className="nes-progress is-error" value={hp} max="300"></progress>
                </div>
                <div className='attackLevel'>
                    <span className="nes-text is-primary">Attack: {attack}</span>
                    <progress className="nes-progress is-primary" value={attack} max="300"></progress>
                </div>
                <div className='defenseLevel'>
                    <span className="nes-text is-warning">Defense: {defense}</span>
                    <progress class="nes-progress is-warning" value={defense} max="300"></progress>
                </div>
                <div className='speedLevel'>
                    <span className="">Speed: {speed}</span>
                    <progress className="nes-progress is-pattern" value={speed} max="300"></progress>
                </div>
                <h3>Moves-</h3>
                <ul className='nes-list is-disc'>
                    {
                        moves.slice(0, 5).map(function(move, index){
                            return <li key={move.move.name}>{titleCap(move.move.name)}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
    

    return (
        <div className='pokemonPage'  >
            <button id='loadPokemon' className='nes-btn is-warning' onClick={getPokemon}>Load Pokemon</button>
            <br/>
            {
                name === "" ? <div></div> : <Content> </Content> 
            }
            <div className='pokemonContainer' id='container'>
            </div>
        </div>
    );
}

export default Pokemon;