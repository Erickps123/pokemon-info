import React from 'react';
import '../components/res/css/Pokecard.css';
import male from '../components/res/img/mars.png';
import female from '../components/res/img/femenine.png';
import pokeball from './res/img/Pokeball_1.png';


class Pokecard extends React.Component{

    render()
    {
        return <>
        <div className="Card">
            <div className="Card-header">
                <div className="Head">
                    <div className="gender">
                        <img src={male} alt="" />
                        <img src={female} alt="" />
                    </div>
                    <h2 id="pokemon-name">Bulbasaur</h2>
                </div>
                <div className="types">
                    <span className="type">Grass</span>
                    <span className="type">Poisson</span>
                </div>
                <div className="img">
                    <img id="pokemon" alt='pokemon' src="https://tecmoviles.com/wp-content/uploads/2016/09/evolucion-de-bulbasaur-todos-los-trucos.png"/>
                </div>
            </div>
                <img src={pokeball} className="poke-bg" alt="No image" />
            <div className="Card-footer">
                <div className="left">
                    <h3>About</h3>
                    <p>Abilities:</p>
                    <p id="abilities">overgrow, chilorophyll</p>
                    <h4>Encounter Areas</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Chance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cerulean city</td>
                                <td>100/100</td>
                            </tr>
                            <tr>
                                <td>Cerulean city</td>
                                <td>100/100</td>
                            </tr>
                            <tr>
                                <td>Cerulean city</td>
                                <td>100/100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="right">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={3}><span>Stats</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HP</td>
                                <td>45</td>
                                <td className='td-barra'><meter className='barras' id="meter-hp" value="0.45"></meter></td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>49</td>
                                <td className='td-barra'><meter className='barras' id="meter-attack" value="0.49"></meter></td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>49</td>
                                <td className='td-barra'><meter className='barras' id="meter-defense" value="0.49"></meter></td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>45</td>
                                <td className='td-barra'><meter className='barras' id="meter-speed" value="0.45"></meter></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    }
}

export default Pokecard;