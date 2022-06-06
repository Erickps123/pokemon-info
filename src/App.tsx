import React from 'react';
import './res/css/App.css';
import Pokecard from './components/Pokecard';
import pokemon_logo from './res/img/pokemon_logo.png'
import NavButton from './components/Navbutton';
import backbtn from "./res/img/left-arrow.png";
import nextbtn from "./res/img/right-arrow.png";
import pokeball from "./res/img/Pokeball.png";
import ApiServices from './api/ApiServices';

type MyState = {data:Array<any>,current:Array<any>, current_index:any}
class App extends React.Component<{},MyState>
{
  constructor(props: any){
    super(props);
    this.state = {data:[],current:[],current_index:0};
    ApiServices.getAllPokemons().then(res=>{
      this.setState({data: res})
    })
    this.nextPokemon = this.nextPokemon.bind(this);
    this.prevPokemon = this.prevPokemon.bind(this);
  }


  nextPokemon (){
    console.log("funciono")
  }
  prevPokemon (){

  }
  render(){
   
    return(
      <div className='header'>
        <div className="pokemon_logo">
          <img src={pokemon_logo}/>
        </div>
       
         <div className="container">
            <div className="row">
            <div className="backbutton">
              <NavButton  onClick={this.prevPokemon} type="back" img={backbtn} />
            </div>
            <div className="pokecard">
              <Pokecard/>
            </div>
            <div className="nextbutton">
              <NavButton onClick={this.nextPokemon} type="next" img={nextbtn}/>
            </div>
          </div>
         </div>
         <div className='pokeball-footer'>
           <img className='pokeball' src={pokeball} alt="Que lo que mi loko!! no tenemo na, tu supite XD" />
         </div>
      </div>
    );
  }
 



}

export default App;
