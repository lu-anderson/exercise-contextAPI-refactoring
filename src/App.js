import React from 'react';
import './App.css';
import Cars from './Cars';
import CarsContext from './context/CarsContext';


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      red: false,
      yellow: false,
      blue: false,
    }
  }

  moveCar(car, side){
    this.setState({
      [car]: side
    });
  }

  render(){
    return (
      <CarsContext.Provider value={ {...this.state, moveCar: this.moveCar.bind(this) } }>
        <Cars />
      </CarsContext.Provider>
    );
  }
}

export default App;
