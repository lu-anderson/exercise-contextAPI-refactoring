import React from 'react';
import CarsContext from './CarsContext';
class CarsProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
  }

  moveCar = (car, side) => {
    this.setState({
      [car]: side
    })
  }

  render() {
    const { children } = this.props;
    return (
      <CarsContext.Provider value={ {...this.state, moveCar: this.moveCar} }>
        { children }
      </CarsContext.Provider>
    )
  }
}

export default CarsProvider;